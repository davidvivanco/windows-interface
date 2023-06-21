import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeType } from './events.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme$: BehaviorSubject<ThemeType>;

  constructor() {
    this.theme$ = new BehaviorSubject<ThemeType>('delorean');
    this.theme$.asObservable().subscribe((theme) => {
      this.updateCssVariables(theme);
    });
  }

  getTheme() {
    return this.theme$.asObservable();
  }

  updateTheme(theme: ThemeType) {
    this.theme$.next(theme);
  }

  updateCssVariables(theme: ThemeType) {
    const r = document.querySelector(':root') as any;

    switch (theme) {
      case 'firstRule':
        r.style.setProperty('--primary', '#f597cf');
        break;
      case 'fresh':
        r.style.setProperty('--primary', '#d5a8fe');
        break;
      case 'delorean':
        r.style.setProperty('--primary', '#E86F68');
        r.style.setProperty('--primary', 'black');
        break;

      default:
        r.style.setProperty('--primary', '#f597cf');
        break;
    }
  }
}
