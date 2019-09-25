import { Component, OnInit } from '@angular/core';
import { AuthService } from './../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // create instance of AuthService
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }
    
    userName: string = '';
    password: string = '';
    loginError: boolean = false;

    onLogin(): void {
      // call login() method in AuthService to validate login creds
      if (this.authService.login(this.userName, this.password)) {
        this.loginError = false;
        // load mountains "page"
        this.router.navigate(['users']);
      } else {
        this.loginError = true;
      }
    }
}
