import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CollectionItem} from 'src/app/models/collection_item';
import {Options} from 'src/app/models/options';
import {CreationItem} from 'src/app/models/creation_item';

@Component({
  selector: 'app-item-selection',
  templateUrl: './item_selection.component.html',
  styleUrls: ['./item_selection.component.scss']
})
export class ItemSelectionComponent {
  @Input() selectedCollectionName: string = null;
  @Input() options: Options[] = [];
  @Input() selectedCollection: CollectionItem[] = [];
  @Input() selectedItem:Object= null;
  @Input() creation: CreationItem = null;
  @Input() assetsUrl: string = null;
  @Output() onOptionSelection = new EventEmitter<Options>();
  @Output() onItemSelection = new EventEmitter<CollectionItem>();
  @Output() closeOption = new EventEmitter<string>();

  shutdownOption(){
    this.selectedCollectionName = '';
    this.closeOption.emit('');
  }
}
