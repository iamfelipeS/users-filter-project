import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
  dialog = false

  newUser = {} as IUser

  toggleDialog(){
    this.dialog = !this.dialog
  }

  createUser(user: IUser){

  }
}
