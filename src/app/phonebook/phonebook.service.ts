import { User } from "./user.model";
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class PhonebookService{
    private users:User[]=[];
    private userUpdated=new Subject<User[]>();

    constructor(private http:HttpClient){}

    getUsers(userPerPage:number, currentPage:number){
        const queryParams=`?pagesize=${userPerPage}&page=${currentPage}`;
       this.http.get<{users:any}>('http://localhost:3000/api'+queryParams)
       .pipe(map((userData)=>{
   return  userData.users.map(user=>{
    return {
        id: user._id,
        name: user.name,
        dob: user.dob,
        phone:user.phone,
        email:user.email
    };
})
})).subscribe((userData)=>{
           this.users=userData
           this.userUpdated.next([...this.users])
        });
    }

    getUserUpdated(){
        return this.userUpdated.asObservable();
    }

    addUser(user: User){
        const users: User[]=[];
        this.http.post('http://localhost:3000/api', user).
        subscribe((responseData)=>{
            this.users.push(user);
            this.userUpdated.next([...this.users])
        })
        
    }

    updateUser(id:string, name:string, dob:string, phone:string, email: string){
        const user: User={ id:id, name:name, date: dob, phone:phone, email:email };
        this.http.put('http://localhost:3000/api/'+ id, user)
        .subscribe(resp=>console.log(resp));

    } 


    getUser(id:string){
  return {...this.users.find(p=>p.id==id)}
    }

    deleteUser(userId:string){
        this.http.delete('http://localhost:3000/api/'+ userId)
        .subscribe(()=>{
         const userUpdate=this.users.filter(user=>user.id!==userId);
         this.users=userUpdate
         this.userUpdated.next([...this.users]);
        })
    }
}