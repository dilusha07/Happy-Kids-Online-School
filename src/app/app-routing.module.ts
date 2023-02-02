import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoolfactsComponent } from './components/coolfacts/coolfacts.component';
import { GradepageComponent } from './components/gradepage/gradepage.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { ProfessordashboardComponent } from './components/professordashboard/professordashboard.component';
import { SubjectpageComponent } from './components/subjectpage/subjectpage.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { ProfessorprofileComponent } from './components/professorprofile/professorprofile.component';

const routes: Routes = [
  { path: '', component: WelcomepageComponent },
  { path: 'grade', component: GradepageComponent },
  { path: 'subject', component: SubjectpageComponent },
  { path: 'drawing', component: LessonsComponent },
  {path: 'coolfacts', component:CoolfactsComponent},
  {path:'professordashboard',component:ProfessordashboardComponent},
  {path:'editprofessorprofile',component:ProfessorprofileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
