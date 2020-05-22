import {Component} from '@angular/core';
import {AlgoliaSearchService} from './algolia-search.service';
import {Event} from '../data/event';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html'
})
export class SearchPage {

  results: Event[];

  constructor(private searchService: AlgoliaSearchService) {
  }

  onSearchTermChange(event: CustomEvent) {
    this.searchService.search(event.detail.value).subscribe(searchResponse => this.results = searchResponse.hits);
  }

}
