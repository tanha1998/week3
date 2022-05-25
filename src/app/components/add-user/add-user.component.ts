import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/user';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Output() onAddUser: EventEmitter<User> = 
  new EventEmitter();
username?:string;
password?:string;
checked:boolean=false;
constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.username && !this.password){
      alert('Please enter username and password')
      return;
    }
    const newUser: User ={
      username: this.username ?? '',
      password: this.password ?? '',
      checked: this.checked
    };
    this.onAddUser.emit(newUser);
    this.username= '';
    this.password ='';
    this.checked = false;
    alert('success')
  }

}
