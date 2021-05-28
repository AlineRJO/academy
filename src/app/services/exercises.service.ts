import { Injectable } from '@angular/core';
import {StorageService} from './storage/storage.service';
import {FirebaseDatabaseService} from './firebase-database/firebase-database.service';
import {UserModel} from '../models/user-model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ExercisesModel} from '../models/exercises-model';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  private url = 'exercises';
  constructor(
    private storageService: StorageService,
    private firebaseDatabaseSvc: FirebaseDatabaseService
  ) { }

  insert(data: ExercisesModel): any {
    this.firebaseDatabaseSvc.insert(this.url, data)
      .then( result => {
        if (result) {
          this.storageService.setCurrentUser(result);
        }
      });
  }

  getAll(): Observable<ExercisesModel[]> {
    return this.firebaseDatabaseSvc.get(this.url);
  }

}
