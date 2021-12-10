import { Observable } from 'rxjs';
import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  //observable
  listUsers: any;

  columnsToDisplay = ["id","username", "name", "email", "actions"]

  //init service inside constructor
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    //return all users
    this.sharedService.getUsers().subscribe(data => {
      this.listUsers = data;
      console.log(this.listUsers);
    });
  }

}
