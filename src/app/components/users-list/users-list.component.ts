import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  // @Input() user?: User
    
  users:User[] = [];
  user:User[] = []
  constructor(@Inject(DOCUMENT) document: Document,private userService:UserService,private _toastService:ToastService
    ) {
      const th= document.getElementById('myInput');
      console.log(th);
      
     }

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe((users)=>(this.users=users))
  }
  deleteUser(user:User):void{
    this.users = this.users.filter(h=>h!==user);
    this.userService.deleteU(user.id).subscribe();
    this._toastService.error('Remove '+user.lastname+' success');
   
  }

  addUser(user:User){
    this.userService.addUsers(user)
    .subscribe((user)=>(this.users.push(user)))
    this._toastService.success('Add '+user.lastname+' success');
  }
}
