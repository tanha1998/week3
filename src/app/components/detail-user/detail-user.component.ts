import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from 'src/app/user';
@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css'],
})
export class DetailUserComponent implements OnInit {
  showpass?:boolean = false
  user?:User
  constructor(
    private userService: UserService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUse()
  }
  goBack(): void {
    this.location.back();
  }
  getUse(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!,10);
    this.userService.getUser(id).subscribe((user) => (this.user = user));
  }
  save(user:User) {
      this.userService.updateUser(user).subscribe(()=>this.goBack())
  }
}
