import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SearchPageRoutingModule} from './search-routing.module';

import {SearchPage} from './search.page';
import {NgAisHitsModule, NgAisInstantSearchModule, NgAisSearchBoxModule} from 'angular-instantsearch';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    ReactiveFormsModule,
    NgAisInstantSearchModule,
    NgAisSearchBoxModule,
    NgAisHitsModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {
}
