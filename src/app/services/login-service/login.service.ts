import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {StorageService} from '../storage/storage.service';
import {FirebaseDatabaseService} from '../firebase-database/firebase-database.service';
import {map} from 'rxjs/operators';
import {UserModel} from '../../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'user';
  constructor(
    private storageService: StorageService,
    private firebaseDatabaseSvc: FirebaseDatabaseService
  ) { }

  insert(data: UserModel): any {
    this.firebaseDatabaseSvc.insert(this.url, data)
      .then( result => {
        if (result) {
          this.storageService.setCurrentUser(result);
        }
      });
  }

  getAll(): any {
    return this.firebaseDatabaseSvc.get(this.url);
  }

  getById(userKey: string): Observable<UserModel> {
    return this.firebaseDatabaseSvc.getById(this.url, userKey, 'name').pipe(
      map(result => {
        this.storageService.setCurrentUser(result.key);
        return result;
      })
    );
  }

}
