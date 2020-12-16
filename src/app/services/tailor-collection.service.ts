import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CollectionItem} from '../models/collection_item';
import {ICollectionItemDTO} from '../models/collection_item.interface';
import {Options} from '../models/options';
import {IOptionsDTO} from '../models/options.interface';

@Injectable({
  providedIn: 'root'
})
export class TailorCollectionService {

  mainUrl: string = '../assets/test';

  /**
   * @constructor
   */
  constructor(private http: HttpClient) { }

  getCollection(name: string): Observable<CollectionItem[]> {
    const url = `${this.mainUrl}/${name}.json`;;
    
    return this.http
            .get<ICollectionItemDTO[]>(url)
            .pipe(
              map(response => response.map((item) => {
                return CollectionItem.factory(item) as CollectionItem
              }))
          );
  }

  getOptions(): Observable<Options[]> {
    const url = `${this.mainUrl}/options.json`;
    
    return this.http
            .get<IOptionsDTO[]>(url)
            .pipe(
              map(response => response.map((item) => {
                return Options.factory(item) as Options
              }))
            );
  }
}
