import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../data/event.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html'
})
export class CreatePage implements OnInit {

  eventForm: FormGroup;

  constructor(private fb: FormBuilder, private eventService: EventService) {
  }

  ngOnInit() {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      date: [undefined, Validators.required],
      description: ['']
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      this.eventService.create(this.eventForm.value).subscribe(
        () => this.eventForm.reset()
      );
    }
  }
}
