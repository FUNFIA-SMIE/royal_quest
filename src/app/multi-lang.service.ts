import { effect, inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

export class MultiLangService {

  translateService = inject(TranslateService);


  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
  private getInitialLanguage(): string {
    if (this.isLocalStorageAvailable()) {
      const storedLanguage = localStorage.getItem('languageSignal');
      if (storedLanguage) {
        try {
          return JSON.parse(storedLanguage);
        } catch (e) {
          console.error('Error parsing language from localStorage', e);
          return 'ita';
        }
      }
    }
    return 'ita';
  }

  languageSignal = signal<string>(this.getInitialLanguage());

  updateLanguage(language: string) {
    this.languageSignal.update(() => {
      switch (language) {
        case 'ita':
          return 'ita';
        case 'fr':
          return 'fr';
        default:
          return 'ita';
      }
    });
  }

  constructor() {
    effect(() => {
      if (this.isLocalStorageAvailable()) {
        localStorage.setItem('languageSignal', JSON.stringify(this.languageSignal()));
      }
      this.translateService.use(this.languageSignal());
      console.log('Language changed to: ', this.languageSignal());
    });
  }

}