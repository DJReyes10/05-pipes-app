import { Injectable, signal } from '@angular/core';

export type availableLocale = 'es' | 'fr' | 'en'; // Define the supported locales
@Injectable({ providedIn: 'root' })
export class LocaleService {
  private currentLocale = signal<availableLocale>('es'); // Default locale set to Spanish

  constructor() {
    this.currentLocale.set(
      (localStorage.getItem('locale') as availableLocale) ?? 'es'
    );
  }

  get getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: availableLocale) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload(); // Reload the page to apply the new locale
    // Additional logic to handle locale change can be added here
  }
}
