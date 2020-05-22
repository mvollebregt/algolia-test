import {Component, forwardRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators
} from '@angular/forms';
import {Event} from '../../data/event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EventDetailComponent),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EventDetailComponent),
    multi: true
  }]
})
export class EventDetailComponent implements OnChanges, ControlValueAccessor, Validator {

  eventForm: FormGroup;
  readonly: boolean;
  onTouched = () => {
  };

  @Input() value: Event;

  constructor(fb: FormBuilder) {
    this.eventForm = fb.group({
      name: ['', Validators.required],
      date: [undefined, Validators.required],
      description: [''],
      _geoloc: fb.group({
        lat: [''],
        lng: ['']
      })
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value) {
      this.readonly = true;
      this.writeValue(changes.value.currentValue);
    }
  }

  registerOnChange(fn: any): void {
    this.eventForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    if (obj) {
      this.eventForm.setValue({_geoloc: {lat: '', lng: ''}, ...obj});
    } else {
      this.eventForm.reset();
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.eventForm.invalid ? {'invalid-event': true} : this.eventForm.errors;
  }
}
