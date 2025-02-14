import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-schedules',
  imports: [
    MatListModule,
    MatIconModule,
    MatListItem
  ],
  templateUrl: './schedules.component.html',
  styleUrl: './schedules.component.css'
})
export class SchedulesComponent {

}
