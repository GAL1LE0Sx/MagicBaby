import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // mantém a detecção de mudanças otimizada
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }),
    // define as rotas da aplicação
  ]
};
