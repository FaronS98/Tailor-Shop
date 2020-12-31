import {CollectionItem} from './collection_item';
import {User} from './user';

export interface ICreationItemDTO {
    
    frontItem: CollectionItem;
    bottomItem: CollectionItem;
    beltItem: CollectionItem;
    backItem: CollectionItem;
    fabricIitem: CollectionItem;
    price: number;
    user: User;
    dateOfOrder: Date;
}
