import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { AndasibeComponent } from '../parcs_pages/andasibe/andasibe.component';
import { RanomafanaComponent } from '../parcs_pages/ranomafana/ranomafana.component';
import { AnjaComponent } from '../parcs_pages/anja/anja.component';
import { IsaloComponent } from '../parcs_pages/isalo/isalo.component';
import { TsingyComponent } from '../parcs_pages/tsingy/tsingy.component';
import { RenialComponent } from '../parcs_pages/renial/renial.component';
import { LokobeComponent } from '../parcs_pages/lokobe/lokobe.component';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nos-parcs',
  imports: [
    NgbCarouselModule,
    CommonModule,
    CarouselModule,
    MatIconModule,
    TranslateModule
  ],
  templateUrl: './nos-parcs.component.html',
  styleUrl: './nos-parcs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NosParcsComponent {


  constructor(private router: Router) { }

  title = 'ng-carousel-demo';



  customOptions: OwlOptions = {

    loop: true,

    mouseDrag: true,

    touchDrag: true,

    pullDrag: false,

    dots: false,

    navSpeed: 700,

    navText: ['❮', '❯'],    // Icônes des boutons précédent/suivant

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

  readonly dialog = inject(MatDialog);
  openDialog(title: any) {

    let component;

    if (title === "Andasibe") {
      this.router.navigate(['/Andasibe']);
    }

    if (title === "Ranomafana") {
      this.router.navigate(['/Ranomafana']);

    }

    if (title === "Anja") {
      this.router.navigate(['/Anja']);
    }

    if (title === "Isalo") {
      this.router.navigate(['/Isalo']);
    }

    if (title === "Tsingy") {
      this.router.navigate(['/Tsingy']);
    }

    if (title === "Reniala") {
      this.router.navigate(['/Reniala']);
    }

    if (title === "Lokobe") {
      this.router.navigate(['/Lokobe']);
    }

  }

}
