import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ThemeModalComponent } from '../modals/theme/theme.component';
import { UiService } from '../../services/ui.service';
import { EventsService, ThemeType } from '../../services/events.service';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss'],
})
export class TaskbarComponent {
  constructor(public ui: UiService) {}
}
