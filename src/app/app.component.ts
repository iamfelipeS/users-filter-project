import { Component, Input } from '@angular/core';
import { IUser } from './interfaces/user.interface';
import { IFilterOptions } from './interfaces/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showUserDetails: boolean = false;
  userSelected: IUser = {} as IUser;
  
  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };
  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {
    this.filterOptions = { ...filterOptions };
    console.log("Filtros aplicados:", this.filterOptions);
  }
}
