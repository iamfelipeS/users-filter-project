import { Component } from '@angular/core';
import { IUser } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showUserDetails: boolean = false;

  userSelected: IUser = {} as IUser;

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }
}
