import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { Expenses } from '../models/expenses';

@Injectable({
  providedIn: 'root'
})
export class ExpenselistService {

  constructor(private db:AngularFirestore) { }

  postItem(coll:string, data:object) {
    let reply = {};
    this.db.collection(coll).add(data)
    .then(response => {
      reply = {status: 'success', data: response};
    }).catch(err => {
      reply = {status: 'failed', data: err};
    });

    return reply;
  }

  modItem(coll:string, id:string, data:object) {
    this.db.doc(`${coll}/${id}`).update(data).then(ref => {
      // notify
    });

    return 'success';
  }

  dropItem(coll:string, id:string, data:object) {
    data = {...data, status:'1'};
    this.db.doc(`${coll}/${id}`).update(data).then(ref => {
      // notify
    });

    return 'success';
  }

  loadItems(coll:string): Observable<Expenses[]> {
    return this.db.collection(coll).snapshotChanges().pipe(
      map(dump => {
        return dump.map(a => {
          const id = a.payload.doc.id;
          const data = a.payload.doc.data() as Expenses;
          const resp:Expenses = {
            id: id,
            title: data.title,
            amount: data.amount,
            type: data.type,
            status: data.status
          }
          return resp;
        })
      })
    );
  }
}
