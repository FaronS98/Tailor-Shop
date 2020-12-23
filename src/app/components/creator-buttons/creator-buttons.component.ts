import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {CreationItem} from 'src/app/models/creation_item';

@Component({
  selector: 'app-creator-buttons',
  templateUrl: './creator-buttons.component.html',
  styleUrls: ['./creator-buttons.component.scss']
})
export class CreatorButtonsComponent implements OnInit {

  changeCreation: Boolean = true;
  @Output() random = new EventEmitter();
  @Output() randomWithElement = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
}
