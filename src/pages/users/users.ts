import { UserPage } from './user/user.page';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  constructor(private navCtrl: NavController) { }
  openPage(name: string) {
    this.navCtrl.push(UserPage, {username : name});
  }

}
