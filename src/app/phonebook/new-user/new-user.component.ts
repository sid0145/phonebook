import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';
import { PhonebookService } from '../phonebook.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  
private mode='create';
private userId:string;
 user:User;

  constructor(private userService: PhonebookService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      if(paramMap.has('userId')){
       this.mode='edit';
       this.userId=paramMap.get('userId');
       this.user=this.userService.getUser(this.userId)
      }
      else{
        this.mode='create';
        this.userId=null;
      }
    });
  }
  onAdd(form :NgForm){
   const user:User={
     name:form.value.name,
     date: form.value.date,
     phone: form.value.phone,
     email:form.value.email

   }
   this.userService.addUser(user);
   this.router.navigate(['/']);
  //  if(this.mode==='create'){
   
  //  }
//    else{
//      this.userService.updateUser(this.userId,form.value.name,form.value.date form.value.phone,
// form.value.email)
//    }
  
    }
    onBack(){
    this.router.navigate(['/']);
    }
   
  }
