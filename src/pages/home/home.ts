import { UsersPage } from './../users/users';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl : NavController){}
  
  openUsers(){
    this.navCtrl.push(UsersPage)
  }

}
