import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClientApp';
  message = '';

  constructor(private translateService: TranslateService, @Inject('MESSAGE') message: string) {
    this.message = message;
    this.translateService.setDefaultLang('de');
  }

  useLanguage(language: string) {
    this.translateService.use(language);
  }
}
