import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ThemeModalComponent } from '../modals/theme/theme.component';
import { UiService } from '../../services/ui.service';
import { EventsService, ThemeType } from '../../services/events.service';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from '../../services/lang.setvice';
import * as moment from 'moment';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss'],
})
export class TaskbarComponent {
  lang: string;
  hour: string;
  constructor(
    public translate: TranslateService,
    public ui: UiService,
    private langService: LangService
  ) {
    this.lang = this.langService.getLang();
    this.getHour();
  }

  setTranslate() {
    const lang = this.lang === 'es' ? 'en' : 'es';
    this.translate.use(lang);
    this.langService.setLang(lang);
    this.lang = this.langService.getLang();
  }

  getHour() {
    window.setInterval(() => {
      this.hour = moment().format('H:mm');
    }, 1000);
  }
}
