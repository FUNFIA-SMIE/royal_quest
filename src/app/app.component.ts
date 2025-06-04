import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { TranslateModule } from "@ngx-translate/core";
import { TranslateService } from "@ngx-translate/core";
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    TranslateModule,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';

  redirectToWhatsApp(phoneNumber: string) {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  }



  constructor(private translate: TranslateService) {
    this.translate.addLangs(['fr', 'ita']);
    this.translate.setDefaultLang('ita');
    this.translate.use('ita');
  }




}
