import {CollectionItem} from './collection_item';
import {User} from './user';

export interface ICreationItemDTO {
    id: string|number;
    front_item: CollectionItem;
    bottom_item: CollectionItem;
    belt_item: CollectionItem;
    back_tem: CollectionItem;
    fabric_item: CollectionItem;
    price: number;
    user: User;
    date_of_order: Date;
}
