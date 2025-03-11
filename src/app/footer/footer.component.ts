import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    redirectToWhatsApp(phoneNumber: string) {
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
      }
      
}
