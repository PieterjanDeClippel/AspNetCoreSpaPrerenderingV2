import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { of } from 'rxjs';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import * as translationEn from '../assets/i18n/en.json';
import * as translationDe from '../assets/i18n/de.json';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: JsonLoaderFactory
      }
    })
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}

// required for AOT compilation
export function JsonLoaderFactory() {
  return new TranslateJsonLoader();
}

export class TranslateJsonLoader implements TranslateLoader {
  constructor() {
  }

  public getTranslation(lang: string) {
    switch (lang) {
      case 'de': {
        return of(translationDe);
      } break;
      default: {
        return of(translationEn);
      } break;
    }
  }
}
