import { Component, EventEmitter, Output } from '@angular/core';
import {CreationItem} from 'src/app/models/creation_item';

@Component({
  selector: 'app-creator-buttons',
  templateUrl: './creator-buttons.component.html',
  styleUrls: ['./creator-buttons.component.scss']
})
export class CreatorButtonsComponent {

  changeCreation: Boolean = true;
  @Output() random = new EventEmitter();
  @Output() randomWithElement = new EventEmitter();
  
}
