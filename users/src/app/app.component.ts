import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users';

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  currentYear: number = 2019;

  newUserAdded: boolean = false;

  users: Array<object> = [];

  // declare a method
  getCurrentYear(): number {
    return this.currentYear;
  }

  // executed when the Reset button is clicked
  onReset(): void {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
  }

  onAddUser(): void {
    this.users.push({"firstName": this.firstName, "lastName": this.lastName, "email": this.email});
    this.newUserAdded = true;
  }
  getColor(): string {
    return this.newUserAdded === true ? '#000080' : '#FF0000'; // navy : red
  }

}
