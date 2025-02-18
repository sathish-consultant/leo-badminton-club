import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ActivitiesComponent } from './activities/activities.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatListItem } from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AboutUsComponent,
    ActivitiesComponent,
    BenefitsComponent,
    FooterComponent,
    HeroComponent,
    TournamentsComponent,
    FooterComponent,
    SchedulesComponent,
    MatIconModule,
    MatListModule,
    MatListItem,
    MatDialogModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'leo-badminton-club';
}
