import { inject, Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  private http = inject(HttpClient);
  // private readonly API = 'https://jsonplaceholder.typicode.com/users';
  private readonly API = '/assets/users-list.json';

  list(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.API);
  }
}
