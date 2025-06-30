import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

import localEs from '@angular/common/locales/es-HN'; // Asegúrate de que el locale 'es' esté importado correctamente
import localFr from '@angular/common/locales/fr';
import { LocaleService } from './services/locale.service';

registerLocaleData(localEs, 'es');
registerLocaleData(localFr, 'fr'); // Asegúrate de que el locale 'fr' esté importado correctamente

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.getLocale, // Asegúrate de que el servicio esté inicializado
      // useValue: 'es', // Cambia el locale a español de España por defecto
    },
  ],
};
