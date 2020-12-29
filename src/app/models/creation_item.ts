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
   
        if (check.assigned(data.front_item)) {
            this.frontItem = data.front_item;
        }

        if (check.assigned(data.bottom_item)) {
            this.bottomItem = data.bottom_item;
        }

        if (check.assigned(data.belt_item)) {
            this.beltItem = data.belt_item;
        }

        if (check.assigned(data.back_item)) {
            this.backItem = data.back_item;
        }

        if (check.assigned(data.fabric_item)) {
            this.fabricItem = data.fabric_item;
        }

        if (check.assigned(data.price)) {
            this.price = data.price;
        }

        if (check.assigned(data.user)) {
            this.user = data.user;
        }

        if (check.assigned(data.date_of_order)) {
            this.dateOfOrder = data.date_of_order;
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

        data.front_item = this.frontItem;
        data.bottom_item = this.bottomItem;
        data.belt_item = this.beltItem;
        data.back_tem = this.backItem;        
        data.fabric_item = this.fabricItem;
        data.price = this.price;
        data.user = this.user;
        data.date_of_order = this.dateOfOrder;

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
