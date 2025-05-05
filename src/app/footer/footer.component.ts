import { Component } from '@angular/core';
import { ServiceEmailService } from '../service/service-email.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-footer',
    standalone:true,
    imports: [FormsModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    redirectToWhatsApp(phoneNumber: string) {
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
      }
      

      emailData = {
        to_name: '',
        from_name: '',
        message: '',
        reply_to: ''
      };
    
      constructor(private emailService: ServiceEmailService) {}
    
      sendEmail() {
        this.emailService.sendMail(this.emailData)
          .then(() => {
            Swal.fire({
              title: 'E-mail envoyé !',
              text: 'Votre message a été envoyé avec succès.',
              icon: 'success',
              confirmButtonText: 'OK'
            });
      
            // Réinitialiser le formulaire après l'envoi
            this.emailData = {         
                to_name: '',
                from_name: '',
                message: '',
                reply_to: ''
         };
          })
          .catch(error => {
            Swal.fire({
              title: 'Erreur',
              text: 'Erreur lors de l’envoi : ' + error.text,
              icon: 'error',
              confirmButtonText: 'OK'
            });
          });
      }
}
