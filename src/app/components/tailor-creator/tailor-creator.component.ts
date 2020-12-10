import { Component, OnInit, Output } from '@angular/core';
import { TailorCollectionService } from '../../services/tailor-collection.service';

@Component({
  selector: 'app-tailor-creator',
  templateUrl: './tailor-creator.component.html',
  styleUrls: ['./tailor-creator.component.scss'],
  providers: [
    TailorCollectionService,
  ]
})
export class TailorCreatorComponent implements OnInit {
  options = [];
  items = [];
  fabric = [];

  creations = [];
  creation = {};
  selectedOption = null;


  constructor(
    private tailorCollectionService: TailorCollectionService,
  ) { }

  ngOnInit(): void {
    this.getCreatorOptions();
    this.getCreatorItems();
    this.getCreatorFabric();
    this.getCreatorCreations();  
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
        this.items.push(data[id]);
      } 
    })
  }

  getCreatorFabric(): void{
    this.tailorCollectionService.getFabric().subscribe(data=>{
      for(let i in data)
      this.fabric.push(data[i]);
    })
  }

  getCreatorCreations(): void{
    this.tailorCollectionService.getCreations().subscribe(data=>{
      for(let i in data)
      this.creations.push(data[i]);
    })
  }   

  getOutNewCreation(selected: Object){
    if(selected){
        this.creation = selected;
        this.creations.push(this.creation); 
       }
    }

    getOutSelectedOption(selected: number){
      if(selected){
          this.selectedOption = selected;
         }
    }
  
}
