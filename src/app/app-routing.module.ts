import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';

import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationsuccessComponent } from './components/registrationsuccess/registrationsuccess.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { AddchapterComponent } from './components/addchapter/addchapter.component';
import { AddprofessorComponent } from './components/addprofessor/addprofessor.component';

const routes: Routes = [
  {path: '', component:WelcomepageComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'registrationsuccess', component:RegistrationsuccessComponent},
  {path: 'login', component:LoginComponent},

  {path: 'admindashboard', component:AdmindashboardComponent},
  {path:'addCourse',component:AddcourseComponent},
  {path:'addchapter',component:AddchapterComponent},
  {path:'addProfessor',component:AddprofessorComponent},



const routes: Routes = [
  {path: '', component:WelcomepageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
