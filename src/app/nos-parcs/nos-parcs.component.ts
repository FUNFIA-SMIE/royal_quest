import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-nos-parcs',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule, CarouselModule],
  templateUrl: './nos-parcs.component.html',
  styleUrl: './nos-parcs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class NosParcsComponent {



  title = 'ng-carousel-demo';



  customOptions: OwlOptions = {

    loop: true,

    mouseDrag: true,

    touchDrag: true,

    pullDrag: false,

    dots: false,

    navSpeed: 700,

    navText: ['', ''],

    responsive: {

      0: {

        items: 1

      },

      400: {

        items: 2

      },

      740: {

        items: 3

      },

      940: {

        items: 4

      }

    },

    nav: true

  }



  slides = [

    {
      id: 1, img: "/Andasibe/Andasibe4.jpg", title: "Andasibe", content: "Au cœur du Parc National d'Andasibe, véritable sanctuaire......."
    },

    {
      id: 2, img: "/Ranomafana/Ranomafana1.jpg", title: "Ranomafana", content: "Au cœur du Parc National de Ranomafana, un véritable havre de biodiversité, les visiteurs sont immergés .........."
    },

    { 
      id: 3, img: "/Anja/Anja3.jpg", title: "Anja", content: "Au cœur du Parc National de Ranomafana, un véritable havre de biodiversité, les visiteurs sont immergés .........."
    },

    { 
      id: 4, img: "/Isalo/Isalo3.jpg", title: "Isalo", content: "Au cœur du Parc National de Ranomafana, un véritable havre de biodiversité, les visiteurs sont immergés .........."
    },

    { 
      id: 5, img: "/Tsingy/Tsingy2.jpg", title: "Tsingy", content: "Au cœur du Parc National de Ranomafana, un véritable havre de biodiversité, les visiteurs sont immergés .........."
      
    },

    { 

      id: 6, img: "/Reniala/Reniala3.jpg", title: "Reniala", content: "Au cœur du Parc National de Ranomafana, un véritable havre de biodiversité, les visiteurs sont immergés .........."
    
    },

    { 

      id: 7, img: "/Lokobe/Lokobe1.jpg", title: "Lokobe", content: "Au cœur du Parc National de Ranomafana, un véritable havre de biodiversité, les visiteurs sont immergés .........."
    
    }
  ];

  //  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  /*
    slide = [
      [
        '/Pangalanes/Pangalane1.jpg',
        '/Pangalanes/Pangalane2.jpg',
        '/Pangalanes/Pangalane3.jpg'
      ],
      [
        '/Pangalanes/Pangalane5.jpg',
        '/Pangalanes/Pangalane6.jpg',
        '/Pangalanes/Pangalane1.jpg'
      ]
    ];
  
    slides = [
      [
        { src: '/Pangalanes/Pangalane1.jpg', alt: 'Image 1',title:'Andasibe ' },
        { src: '/Pangalanes/Pangalane2.jpg', alt: 'Image 2' },
        { src: '/Pangalanes/Pangalane3.jpg', alt: 'Image 3' },
        { src: '/Pangalanes/Pangalane5.jpg', alt: 'Image 4' }
      ],
      [
        { src: '/Pangalanes/Pangalane5.jpg', alt: 'Image 1' },
        { src: '/Pangalanes/Pangalane3.jpg', alt: 'Image 2' },
        { src: '/Pangalanes/Pangalane2.jpg', alt: 'Image 3' },
        { src: '/Pangalanes/Pangalane1.jpg', alt: 'Image 4' }
      ]
    ];*/
}
