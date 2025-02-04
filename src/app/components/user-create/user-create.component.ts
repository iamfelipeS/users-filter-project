import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
  newUser = {} as IUser

   dialog = inject(MatDialog);

  openDialog(dialogTemplate: any): void {
    const dialogRef = this.dialog.open(dialogTemplate, { width: '400px' });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createUser(result);
      }
    });
  }

  createUser(user: IUser){

  }
}
