import * as check from 'check-types';
import {ICreationItemDTO} from './creation_item.interface';
import {CollectionItem} from './collection_item';
import {User} from './user';

export class CreationItem {

    frontItem: CollectionItem = null;
    bottomItem: CollectionItem = null;
    beltItem: CollectionItem = null;
    backItem: CollectionItem = null;
    fabricItem: CollectionItem = null;
    price: number = 0;
    user: User = null; 
    dateOfOrder: Date = null;


    /**
     * Append data from JSON object
     *
     * @param data
     * @return {CreationItem}
     */
    fromJson(data): CreationItem {
   
        if (check.assigned(data.frontItem)) {
            this.frontItem = data.frontItem;
        }

        if (check.assigned(data.bottomItem)) {
            this.bottomItem = data.bottomItem;
        }

        if (check.assigned(data.beltItem)) {
            this.beltItem = data.beltItem;
        }

        if (check.assigned(data.backItem)) {
            this.backItem = data.backItem;
        }

        if (check.assigned(data.fabricItem)) {
            this.fabricItem = data.fabricItem;
        }

        if (check.assigned(data.price)) {
            this.price = data.price;
        }

        if (check.assigned(data.user)) {
            this.user = data.user;
        }

        if (check.assigned(data.dateOfOrder)) {
            this.dateOfOrder = data.dateOfOrder;
        }

        return this;
    }


    /**
     * Return JSON object ...
     *
     * @return {ICreationItemDTO}
     */
    toJson() {
        const data: ICreationItemDTO = null;

        data.frontItem = this.frontItem;
        data.bottomItem = this.bottomItem;
        data.beltItem = this.beltItem;
        data.backItem = this.backItem;        
        data.fabricIitem = this.fabricItem;
        data.price = this.price;
        data.user = this.user;
        data.dateOfOrder = this.dateOfOrder;

        return data;
    }


    /**
     * Create CreationItem object from data object
     *
     * @param {ICreationItemDTO} data
     * @return {CreationItem}
     */
    static factory(data: ICreationItemDTO): CreationItem {
        return (new CreationItem()).fromJson(data);
    }
}
