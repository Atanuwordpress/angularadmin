import { Component, OnInit } from '@angular/core';
import {OurcommonfuncService} from '../ourcommonfunc.service';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  constructor(private cmService:OurcommonfuncService) { }
  photo=[];
  employee=[];
  ngOnInit() {
    this.cmService.getPhoto().subscribe( (data:any[])=>{
      console.log(data);
      // for(var i=0;i<data.length;i++)
      // {
      //   console.log(data[i]);
      // }
      
      this.photo=data;
    });

    this.cmService.getEmployee().subscribe( (data:any[])=>{
      console.log(data);
      // for(var i=0;i<data.length;i++)
      // {
      //   console.log(data[i]);
      // }
      
      this.employee=data;
    });
    
  }

}

