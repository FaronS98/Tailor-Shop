import * as check from 'check-types';
import {IOptionsDTO} from './options.interface';

export class Options {

    id: number|string = null;
    name: string = null;
    src: string = null;


    /**
     * Append data from JSON object
     *
     * @param data
     * @return {Options}
     */
    fromJson(data): Options {

        if (check.assigned(data.id)) {
            this.id = data.id;
        }

        if (check.assigned(data.name)) {
            this.name = data.name;
        }

        if (check.assigned(data.src)) {
            this.src = data.src;
        }

        return this;
    }


    /**
     * Return JSON object ...
     *
     * @return {IOptionsDTO}
     */
    toJson() {
        const data: IOptionsDTO = null;

        data.id = this.id;
        data.name = this.name;
        data.src = this.src;

        return data;
    }


    /**
     * Create IOptionsDTO object from data object
     *
     * @param {IOptionsDTO} data
     * @return {Options}
     */
    static factory(data: IOptionsDTO): Options {
        return (new Options()).fromJson(data);
    }
}
