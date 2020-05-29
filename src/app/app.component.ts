import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material';
import { PhonebookService } from './phonebook/phonebook.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router: Router, private userService: PhonebookService){}
  totalPosts=10;
  userPerPage=2;
  pageSizeOptions=[1,2,3];
  currentPage=1;
  

  ngOnInit(){
    this.userService.getUsers(this.userPerPage,this.currentPage);

  }

  show=false;

  onAdd(){
    this.router.navigate(['/add']);
    this.show=true;
  }
onPageChange(pageData: PageEvent){
 this.currentPage= pageData.pageIndex+1;
 this.userPerPage=pageData.pageSize;
 this.userService.getUsers(this.userPerPage,this.currentPage);
}

}
