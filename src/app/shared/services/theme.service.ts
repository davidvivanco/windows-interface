import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeType } from './events.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme$: BehaviorSubject<ThemeType>;

  constructor() {
    this.theme$ = new BehaviorSubject<ThemeType>('oldSchool');
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
      case 'oldSchool':
        r.style.setProperty('--primary', 'black');
        r.style.setProperty('--hover', '#bbefc8');
        break;
      case 'firstRule':
        r.style.setProperty('--primary', '#f597cf');
        r.style.setProperty('--hover', '#8688ff');
        break;
      case 'fresh':
        r.style.setProperty('--primary', '#d5a8fe');
        r.style.setProperty('--hover', '#f597cf');
        break;
      case 'delorean':
        r.style.setProperty('--primary', '#E86F68');
        r.style.setProperty('--hover', '#7ec9ff');
        break;

      default:
        r.style.setProperty('--primary', '#f597cf');
        break;
    }
  }
}
