import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./phonebook/users/users.component";
import { NewUserComponent } from "./phonebook/new-user/new-user.component";

const routes:Routes=[
    {path:'',component:UsersComponent},
    {path:'add', component:NewUserComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}