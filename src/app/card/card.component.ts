import { Component, OnInit } from '@angular/core';
import {OurcommonfuncService} from '../ourcommonfunc.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private cmService:OurcommonfuncService) { }
  products=[];
  photo=[];
  ngOnInit() {
    this.cmService.getProductList().subscribe( (data:any[])=>{
      console.log(data['data']);
      // for(var i=0;i<data.length;i++)
      // {
      //   console.log(data[i]);
      // }
      
      this.products=data['data'];
    });
    
  }

}
