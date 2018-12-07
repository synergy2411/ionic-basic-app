import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    templateUrl : './user.html'
})
export class UserPage{

    user : any;
    username : any;
    constructor(private navParams: NavParams){
        this.user = this.navParams.data;
        this.username = this.navParams.get("username");
        console.log(this.user);
    }
}