import {Component, Input} from '@angular/core';
import { CreationItem } from 'src/app/models/creation_item';

@Component({
  selector: 'app-tailor-model',
  templateUrl: './tailor_model.component.html',
  styleUrls: ['./tailor_model.component.scss']
})
export class TailorModelComponent {
  
  @Input() selectedCollectionName: string = null;
  @Input() assetsUrl: string = null;
  @Input() creation: CreationItem = null;
}
