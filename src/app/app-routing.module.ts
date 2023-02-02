import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoolfactsComponent } from './components/coolfacts/coolfacts.component';
import { GradepageComponent } from './components/gradepage/gradepage.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { SubjectpageComponent } from './components/subjectpage/subjectpage.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';

const routes: Routes = [
  { path: '', component: WelcomepageComponent },
  { path: 'grade', component: GradepageComponent },
  { path: 'subject', component: SubjectpageComponent },
  { path: 'drawing', component: LessonsComponent },
  { path: 'coolfacts', component: CoolfactsComponent },
  { path: 'userdashboard', component: UserdashboardComponent },
   {path:'edituserprofile',component:UserprofileComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
