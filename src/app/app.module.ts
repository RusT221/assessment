import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { DisplayComponent } from './users/display/display.component';
import { EditComponent } from './users/edit/edit.component';
import { SharedService } from './shared.service';
import { AddComponent } from './users/add/add.component';
import { DeleteComponent } from './users/delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DisplayComponent,
    EditComponent,
    AddComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],

  // add service name inside providers 
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
