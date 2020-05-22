import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {EventService} from '../data/event.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html'
})
export class CreatePage {

  formControl = new FormControl();

  constructor(private eventService: EventService) {
  }

  onSubmit() {
    if (this.formControl.valid) {
      this.eventService.create(this.formControl.value).subscribe(
        () => this.formControl.reset()
      );
    }
  }
}
