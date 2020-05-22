import {Injectable} from '@angular/core';
import {Event} from './event';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsCollection: AngularFirestoreCollection<Event>;

  constructor(private afs: AngularFirestore) {
    this.eventsCollection = this.afs.collection<Event>('events');
  }

  create(event: Event): Observable<DocumentReference> {
    return fromPromise(this.eventsCollection.add(event));
  }

  get(id: string): Observable<Event> {
    return this.eventsCollection.doc<Event>(id).valueChanges();
  }
}
