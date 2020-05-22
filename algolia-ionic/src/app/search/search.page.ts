import {Component} from '@angular/core';
import {AlgoliaSearchService} from './algolia-search.service';
import {Event} from '../data/event';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html'
})
export class SearchPage {

  searchForm: FormGroup;
  results: Observable<Event[]>;

  constructor(fb: FormBuilder, private searchService: AlgoliaSearchService) {
    this.searchForm = fb.group({
      searchTerm: [''],
      aroundLatLngViaIP: [false]
    });
    this.results = this.searchForm.valueChanges.pipe(
      switchMap(options => this.searchService.search(options.searchTerm, options.aroundLatLngViaIP)),
      map(results => results.hits)
    );
  }
}
