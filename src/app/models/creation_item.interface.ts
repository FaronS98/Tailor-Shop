import {CollectionItem} from './collection_item';

export interface ICreationItemDTO {
    id: string|number;
    front_item: CollectionItem;
    bottom_item: CollectionItem;
    belt_item: CollectionItem;
    back_tem: CollectionItem;
    fabric_item: CollectionItem;
    price: number;
}
