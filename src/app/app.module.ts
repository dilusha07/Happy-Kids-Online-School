import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { GradepageComponent } from './components/gradepage/gradepage.component';
import { CoolfactsComponent } from './components/coolfacts/coolfacts.component';
import { SubjectpageComponent } from './components/subjectpage/subjectpage.component';
import { LessonsComponent } from './components/lessons/lessons.component';

import { TeacherdashboardComponent } from './components/teacherdashboard/teacherdashboard.component';
import { ProfessordashboardComponent } from './components/professordashboard/professordashboard.component';
import { ProfessorprofileComponent } from './components/professorprofile/professorprofile.component';

import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';

import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegistrationsuccessComponent } from './components/registrationsuccess/registrationsuccess.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { AddchapterComponent } from './components/addchapter/addchapter.component';
import { AddprofessorComponent } from './components/addprofessor/addprofessor.component';
import { ApprovalstatusComponent } from './components/approvalstatus/approvalstatus.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { MywishlistComponent } from './components/mywishlist/mywishlist.component';
import { ProfessorlistComponent } from './components/professorlist/professorlist.component';
import { UserlistComponent } from './components/userlist/userlist.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,

    FooterComponent,
    GradepageComponent,
    CoolfactsComponent,
    SubjectpageComponent,
    LessonsComponent,

    TeacherdashboardComponent,
    ProfessordashboardComponent,
    ProfessorprofileComponent

    UserdashboardComponent,
    UserprofileComponent


    FooterComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,

    RegistrationsuccessComponent,
    AdmindashboardComponent,
    AddcourseComponent,
    AddchapterComponent,
    AddprofessorComponent,
    ApprovalstatusComponent,
    CourselistComponent,
    MywishlistComponent,
    ProfessorlistComponent,
    UserlistComponent

    RegistrationsuccessComponent

    FooterComponent




  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
