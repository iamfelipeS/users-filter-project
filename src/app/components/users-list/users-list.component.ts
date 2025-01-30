import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';
import { UsersListService } from 'src/app/services/users-list.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersList: IUser[] = [];

  displayedColumns: string[] = ['name', 'email', 'age', 'phone', 'createdAt', 'status'];

  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();

  private userListService = inject(UsersListService);

  ngOnInit() {
    this.getUsersList();
  }
  onUserSelected(user: IUser) {
    this.userSelectedEmitt.emit(user);
  }
  getUsersList() {
    this.userListService.list().subscribe({
      next: (data) => {
        this.usersList = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}

