import {HttpClient,HttpHeaders} from'@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor(private http:HttpClient) { }
  getData(){
    let head = new HttpHeaders();
    head = head.set('Content-Type','application/json');
    return this.http.get('/assets/personalData.json',{headers:head});

  }

}