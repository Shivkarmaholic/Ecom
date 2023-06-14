import { Injectable } from '@angular/core';
import { Login, SignUp } from '../data-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  userSignUp(user: SignUp) {
    this.http.post('http://localhost:3000/seller', user, { observe: 'response' }).subscribe(
      (result => {
        if (result) {

          localStorage.setItem('user', JSON.stringify(result.body));
          this.router.navigate(['']);
        }
      })
    )
  }

  userLogin(data: Login) {


    this.http.get<SignUp>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,
      { observe: 'response' }).subscribe(
        (result) => {
          if (result && result.body && result.body) {
            localStorage.setItem('user', JSON.stringify(result.body))
            this.router.navigate(['/']);
          }
        }
      )
  }

  userAuthReload() {
    let user = localStorage.getItem('user');
    if (user) {
      this.router.navigate(['/']);
    }
  }
}
