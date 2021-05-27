import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {PoNotificationService} from '@po-ui/ng-components';
import {AngularFireDatabase} from '@angular/fire/database';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDatabaseService {

  constructor(
    private db: AngularFireDatabase,
    public poNotification: PoNotificationService
  ) { }

  get(url: string): Observable<any> {
    return this.db.list(url)
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map( c => ({key: c.payload.key, ...c.payload.val() as {} }));
        }));
  }

  getById(url: string, key: string, columnCompare: string): Observable<any> {
    return this.get(url).pipe(
      map(allItems => {
        if (allItems) {
          return allItems.find(x => x[columnCompare] === key);
        }
        return allItems;
      })
    );
  }

  insert(url: string, data: any): Promise<string> {
    return this.db.list(url)
      .push(data)
      .then( result => {
        this.poNotification.success('Salvo com sucesso!');
        return result?.key;
      })
      .catch((error) => {
        this.poNotification.success(`Erro ao salvar: ${error}`);
        return null;
      });
  }

  update(url: string, data: any): Promise<boolean> {
    return this.db.list(url)
      .update(data.key, data)
      .then(() => {
        this.poNotification.success('Atualizado com sucesso!');
        return true;
      })
      .catch((error) => {
        this.poNotification.success(`Erro ao salvar: ${error}`);
        return false;
      });
  }
}
