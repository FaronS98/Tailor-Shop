import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-item-selection',
  templateUrl: './item-selection.component.html',
  styleUrls: ['./item-selection.component.scss']
})
export class ItemSelectionComponent implements OnInit {
  @Input() options = null;
  @Input() fabric = null;
  @Input() items = null;

  @Output() newCreation = new EventEmitter<Object>();
  @Output() newOption = new EventEmitter<Number>();
  addNewCreation(){
    this.newCreation.emit(this.creation);
  }

  addNewOption(){
    this.newOption.emit(this.selectedOption);
  }
  
  creation = {
    frontID: 1,
    bottomID: 23,
    backID: 38,
    beltID: 45,
    fabricID: 1,
    price: 50
  }  

  constructor(private http: HttpClient) {  }

  selectedOption: number = null;
  selectedItem: number = null;
  selectedCollection = [];

  log(){
    console.log(this.items);
    console.log(this.fabric);
  }

  ngOnInit(): void {
    this.addNewCreation();  
    this.log(); 
  }

  /**
   * Select active option
   * 
   * @param {number} value
   */
  selectOption(value: number): void {
    this.selectedOption = value;
    this.setSelectedCollection(value);
    this.addNewOption();
  }
  

   /**
   * Set selected collection
   * 
   * @param {number} value 
   */
  setSelectedCollection(value: number): void {

    switch(value) {
      case 1: {
        this.selectedCollection = [];
        for(let i in this.items){
          if(this.items[i].type === "front"){
            this.selectedCollection.push(this.items[i]);
          }
        }        
        break;
      }

      case 2: {
        this.selectedCollection = [];
        for(let i in this.items){
          if(this.items[i].type === "bottom"){
            this.selectedCollection.push(this.items[i]);
          }
        }
        break;
      }

      case 3: {
        this.selectedCollection = [];
        for(let i in this.items){
          if(this.items[i].type === "belt"){
            this.selectedCollection.push(this.items[i]);
          }
        }
        break;
      }

      case 4: {
        this.selectedCollection = [];
        for(let i in this.items){
          if(this.items[i].type === "back"){
            this.selectedCollection.push(this.items[i]);
          }
        }
        break;
      }
      
      case 5: {
        this.selectedCollection = this.fabric;
        break;
      }

      default: {
        this.selectedCollection = [];
      }
    }
  }     

    /**
     * Select item
     * 
     * @param {number} value
     */
    selectItem(value: number): void {
      this.selectedItem = value;
      this.setSelectedItemOnTheModel(value);
      this.addNewCreation();
    } 

    /**
     * Set selected item on the model
     * 
     *  @param {number} value
     */
    setSelectedItemOnTheModel(value: number): void{
      switch(this.selectedOption) {
      case 1: {
        this.creation.frontID = this.selectedItem;
        break;
      }
      case 2: {
        this.creation.bottomID = this.selectedItem;
        break;
      }
      case 3: {
        this.creation.beltID = this.selectedItem;
        break;
      }
      case 4: {
        this.creation.backID = this.selectedItem;
        break;
      }
      case 5: {
        this.creation.fabricID = this.selectedItem;
      }
    }
    }
}
