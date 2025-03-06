import { Component, inject } from '@angular/core';
import { MultiLangService } from '../multi-lang.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone:true,
    imports: [RouterModule,CommonModule,TranslateModule],    
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  
    multiLangService = inject(MultiLangService);

    toggleLanguage(language: string) {
      
      if(this.multiLangService.languageSignal() !== language) {
        this.multiLangService.updateLanguage(language);
        console.log('Language changed to: ', language);
  
      }  
    }
  
    getLanguageIconClass(language: string) {
  

        switch(language) {
            case 'fr':
              return 'flag-icon-fr';
            case 'ita':
              return 'flag-icon-it';
            default:
              return 'flag-icon-it';    
          }
  
    }
  
    getLanguageName(language: string) {
  
      switch(language) {
        case 'fr':
          return 'Français';
        case 'ita':
          return 'Italien';
        default:
          return 'Italien';    
      }
  
    }

}
