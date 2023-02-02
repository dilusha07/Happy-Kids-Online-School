import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoolfactsComponent } from './components/coolfacts/coolfacts.component';
import { GradepageComponent } from './components/gradepage/gradepage.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { ProfessordashboardComponent } from './components/professordashboard/professordashboard.component';
import { SubjectpageComponent } from './components/subjectpage/subjectpage.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { ProfessorprofileComponent } from './components/professorprofile/professorprofile.component';

import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationsuccessComponent } from './components/registrationsuccess/registrationsuccess.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { AddchapterComponent } from './components/addchapter/addchapter.component';
import { AddprofessorComponent } from './components/addprofessor/addprofessor.component';

const routes: Routes = [

  { path: '', component: WelcomepageComponent },
  { path: 'grade', component: GradepageComponent },
  { path: 'subject', component: SubjectpageComponent },
  { path: 'drawing', component: LessonsComponent },
  {path: 'coolfacts', component:CoolfactsComponent},
  {path:'professordashboard',component:ProfessordashboardComponent},
  {path:'editprofessorprofile',component:ProfessorprofileComponent},

  { path: 'coolfacts', component: CoolfactsComponent },
  { path: 'userdashboard', component: UserdashboardComponent },
   {path:'edituserprofile',component:UserprofileComponent},
  

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
