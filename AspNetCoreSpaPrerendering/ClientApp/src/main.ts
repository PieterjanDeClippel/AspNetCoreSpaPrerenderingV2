import { enableProdMode, StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const getBaseUrl = () => {
  return document.getElementsByTagName('base')[0].href.slice(0, -1);
}

const providers: StaticProvider[] = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] },
  { provide: 'MESSAGE', useValue: 'Message from the client' },
];

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
});
