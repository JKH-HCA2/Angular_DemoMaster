import { Injectable } from '@angular/core';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  users: User[] = []
  constructor() { }

  addUser(firstName: string, lastName: string, email: string): Array<any> {
    this.users.push(new User(firstName, lastName, email))
    return this.users;
  }

  // Hard-coded for demo purposes
  USER_NAME: string = 'Admin';
  PASSWORD: string = 'password';

  login(userName: string, password: string) {
    if (userName === this.USER_NAME && password === this.PASSWORD) {
      console.log('AuthService: Login successful!');
      return  true;
    } else {
      console.log('AuthService: Login failed!');
      return false;
    }
  }
  
}
