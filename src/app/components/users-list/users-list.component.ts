import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  // @Input() user?: User
  users:User[]=[]
  @Output() open: EventEmitter<User> = new EventEmitter();
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe((users)=>(this.users=users))
  }
  deleteTask(user:User){
    this.userService.deleteTask(user)
    .subscribe(()=>(this.users=this.users.
      filter(t=>t.id !== user.id)))
  }
  onDelete(user:any){
    this.open.emit(user)
  }
  addUser(user:User){
    this.userService.addUsers(user)
    .subscribe((user)=>(this.users.push(user)))
  }
}
