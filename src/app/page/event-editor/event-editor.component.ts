import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Observable, switchMap } from 'rxjs';
import { Event } from 'src/app/model/event';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

  event$: Observable<Event> = this.ar.params.pipe(
    switchMap( params => this.eventService.get(params['id']))
  );

  constructor(
    private ar: ActivatedRoute,
    private eventService: EventService,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  onUpdate(eventForm: NgForm){
    this.eventService.update(eventForm.value).subscribe(
      eventData => this.router.navigate(['/', ''])
    )
  }


}
