import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private API_URL = 'http://localhost:3001/api/v1/users'
  constructor(private httpClient: HttpClient) { }
  
  get(){
    return this.httpClient.get(this.API_URL);
  }
  post(){

  }
  delete(id:string){
    return this.httpClient.delete(`${this.API_URL}/${id}`)
  }
}