import { Component, OnInit } from '@angular/core';
import { PhonebookService } from '../phonebook.service';
import { User } from '../user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 users:User[]=[];
 userPerPage=2;
 private userSub:Subscription;

  constructor(private UserService: PhonebookService) { }

  ngOnInit() {
    this.UserService.getUsers(this.userPerPage, 1);
    this.userSub= this.UserService.getUserUpdated().subscribe((users: User[])=>{
    this.users=users
    })
  }
  onDelete(userId:string){
    this.UserService.deleteUser(userId);
  }
  

}
