import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {Event} from '../data/event';
import {EventService} from '../data/event.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html'
})
export class ViewPage {

  event: Observable<Event>;

  constructor(route: ActivatedRoute, eventService: EventService) {
    this.event = route.paramMap.pipe(
      map(paramMap => paramMap.get('id')),
      switchMap(id => eventService.get(id))
    );
  }

}
