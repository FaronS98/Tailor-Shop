import * as check from 'check-types';
import {Component, OnInit} from '@angular/core';
import {TailorCollectionService} from '../../services/tailor-collection.service';
import {Options} from '../../models/options';
import {CollectionItem} from 'src/app/models/collection_item';
import {CreationItem} from 'src/app/models/creation_item';


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
  selectedItem: any = null;
  creation: CreationItem = CreationItem.factory({frontItem: null, bottomItem: null, beltItem: null, backItem: null, fabricItem: null, price: 0 , user: null , dateOfOrder: null});
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
    this.creation.price = 0;  
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
              this.creation.frontItem = this.selectedItem;
            }
            else {
              this.creation.frontItem = collection[number];
              this.creation.price += collection[number].price
            }
          break;
          case 'bottom': 
            if(this.randomCreation === true || (this.selectedItem != null && this.selectedItem['type'] !== 'bottom')){   
              number = Math.floor(Math.random() * length); 
            }            
            if(this.randomCreationWithElement === true && (this.selectedItem != null && this.selectedItem['type'] === 'bottom')){              
              this.creation.bottomItem = this.selectedItem;
            }  
            else {
              this.creation.bottomItem = collection[number];
              this.creation.price += collection[number].price
             }  
          break;
          case 'belt':   
            if(this.randomCreation === true || (this.selectedItem != null && this.selectedItem['type'] !== 'belt')){
              number = Math.floor(Math.random() * length);
            }
            if(this.randomCreationWithElement === true && (this.selectedItem != null && this.selectedItem['type'] === 'belt')){
              this.creation.beltItem = this.selectedItem;
            }          
            else {
              this.creation.beltItem = collection[number];
              this.creation.price += collection[number].price
             }
          break;
          case 'back':
            if(this.randomCreation === true || (this.selectedItem != null && this.selectedItem['type'] !== 'back')){
              number = Math.floor(Math.random() * length);
            }  
            if(this.randomCreationWithElement === true && (this.selectedItem != null && this.selectedItem['type'] === 'back')){
              this.creation.backItem = this.selectedItem;
            }               
            else {
              this.creation.backItem = collection[number];
              this.creation.price += collection[number].price
             }
          break;
          case 'fabric': 
            if(this.randomCreation === true || (this.selectedItem != null && this.selectedItem['type'] !== 'fabric')){  
                number = Math.floor(Math.random() * length); 
            }
            if(this.randomCreationWithElement === true && (this.selectedItem != null && this.selectedItem['type'] === 'fabric')){
              this.creation.fabricItem = this.selectedItem;
            }           
            else {
              this.creation.fabricItem = collection[number];
              this.creation.price *= Math.floor(collection[number].price);
             }
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
   * Close option
   * @param {string} null
   */
  closeOption(option: string): void {
    this.selectedCollectionName = option;
    console.log(option)
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
    return Math.floor((check.assigned(creation.frontItem.price) ? creation.frontItem.price : 0) + 
      (check.assigned(creation.backItem.price) ? creation.backItem.price : 0) +
      (check.assigned(creation.bottomItem.price) ? creation.bottomItem.price : 0) +
      (check.assigned(creation.beltItem.price) ? creation.beltItem.price : 0) *
      (check.assigned(creation.fabricItem.price) ? creation.fabricItem.price : 0));
  }
}

