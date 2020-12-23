import * as check from 'check-types';
import {Component, OnInit} from '@angular/core';
import {TailorCollectionService} from '../../services/tailor-collection.service';
import {Options} from '../../models/options';
import {CollectionItem} from 'src/app/models/collection_item';
import {CreationItem} from 'src/app/models/creation_item';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-tailor-creator',
  templateUrl: './tailor_creator.component.html',
  styleUrls: ['./tailor_creator.component.scss'],
  providers: [TailorCollectionService],
})
export class TailorCreatorComponent implements OnInit {
  options: Options[] = [];
  selectedCollection: CollectionItem[] = [];
  selectedCollectionName: string = '';
  selectedItem: Object = null;
  creation: CreationItem = CreationItem.factory({id: 1, front_item: null, bottom_item: null, belt_item: null, back_tem: null, fabric_item: null, price: 0 });
  assetsUrl: string = "../../assets/img/creator/";
  randomCreation:Boolean= false;
  randomCreationWithElement:Boolean= false;

  /**
   * @constructor
   */
  constructor(
    private tailorCollectionService: TailorCollectionService,
  ) {

  }

  /**
   * Initialization
   */
  ngOnInit(): void {
    this.setDefaultSettings();    
  }


  /**
   * Set default settings
   */
  private setDefaultSettings(): void {
    this.getOptions();      
  }

  /**
   * Place the creative in the model
   */  
  setCreation(){    
     for(let option of this.options){
      this.tailorCollectionService.getCollection(option.name).subscribe(collection =>{
       let number = 0;
       let length = collection.length;
        switch(option.name){         
          case 'front':
            if(this.randomCreation === true || (this.selectedItem != null && this.selectedItem['type'] !== 'front')){
              number = Math.floor(Math.random() * length);
            }
            if(this.randomCreationWithElement === true && (this.selectedItem != null && this.selectedItem['type'] === 'front')){
              this.creation.frontItem = collection[this.selectedItem['id'] - 1];
            }
            else this.creation.frontItem = collection[number];
          break;
          case 'bottom': 
            if(this.randomCreation === true || (this.selectedItem != null && this.selectedItem['type'] !== 'bottom')){   
              number = Math.floor(Math.random() * length); 
            }            
            if(this.randomCreationWithElement === true && (this.selectedItem != null && this.selectedItem['type'] === 'bottom')){              
              this.creation.bottomItem = collection[this.selectedItem['id'] - 1];
            }  
            else this.creation.bottomItem = collection[number];  
          break;
          case 'belt':   
            if(this.randomCreation === true || (this.selectedItem != null && this.selectedItem['type'] !== 'belt')){
              number = Math.floor(Math.random() * length);
            }
            if(this.randomCreationWithElement === true && (this.selectedItem != null && this.selectedItem['type'] === 'belt')){
              this.creation.beltItem = collection[this.selectedItem['id'] - 1]; 
            }          
            else this.creation.beltItem = collection[number];
          break;
          case 'back':
            if(this.randomCreation === true || (this.selectedItem != null && this.selectedItem['type'] !== 'back')){
              number = Math.floor(Math.random() * length);
            }  
            if(this.randomCreationWithElement === true && (this.selectedItem != null && this.selectedItem['type'] === 'back')){
              this.creation.backItem = collection[this.selectedItem['id'] - 1]; 
            }               
            else this.creation.backItem = collection[number];
          break;
          case 'fabric': 
            if(this.randomCreation === true || (this.selectedItem != null && this.selectedItem['type'] !== 'fabric')){  
                number = Math.floor(Math.random() * length); 
            }
            if(this.randomCreationWithElement === true && (this.selectedItem != null && this.selectedItem['type'] === 'fabric')){
              this.creation.fabricItem = collection[this.selectedItem['id'] - 1];
            }           
            else this.creation.fabricItem = collection[number];
          break;
        }        
     });
     }
  }

  /**
   * Set random creation
   */  
  setRandomCreation(state: Boolean){    
    this.randomCreation = state;
    this.randomCreationWithElement = false;
    this.setCreation()
 }

 /**
   * Draw a creativewith the selected element
   */  
  setRandomCreationWithElement(state: Boolean){    
    this.randomCreationWithElement = state;
    this.randomCreation = false;
    if(this.selectedItem == null){
      alert("Wybierz element")
    }else
      this.setCreation()
 }

  /**
   * Set collection 
   * @param {string} name
   */
  setCollection(name: string): void {
    this.tailorCollectionService.getCollection(name).subscribe(collection => {
      this.selectedCollection = collection;
    });
  }


  /**
   * Get options
   */
  getOptions(): void {
    this.tailorCollectionService.getOptions().subscribe(options => {
      this.options = options;  
      this.setCreation();  
    });
  }


  /**
   * Select option
   * @param {Options} option
   */
  selectOption(option: Options): void {
    this.selectedCollectionName = option.name;
    this.setCollection(this.selectedCollectionName);
  }


  /**
   * Select item
   * @param {CollectionItem} item
   */
  selectItem(item: CollectionItem): void {
    switch(this.selectedCollectionName) {
      case 'front':
        this.selectedItem = item;
        this.creation.frontItem = item;
        break;
      case 'back':
        this.selectedItem = item;
        this.creation.backItem = item;
        break;
      case 'bottom':
        this.selectedItem = item;
        this.creation.bottomItem = item;
        break;
      case 'belt':
        this.selectedItem = item;
        this.creation.beltItem = item;
        break;
      case 'fabric':
        this.selectedItem = item;
        this.creation.fabricItem = item;
        break;
      default:
        break;
    }   
     this.creation.price = this.calculateCreationPrice(this.creation);    
  }


  /**
   * Calculate creation price
   * @param {CreationItem} creation
   * @return {number}
   */
  calculateCreationPrice(creation: CreationItem): number {
    return (check.assigned(creation.frontItem.price) ? creation.frontItem.price : 0) + 
      (check.assigned(creation.backItem.price) ? creation.backItem.price : 0) +
      (check.assigned(creation.bottomItem.price) ? creation.bottomItem.price : 0) +
      (check.assigned(creation.beltItem.price) ? creation.beltItem.price : 0) *
      (check.assigned(creation.fabricItem.price) ? creation.fabricItem.price : 0);
  }
}

