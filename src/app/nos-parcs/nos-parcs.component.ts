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
      const dialogRef = this.dialog.open(AndasibeComponent, {
        width: '500%', // Taille du dialogue, ajustez comme nécessaire
        data: { message: 'Bonjour depuis le composant parent!' } // Transmettre des données au dialogue, si nécessaire
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    if (title === "Ranomafana") {
      const dialogRef = this.dialog.open(RanomafanaComponent, {
        width: '500%', // Taille du dialogue, ajustez comme nécessaire
        data: { message: 'Bonjour depuis le composant parent!' } // Transmettre des données au dialogue, si nécessaire
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    if (title === "Anja") {
      const dialogRef = this.dialog.open(AnjaComponent, {
        width: '500%', // Taille du dialogue, ajustez comme nécessaire
        data: { message: 'Bonjour depuis le composant parent!' } // Transmettre des données au dialogue, si nécessaire
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    if (title === "Isalo") {
      const dialogRef = this.dialog.open(IsaloComponent, {
        width: '500%', // Taille du dialogue, ajustez comme nécessaire
        data: { message: 'Bonjour depuis le composant parent!' } // Transmettre des données au dialogue, si nécessaire
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    if (title === "Tsingy") {
      const dialogRef = this.dialog.open(TsingyComponent, {
        width: '500%', // Taille du dialogue, ajustez comme nécessaire
        data: { message: 'Bonjour depuis le composant parent!' } // Transmettre des données au dialogue, si nécessaire
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    if (title === "Reniala") {
      const dialogRef = this.dialog.open(RenialComponent, {
        width: '500%', // Taille du dialogue, ajustez comme nécessaire
        data: { message: 'Bonjour depuis le composant parent!' } // Transmettre des données au dialogue, si nécessaire
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    if (title === "Lokobe") {
      const dialogRef = this.dialog.open(LokobeComponent, {
        width: '500%', // Taille du dialogue, ajustez comme nécessaire
        data: { message: 'Bonjour depuis le composant parent!' } // Transmettre des données au dialogue, si nécessaire
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

}

}
