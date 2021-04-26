import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  constructor(private TranslateService: TranslateService){
    this.TranslateService.setDefaultLang('en');
    const lang = localStorage.getItem('lang') || 'en';
    this.TranslateService.use(lang);
    document.documentElement.lang = lang;
  }
 }
 

