import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './phonebook/users/users.component';
import { NewUserComponent } from './phonebook/new-user/new-user.component';
import { Routes, RouterModule} from '@angular/router';

const routes:Routes=[
  {path:'',component:UsersComponent},
  {path:'add', component: NewUserComponent},
  {path:'edit/:userId', component:NewUserComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NewUserComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
