import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventDetailComponent} from './event-detail.component';
import {IonicModule} from '@ionic/angular';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [EventDetailComponent],
  exports: [EventDetailComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule]
})
export class EventDetailModule {
}
