import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-item-selection',
  templateUrl: './item-selection.component.html',
  styleUrls: ['./item-selection.component.scss']
})
export class ItemSelectionComponent implements OnInit {
  @Input() options = null;
  @Input() fabric = null;

  @Input() front = null;
  @Input() bottom = null;
  @Input() back = null;
  @Input() belt = null;

  constructor(private http: HttpClient) { 
    this.http.get(`../assets/test/items.json`).toPromise().then(data =>{

    });
  }

  selectedOption: number = null;
  selectedOptionName: String = '';
  selectedCollection = [];
  selectedItem: number = null;

  ngOnInit(): void {
  }

  // front = [];
  // bottom = [];
  // belt = [];
  // back = [];
  // fabric = [];
  

  /**
   * Select active option
   * 
   * @param {number} value
   */
  selectOption(value: number): void {
    this.selectedOption = value;
    this.setSelectedCollection(value);
  }

  /**
   * Select item
   * 
   * @param {number} value
   */
  selectItem(value: number): void {
    this.selectedItem = value;
    // this.setSelectedItemOnTheModel(value);
  } 

   /**
   * Set selected collection
   * 
   * @param {number} value 
   */
  setSelectedCollection(value: number): void {

    switch(value) {
      case 1: {
        this.selectedCollection = this.front;
        this.selectedOptionName = this.options[value-1].name;
        this.selectedItem = null;
        break;
      }

      case 2: {
        this.selectedCollection = this.bottom;
        this.selectedOptionName = this.options[value-1].name;
        this.selectedItem = null;
        break;
      }

      case 3: {
        this.selectedCollection = this.belt;
        this.selectedOptionName = this.options[value-1].name;
        this.selectedItem = null;
        break;
      }

      case 4: {
        this.selectedCollection = this.back;
        this.selectedOptionName = this.options[value-1].name;
        this.selectedItem = null;
        break;
      }
      
      case 5: {
        this.selectedCollection = this.fabric;
        this.selectedOptionName = this.options[value-1].name;
        this.selectedItem = null;
        break;
      }

      default: {
        this.selectedCollection = [];
      }
    }
  }
}
