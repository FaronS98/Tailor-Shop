import { Component, OnInit } from '@angular/core';
import {TailorCollectionService} from '../../services/tailor-collection.service';
import {CollectionItem} from 'src/app/models/collection_item';
import {CreationItem} from 'src/app/models/creation_item';

@Component({
  selector: 'app-tailor-gallery',
  templateUrl: './tailor-gallery.component.html',
  styleUrls: ['./tailor-gallery.component.scss']
})
export class TailorGalleryComponent implements OnInit {

  creations:CreationItem[] = [];
  assetsUrl: string = "../../assets/img/creator/";
  collectionItem: CollectionItem[] = [];
  selectedCreation = null;

  /**
   * @constructor
   */
  constructor(
    private tailorCollectionService: TailorCollectionService,
  ) {

  }

  ngOnInit(): void {
    this.getCreations();
    this.setCollection();
    
  }

   /**
   * Set collection in creation
   */
  setCollection(): void {
    let types = ['front','bottom','belt','back','fabric'];
    for(let type of types){
      this.tailorCollectionService.getCollection(type).subscribe(collection => {
        this.collectionItem = collection;
      });
    }    
  }

  /**
   * Get creations
   */
  getCreations(): void {    
    this.tailorCollectionService.getCreations().subscribe(creations => {
      this.creations = creations;    
      });
  }

  /**
   * Show creation in gallery modal
   * @param creation
   */
  showCreationModal(creation){  
    this.selectedCreation = creation;
    console.log(this.selectedCreation.id)
    document.querySelector('.gallery').classList.add('blur');
  }

  /**
   * Hide modal gallery
   */
  hideCreationModal(){
    this.selectedCreation = null;
    document.querySelector('.gallery').classList.remove('blur');
  }

  /**
   * Support for the prev button in the modal in the gallery
   */
  viewPreviousCreation(){
    if(this.selectedCreation === this.creations[0]){
      this.selectedCreation = this.creations[this.creations.length-1];
    }else{
      this.selectedCreation = this.creations[this.selectedCreation.id -2];
    }
  }

  /**
   * Support for the next button in the modal in the gallery
   */
  viewNextCreation(){
    if(this.selectedCreation == this.creations[this.creations.length -1]){
      this.selectedCreation = this.creations[0];
    }else{
      this.selectedCreation = this.creations[this.selectedCreation.id];
    }
  }
}
