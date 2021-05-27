import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {StorageService} from '../../services/storage/storage.service';
import {LoginService} from '../../services/login-service/login.service';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  login = '';
  password = '';
  email = '';
  private listener$ = true;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private storageService: StorageService
  ) {
    this.storageService.clearStorage();
  }

  ngOnDestroy(): void {
    this.listener$ = false;
  }

  confirmClick(): void {
    if (this.login && this.password) {
      this.findUser(this.login);
    }
  }

  findUser(name: string): any {
    this.loginService.getById(name).pipe(takeWhile(() => this.listener$))
      .subscribe(() => {
      // TODO: DIRECIONAR
      // this.router.navigateByUrl('choice');
    });
  }

  newLogin(): void {
    this.loginService.insert({
      name: this.login,
      password: this.password,
      email: this.email
    });
  }

}
