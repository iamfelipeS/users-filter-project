import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material-module";
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { UsersListComponent } from './users-list/users-list.component';
import { PipesModule } from "../pipes/pipes.module";
import { UserCreateComponent } from './user-create/user-create.component';

@NgModule({
    declarations: [
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent,
    UserCreateComponent
  ],
    imports: [
        FormsModule,
        AngularMaterialModule,
        CommonModule,
        PipesModule,
    ],
    exports: [
      UserDetailsComponent,
      FilterComponent,
      UsersListComponent,
      UserCreateComponent
    ],
})

export class ComponentsModule { }