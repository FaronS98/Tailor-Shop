import { Component, OnInit } from '@angular/core';
import { TailorCollectionService } from '../../services/tailor-collection.service';
import { Option } from '../../models/option';
@Component({
  selector: 'app-tailor-creator',
  templateUrl: './tailor-creator.component.html',
  styleUrls: ['./tailor-creator.component.scss'],
  providers: [
    TailorCollectionService,
  ]
})
export class TailorCreatorComponent implements OnInit {
  options = []; //:Option
  fabric = [];
  front = [];
  bottom = [];
  belt = [];
  back = [];

  constructor(
    private tailorCollectionService: TailorCollectionService,
  ) { }

  ngOnInit(): void {
    this.getCreatorOptions();
    this.getCreatorItems();
    this.getCreatorFabric();
  }

  getCreatorOptions(): void {
    this.tailorCollectionService.getOptions().subscribe(data => {
      for( let i in data)
      this.options.push(data[i]);
    })
  }

  getCreatorItems(): void {
    this.tailorCollectionService.getItems().subscribe(data => {
      for(let id in data){
        if(data[id].type === "front"){
          this.front.push(data[id])
        }
       else if(data[id].type === "bottom"){
         this.bottom.push(data[id])
       }
       else if(data[id].type === "belt"){
        this.belt.push(data[id])
      }
       else if(data[id].type === "back"){
         this.back.push(data[id])
       }
       else{
         console.log("Not assigned to any group !")
       }
      } 
    })
  }

  getCreatorFabric(): void{
    this.tailorCollectionService.getFabric().subscribe(data=>{
      for(let i in data)
      this.fabric.push(data[i]);
    })
  }

  model =  {
    srcFront: '../assets/img/front.jpg',
    srcBottom: '',
    srcBack: '' 
  }     

/**
 * Set selected item on the model
 * 
 * @param {number} value 
 */

// setSelectedItemOnTheModel(value: number): void{
//   switch(this.selectedOption) {
//   case 1: {
//     this.model.srcFront = this.front[value-1].src;
//     break;
//   }
//   case 2: {
//     this.model.srcBottom = this.bottom[value-1].src;
//     break;
//   }
//   case 3: {
//     this.model.srcBack = this.back[value-1].src;
//     break;
//   }
//   default:{
//     this.selectedItem = null;
//   }
//  }
// }

}
