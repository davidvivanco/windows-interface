import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from './shared/services/lang.setvice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private lang: LangService, private translate: TranslateService) {
    this.lang.setLang('en');
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
