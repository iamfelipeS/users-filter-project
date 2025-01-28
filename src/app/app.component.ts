import { Component } from '@angular/core';
import { IUser } from './interfaces/user.interface';
import { UserList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userSelected: IUser = UserList[0];

  onUserSelected(user: IUser) {
    console.log('User selected:', user);

    this.userSelected = user;
  }
}
