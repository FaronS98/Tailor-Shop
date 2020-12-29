import * as check from 'check-types';
import {ICollectionItemDTO} from './collection_item.interface';

export class CollectionItem {

    name: string = null;
    price: number = 0;
    type: string = null;


    /**
     * Append data from JSON object
     *
     * @param data
     * @return {ICollectionItemDTO}
     */
    fromJson(data): CollectionItem {

        if (check.assigned(data.name)) {
            this.name = data.name;
        }

        if (check.assigned(data.price)) {
            this.price = data.price;
        }

        if (check.assigned(data.type)) {
            this.type = data.type;
        }

        return this;
    }


    /**
     * Return JSON object ...
     *
     * @return {ICollectionItemDTO}
     */
    toJson() {
        const data: ICollectionItemDTO = null;

        data.name = this.name;
        data.price = this.price;
        data.type = this.type;

        return data;
    }


    /**
     * Create CollectionItem object from data object
     *
     * @param {ICollectionItemDTO} data
     * @return {CollectionItem}
     */
    static factory(data: ICollectionItemDTO): CollectionItem {
        return (new CollectionItem()).fromJson(data);
    }
}
