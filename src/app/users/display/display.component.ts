import { Observable } from 'rxjs';
import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  //observable
  listUsers: any;

  columnsToDisplay = ["id","username", "name", "email", "actions"]

  //init service and variables inside constructor
  constructor(private sharedService: SharedService,
    private _snackbar: MatSnackBar) { }

  //delete action based on ID
  delete(id: number) {
    this.sharedService.deleteUser(id).subscribe(data => {
     //display snackbar upon successful deletion
     this._snackbar.open("User Deleted");
    }, err => {
      this._snackbar.open("User Deletion Failed!");
    })   
  }

  ngOnInit(): void {
    //return all users
    this.sharedService.getUsers().subscribe(data => {
      this.listUsers = data;
      console.log(this.listUsers);
    });
  }

}
