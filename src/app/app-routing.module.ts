import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { AddUserComponent } from './components/add-user/add-user.component';
 import { UsersListComponent } from './components/users-list/users-list.component';
const routes: Routes = [
  { path: '', redirectTo: '/users-list', pathMatch: 'full' },
  { path: 'users-list', component: UsersListComponent },
  { path: 'add/:id', component: AddUserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
