import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  // data = {
  //   labels: ['VueJs', 'EmberJs', 'ReactJs', 'Angular'],
  //   datasets: [{
  //     backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
  //     data: [40, 20, 80, 10]
  //   }]
  // };
  showpassword:boolean=false
  user?:User;

  @Output() onAddUser: EventEmitter<User> = new EventEmitter();
  email?: string ;
  firstname?: string;
  lastname?: string;
  adress?: string;
  password?: string;
  checked: boolean = false;
  constructor(  private route: ActivatedRoute, private location: Location,private userService: UserService) {}

  ngOnInit(): void {
  }
  
  onSubmit() {
    if (!this.email || !this.password) {
      alert('Please enter email and password');
      return;
    }
    const newUser: User = {
      email: this.email ??'',
      firstname: this.firstname ??'',
      lastname: this.lastname ??'',
      adress: this.adress ??'',
      password: this.password ??'',
      checked: this.checked,
    };
    this.onAddUser.emit(newUser);
    this.email ='';
    this.firstname ='';
    this.lastname ='';
    this.adress ='';
    this.password ='';
    this.checked = false;
  }
  // getUser(): void {
  //   const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  //   console.log(id)
  //   this.userService.getUser(id)
  //     .subscribe(user => this.user = user);
      
  // }
}
