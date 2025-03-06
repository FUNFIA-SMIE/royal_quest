import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-anja',
    imports: [MatButtonModule, MatDialogModule, CarouselModule, CommonModule],
    templateUrl: './anja.component.html',
    styleUrl: './anja.component.scss'
})
export class AnjaComponent {
  images = [
    '/Andasibe/Andasibe1.jpg',
    '/Andasibe/Andasibe2.png',
    '/Andasibe/Andasibe4.jpg',
    '/Andasibe/Andasibe5.jpg',
    '/Andasibe/Andasibe3.jpg'

  ];
  
  carouselOptions: OwlOptions = {
    loop: true,               // Défilement infini
    margin: 10,               // Espacement entre les images
    nav: true,                // Boutons de navigation activés
    dots: true,               // Afficher les points de pagination
    autoplay: true,           // Activer le défilement automatique
    autoplayTimeout: 2000,    // 1 seconde entre chaque image
    autoplayHoverPause: true, // Pause quand la souris est dessus
    mouseDrag: true,          // Glisser-déposer avec la souris
    touchDrag: true,          // Support du tactile
    navText: ['❮', '❯'],     // Icônes de navigation
    responsive: {
      0: { items: 1 },       // 1 seule image sur mobile
      600: { items: 1 },     // 1 seule image sur tablette
      1000: { items: 1 }     // 1 seule image sur PC
    }
  };

}
