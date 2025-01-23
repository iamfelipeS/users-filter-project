import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  @Input({ required: true }) user: IUser = { } as IUser; // casting para IUser
}
