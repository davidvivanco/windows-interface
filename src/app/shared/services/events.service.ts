import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ThemeType = 'firstRule' | 'fresh' | 'delorean';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  innerWidth: number;
  private isDesktop$: BehaviorSubject<boolean>;

  constructor() {
    const innerWidth = window.innerWidth;
    this.isDesktop$ = new BehaviorSubject<boolean>(innerWidth > 578);
  }

  isDesktop() {
    return this.isDesktop$.asObservable();
  }

  resize(innerWidth: number) {
    this.isDesktop$.next(innerWidth > 960);
  }

}
