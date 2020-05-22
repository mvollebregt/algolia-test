import {Component} from '@angular/core';
import * as algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  'VVWED74WIF',
  '541e494d7bf250c3ff3bfbecbcf45459'
);

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html'
})
export class SearchPage {

  config = {
    indexName: 'test',
    searchClient
  };

}
