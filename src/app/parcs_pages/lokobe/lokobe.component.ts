import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-lokobe',
    imports: [TranslateModule,MatButtonModule, MatDialogModule, CarouselModule, CommonModule],
    templateUrl: './lokobe.component.html',
    styleUrl: './lokobe.component.scss'
})
export class LokobeComponent {
  images = [
    '/Lokobe/Lokobe1.jpg',
    '/Lokobe/Lokobe2.JPG',
    '/Lokobe/Lokobe3.jpg',
    '/Lokobe/Lokobe4.jpg',
    '/Lokobe/Lokobe5.jpg',
  ];
  
  carouselOptions: OwlOptions = {
    loop: true,               // Défilement infini
    margin: 10,               // Espacement entre les images
    nav: true,                // Boutons de navigation activés
    dots: false,               // Afficher les points de pagination
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
