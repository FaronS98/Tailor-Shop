import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TailorCollectionService {

  constructor(private http: HttpClient) { }

  getOptions() {
    return this.http.get(`../assets/test/options.json`);
  }    

  getItems() {
    return this.http.get(`../assets/test/items.json`);
  }   

  getFabric() {
    return this.http.get(`../assets/test/fabric.json`);
  }  

  getCreations() {
    return this.http.get(`../assets/test/creations.json`);
  }  
}
