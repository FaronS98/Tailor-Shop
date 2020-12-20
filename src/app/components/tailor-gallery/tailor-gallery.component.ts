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
   * Set collection 
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
      console.log(this.creations.length)      
      });
  }

}
