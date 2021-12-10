import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  //give selector name as tag
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({ });

  constructor(private formBuilder: FormBuilder, 
    private sharedService: SharedService,
    private _snackbar: MatSnackBar) { }

  //initialize form builder
  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'username' : new FormControl(''),
      'profession' : new FormControl('')
    })

  }

  //method to add a user
  createUser(){
    this.sharedService.addUser(this.addUserForm.value).subscribe(data =>{
      //display snackbar upon successful registration
      this._snackbar.open("User Registration Successful!");
    }, err => {
      this._snackbar.open("User Registration Failed!");
    })   

  }

}
