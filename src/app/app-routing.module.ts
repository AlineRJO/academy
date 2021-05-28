import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HourGradeComponent} from './components/hour-grade/hour-grade.component';

const routes: Routes = [
  { path: 'sign-in', component: LoginComponent },
  { path: 'grade', component: HourGradeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
