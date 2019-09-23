import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users';

  firstName: string = 'Foo';
  lastName: string = 'Bar';
  email: string = 'foobar@test.com';
  currentYear: number = 2019;

  addNewUser: boolean = false;
  newUserAdded: boolean = false;

  newUser: string = '';

  // declare a method
  getCurrentYear(): number {
    return this.currentYear;
  }

  // executed when the Reset button is clicked
  onReset(): void {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.addNewUser = false;
    this.newUserAdded = false;
  }

  onAddUser(): void {
    this.newUser = `${this.firstName} ${this.lastName} - Email: ${this.email}`;
    this.addNewUser = true;
    this.newUserAdded = true;
  }
  getColor(): string {
    return this.newUserAdded === true ? '#000080' : '#FF0000'; // navy : red
  }

}
