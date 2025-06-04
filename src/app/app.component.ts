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
redirectToWhatsApp(phoneNumber: string, message: string = ''): void {
  const encodedMessage = encodeURIComponent(message);
  const fallbackUrl = `https://wa.me/${phoneNumber}${message ? '?text=' + encodedMessage : ''}`;
  const appUrl = `whatsapp://send?phone=${phoneNumber}${message ? '&text=' + encodedMessage : ''}`;

  // Détection mobile
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // D'abord essayer whatsapp:// (mobile ou desktop avec appli)
  const newWindow = window.open(appUrl, '_blank');

  // Fallback vers WhatsApp Web si échec (souvent sur desktop sans appli)
  setTimeout(() => {
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.open(fallbackUrl, '_blank');
    }
  }, 500);
}




  constructor(private translate: TranslateService) {
    this.translate.addLangs(['fr', 'ita']);
    this.translate.setDefaultLang('ita');
    this.translate.use('ita');
  }




}
