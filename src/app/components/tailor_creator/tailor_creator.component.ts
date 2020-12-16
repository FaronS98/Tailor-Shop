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
  creation: CreationItem = CreationItem.factory({id: 1, front_item: null, bottom_item: null, belt_item: null, back_tem: null, fabric_item: null, price: 0});
  assetsUrl: string = "../../assets/img/creator/";

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
   * Set default creation
   */  
  setDefaultCreation(){    
     for(let option of this.options){
      this.tailorCollectionService.getCollection(option.name).subscribe(collection =>{
       switch(option.name){
          case 'front':              
          this.creation.frontItem = collection[0];
          break;
          case 'bottom':              
          this.creation.bottomItem = collection[0];
          break;
          case 'belt':              
          this.creation.beltItem = collection[0];
          break;
          case 'back':              
          this.creation.backItem = collection[0];
          break;
          case 'fabric':              
          this.creation.fabricItem = collection[0];
          console.log(this.creation);
          break;
        }
     });
     }
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
      this.setDefaultCreation();    
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

    // this.creation.price = this.calculateCreationPrice(this.creation);
    
  }


  /**
   * Calculate creation price
   * @param {CreationItem} creation
   * @return {number}
   */
  // calculateCreationPrice(creation: CreationItem): number {
  //   return (check.assigned(creation.frontItem.price) ? creation.frontItem.price : 0) + 
  //     (check.assigned(creation.backItem.price) ? creation.backItem.price : 0) +
  //     (check.assigned(creation.bottomItem.price) ? creation.bottomItem.price : 0) +
  //     (check.assigned(creation.beltItem.price) ? creation.beltItem.price : 0) +
  //     (check.assigned(creation.fabricItem.price) ? creation.fabricItem.price : 0);
  // }
}

