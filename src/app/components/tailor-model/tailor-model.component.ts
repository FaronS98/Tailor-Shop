import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-tailor-model',
  templateUrl: './tailor-model.component.html',
  styleUrls: ['./tailor-model.component.scss']
})
export class TailorModelComponent implements OnInit {
  
  @Input() items = null;
  @Input() fabric = null;
  @Input() creation = {};


  constructor(private http: HttpClient) { }

  ngOnInit():void{
  };
}


