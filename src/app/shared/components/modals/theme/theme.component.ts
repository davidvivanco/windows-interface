import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  EventsService,
  ThemeType,
} from 'src/app/shared/services/events.service';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-theme-modal',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeModalComponent {
  checkboxes;
  theme: ThemeType;

  constructor(
    private cdr: ChangeDetectorRef,
    private ui: UiService,
    private events: EventsService,
    private themeService: ThemeService
  ) {
    this.checkboxes = [
      { checked: true, text: 'First rule', theme: 'firstRule' },
      { checked: false, text: 'Fresh', theme: 'fresh' },
      { checked: false, text: 'Delorean', theme: 'delorean' },
    ];
    this.themeService.getTheme().subscribe((theme) => {
      this.theme = theme;
      const index = this.checkboxes.findIndex(
        (ele) => ele.theme === this.theme
      );
      this.checkboxes.forEach((e) => (e.checked = false));
      this.checkboxes[index].checked = true;
    });
  }

  close() {
    this.ui.switchThemeModal.close();
  }

  onCheckChange(i: number) {
    this.themeService.updateTheme(this.checkboxes[i].theme as ThemeType);
    this.checkboxes.forEach((e) => (e.checked = false));
    this.checkboxes[i].checked = true;
    this.cdr.detectChanges();
  }
}
