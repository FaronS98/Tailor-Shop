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
  selectedCreationId: number = null;

  /**
   * @constructor
   */
  constructor(
    private tailorCollectionService: TailorCollectionService,
  ) {

  }

  ngOnInit(): void {
    this.getCreations();    
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
   * @param {number} id
   */
  showCreationModal(id: number) {  
    this.selectedCreationId = id;
    document.querySelector('.gallery').classList.add('blur');
  }

  /**
   * Hide modal gallery
   */
  hideCreationModal() {
    this.selectedCreationId = null;
    document.querySelector('.gallery').classList.remove('blur');
  }

  /**
   * Support for the prev and next buttons in the modal in the gallery
   */
  changeCreation(direction: string) {
    if(direction === 'prev'){
      if(this.selectedCreationId === 0){
        this.selectedCreationId = this.creations.length -1;
      }else{
        this.selectedCreationId--;
      }
    }else{
      if(this.selectedCreationId === this.creations.length -1){
        this.selectedCreationId = 0;
      }else{
        this.selectedCreationId++;
      }
    }

  }
}
