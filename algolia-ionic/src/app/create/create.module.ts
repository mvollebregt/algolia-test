import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CreatePageRoutingModule} from './create-routing.module';

import {CreatePage} from './create.page';
import {EventDetailModule} from '../shared/event-detail/event-detail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePageRoutingModule,
    ReactiveFormsModule,
    EventDetailModule
  ],
  declarations: [CreatePage]
})
export class CreatePageModule {
}
