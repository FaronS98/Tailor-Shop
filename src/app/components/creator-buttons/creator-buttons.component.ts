import { Component, EventEmitter, Input,  Output } from '@angular/core';
import {TailorCollectionService} from '../../services/tailor-collection.service';
import { CreationItem } from 'src/app/models/creation_item';
import { User} from 'src/app/models/user';

@Component({
  selector: 'app-creator-buttons',
  templateUrl: './creator-buttons.component.html',
  styleUrls: ['./creator-buttons.component.scss']
})
export class CreatorButtonsComponent {

   /**
   * @constructor
   */
  constructor(
    private tailorCollectionService: TailorCollectionService,
  ) {

  }

  changeCreation: Boolean = true;
  user:User = User.factory({user_name: null, user_surname: null, user_email: null, user_telephone_number: null, bust_circumference: null, waist_circumference: null, hip_circumference: null, growth: null});
  @Output() random = new EventEmitter();
  @Output() randomWithElement = new EventEmitter();

  @Input() creation: CreationItem = null;

  saveCreation(){
    if(this.user.userName == null || this.user.userSurname == null || this.user.userTelephoneNumber == null || this.user.userEmail == null 
      || this.user.bustCircumference == null || this.user.waistCircumference == null || this.user.hipCircumference == null || this.user.growth == null ){
        alert("Wypelnij wszystkie pola formularza")
    }else if(this.user.userTelephoneNumber < 100000000 || this.user.userTelephoneNumber > 999999999 ){
        alert("Numer za krótki lub za długi")
    }else{
        this.creation.user = this.user;
        this.tailorCollectionService.saveCreation(this.creation).subscribe(response => {
          console.log(response)
        });
        alert("Wysłano");
        window.location.reload(true);
    }   
  }  
}
