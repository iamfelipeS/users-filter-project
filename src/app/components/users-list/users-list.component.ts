import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IFilterOptions } from 'src/app/interfaces/filter-options.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { UsersListService } from 'src/app/services/users-list.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnChanges {
  @Input() filterOptions!: IFilterOptions;
  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();

  usersList: IUser[] = [];
  filteredUsers: IUser[] = [...this.usersList]; // Inicializa com todos os usuários
  displayedColumns: string[] = ['name', 'email', 'age', 'phone', 'createdAt', 'status'];

  private userListService = inject(UsersListService);

  ngOnInit() {
    this.getUsersList();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filterOptions']) {
      this.filterUsers();
    }
  }

  getUsersList() {
    this.userListService.list().subscribe({
      next: (data) => {
        this.usersList = data;
        this.filterUsers(); // Aplica o filtro assim que os dados são carregados
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  filterUsers() {
    this.filteredUsers = this.usersList.filter(user => {
      const nameMatches = !this.filterOptions.name || user.name.toLowerCase().includes(this.filterOptions.name.toLowerCase());
      const statusMatches = this.filterOptions.status === undefined;
      
      return nameMatches && statusMatches;
    });

    console.log("Usuários filtrados:", this.filteredUsers);
  }

  onUserSelected(user: IUser) {
    this.userSelectedEmitt.emit(user);
  }
}
