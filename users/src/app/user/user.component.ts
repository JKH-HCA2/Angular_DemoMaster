import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { AuthService } from './../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = []
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() { }



  firstName: string = '';
  lastName: string = '';
  email: string = '';
  newUser: string = '';
  currentYear: number = 2019;
  

  newUserAdded: boolean = false;


  // executed when the Reset button is clicked
  onReset(): void {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
  }

  onAddUser(): void {
    this.users = this.authService.addUser(this.firstName, this.lastName, this.email);
    this.newUserAdded = true;
  }
  getColor(): string {
    return this.newUserAdded === true ? '#000080' : '#FF0000'; // navy : red
  }
}
