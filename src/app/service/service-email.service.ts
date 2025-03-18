import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmailService {

  constructor() { }

  sendMail(data:any): Promise<any> {

    return emailjs.send('service_n4g87q3', 'template_lfajn6c', data, 'QVwGKZLOqrrB2Lqfm');

  }

}
