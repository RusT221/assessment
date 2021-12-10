import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//use observables to handle asynchronous requests
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //add url here
  readonly APIUrl = "https://reqres.in/api/users";
  readonly UsersUrl = "https://reqres.in/api/users?page=2";

  //alternative using string
  BaseUrl: string = "https://jsonplaceholder.typicode.com/";
  RecordUrl: string = "https://jsonplaceholder.typicode.com/users";

  //instantiate http client
  constructor(private http:HttpClient) { }

  //retrieve users
  getUsers(){
    return this.http.get(this.BaseUrl + 'users');
  }

  //testing using reqres
  // getUsers(){
  //   return this.http.get(this.UsersUrl);
  // }

 //add user - pass user object to API URL
 addUser(userObject: any){
   return this.http.post(this.APIUrl + 'users', userObject);
 }

  updateUser(val:any){
    return this.http.put(this.APIUrl, val);
  }

  deleteUser(val:any){
    return this.http.delete(this.APIUrl, val);
  }

}
