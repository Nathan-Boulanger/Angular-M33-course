import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <event-thumbnail
          (click)="handleThumbnailClick(event.name)"
          *ngFor="let event of events"
          [event]="event"
          class="col-md-5"
        ></event-thumbnail>
      </div>
    </div>
  `,
})
export class EventsListComponent implements OnInit {
  events: any;
  // private eventService : pas accessibilite sur le champ dnas le constr mais declare une variable private sur l'objet
  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
