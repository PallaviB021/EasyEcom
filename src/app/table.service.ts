import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TableService {
 private baseUrl='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) {}
  getCompanyData(){
    return this.http.get(this.baseUrl);
  }
}
