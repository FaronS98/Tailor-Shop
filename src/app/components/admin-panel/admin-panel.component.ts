import { Component, OnInit} from '@angular/core';
import {TailorCollectionService} from '../../services/tailor-collection.service';
import {CreationItem} from 'src/app/models/creation_item';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  login: string = "admin";
  password: string = "123";
  inscribedLogin: string = "";
  inscribedPassword: string = "";
  correctLoginDetails: Boolean = false;
  creations:CreationItem[] = [];
  assetsUrl: string = "../../assets/img/creator/";
  selectedCreationId: any = null;
  
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

  checkLoginDetails(){
    if(this.login === this.inscribedLogin && this.password === this.inscribedPassword){
      this.correctLoginDetails = true;
    }
  }

  /**
   * Show creation in gallery modal
   * @param {number} id
   */
  showCreationModal(id) {  
    this.selectedCreationId = id;
    console.log(this.selectedCreationId)
    // document.querySelector('.gallery').classList.add('blur');
  }
}
