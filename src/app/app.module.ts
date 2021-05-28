import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { HourGradeComponent } from './components/hour-grade/hour-grade.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HourGradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
