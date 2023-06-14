import { Component, OnInit } from '@angular/core';
import { Login, SignUp } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  showLogin: boolean = true;
  constructor(private user: UserService) {

  }
  ngOnInit() {
    this.user.userAuthReload();
  }

  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
  signUp(data: SignUp) {
    this.user.userSignUp(data);
  }

  login(data: Login) {
    this.user.userLogin(data);
  }
}
