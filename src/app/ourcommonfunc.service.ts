import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class OurcommonfuncService {
    private API_PATH_PRODUCT_LIST="https://price-api.datayuge.com/api/v1/compare/list?api_key=JzIN1zHa07TiiM1h2LoLD09GsyHap1r4ss3";

    private photo="http://jsonplaceholder.typicode.com/photos";

    private employee="http://dummy.restapiexample.com/api/v1/employees";

    constructor(private httpClient: HttpClient) { }

    public getProductList(){
        return this.httpClient.get(this.API_PATH_PRODUCT_LIST);
      }
      public getPhoto(){
        return this.httpClient.get(this.photo);
      }
      public getEmployee(){
        return this.httpClient.get(this.employee);
      }
  }