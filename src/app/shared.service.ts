import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//use observables to handle asynchronous requests
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //reqres url here
  readonly APIUrl = "https://reqres.in/api/users";
  readonly UsersUrl = "https://reqres.in/api/users?page=2";

  //alternative API using string
  BaseUrl: string = "https://jsonplaceholder.typicode.com/";

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

 //function to add user - pass user object to API URL
 addUser(userObject: any){
   return this.http.post(this.APIUrl + 'users', userObject);
 }

 //function to update user based on ID
  updateUser(id:any){
    return this.http.put(this.BaseUrl, id);
  }

  //function to delete user based on ID
  deleteUser(id:any){
    return this.http.delete(this.BaseUrl, id);
  }

}
