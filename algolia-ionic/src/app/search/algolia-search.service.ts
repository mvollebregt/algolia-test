import {Injectable} from '@angular/core';
import algoliasearch, {SearchIndex} from 'algoliasearch/lite';
import {fromPromise} from 'rxjs/internal-compatibility';
import {Event} from '../data/event';

@Injectable({
  providedIn: 'root'
})
export class AlgoliaSearchService {

  private index: SearchIndex;

  constructor() {
    const client = algoliasearch('VVWED74WIF', '541e494d7bf250c3ff3bfbecbcf45459');
    this.index = client.initIndex('test');
  }

  search(query: string) {
    return fromPromise(this.index.search<Event>(query));
  }
}
