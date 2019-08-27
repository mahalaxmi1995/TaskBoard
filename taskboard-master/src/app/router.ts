import { Routes, RouterModule } from "@angular/router";
import { Taskdisplay1Component } from './taskdisplay1/taskdisplay1.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TaskGuardService } from './taskguard.service';


   const arr: Routes=[
     {path:'',component:HomeComponent},
     {path:'task', canActivate:[TaskGuardService],component:Taskdisplay1Component},
     {path:'login',component:LoginComponent}
   ];

   export const routing=RouterModule.forRoot(arr);

