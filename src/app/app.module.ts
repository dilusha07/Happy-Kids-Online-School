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

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    FooterComponent,
    GradepageComponent,
    CoolfactsComponent,
    SubjectpageComponent,
    LessonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
