import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'tailor-shop';

  selectedOption: number = null;
  selectedOptionName: String = '';
  selectedCollection = [];
  selectedItem: number = null;
  
  options = [
    {
      name: "Front",
      value: 1,
      src: "../assets/img/front.jpg",
    },
    {
      name: "Bottom", 
      value: 2,
      src: "../assets/img/down.jpg",
    },
    {
      name: "Back", 
      value: 3,
      src: "../assets/img/back.jpg",
    }
  ];

  front = [
    {
      name: 'Pierwszy',
      value:1,
      src: '../assets/img/front.jpg'
    },
    {
      name: 'Drugi',
      value:2,
      src: '../assets/img/front.jpg'
    },
  ];

  bottom = [
    {
      name: 'Pierwszy',
      value:1,
      src: '../assets/img/front.jpg'
    },
    {
      name: 'Drugi',
      value:2,
      src: "../assets/img/down.jpg"
    },
  ];

  back = [
    {  
      name: "Pierwszy", 
      value: 1,
      src: "../assets/img/back.jpg",
    },
    {
      name: 'Drugi',
      value:2,
      src: "../assets/img/down.jpg"
    },
  ];

  model =  {
      srcFront: '../assets/img/front.jpg',
      srcBottom: '',
      srcBack: '' 
    }   
  

    
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
        this.selectedCollection = this.back;
        this.selectedOptionName = this.options[value-1].name;
        this.selectedItem = null;
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
  }  

  /**
   * Set selected item on the model
   * 
   * @param {number} value 
   */

  setSelectedItemOnTheModel(value: number): void{
    switch(this.selectedOption) {
    case 1: {
      this.model.srcFront = this.front[value-1].src;
      break;
    }
    case 2: {
      this.model.srcBottom = this.bottom[value-1].src;
      break;
    }
    case 3: {
      this.model.srcBack = this.back[value-1].src;
      break;
    }
    default:{
      this.selectedItem = null;
    }
   }
  }
}
