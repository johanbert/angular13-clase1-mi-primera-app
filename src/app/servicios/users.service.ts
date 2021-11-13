import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private API_URL = 'http://localhost:3001/api/v1/users'
  constructor(private httpClient: HttpClient) { }
  
  get():Observable<UserI[]>{
    return this.httpClient.get<UserI[]>(this.API_URL)
  }
  getById(id:string):Observable<UserI>{
    return this.httpClient.get<UserI>(`${this.API_URL}/${id}`)
      .pipe( 
        map( (user: any) => {
          delete user._id
          delete user.__v
          return user
        }) 
      );
  }
  post(user:UserI){
    return this.httpClient.post(this.API_URL, user);
  }
  update(id:string,user:any){
    console.log('user',user);
    return this.httpClient.put(`${this.API_URL}/${id}`, user)
  }
  delete(id:string){
    return this.httpClient.delete(`${this.API_URL}/${id}`)
  }
}