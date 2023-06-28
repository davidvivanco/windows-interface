import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  private lang: 'es' | 'en';

  constructor() {
    this.lang = 'en';
  }

  setLang(lang: 'es' | 'en') {
    this.lang = lang;
  }

  getLang() {
    return this.lang;
  }
}
