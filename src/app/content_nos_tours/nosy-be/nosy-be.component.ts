import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
@Component({
    selector: 'app-nosy-be',
    imports: [NgbCarouselModule, CommonModule,TranslateModule],
    templateUrl: './nosy-be.component.html',
    styleUrl: './nosy-be.component.scss'
})
export class NosyBEComponent {
  slides = [
    [
      '/Nosy_be/Nosy be1.jpg',
      '/Nosy_be/Nosy be4.JPG',
      '/Nosy_be/Nosy be 2.jpg'
    ],
    [
      '/Nosy_be/Nosy be6.jpg',
      '/Nosy_be/Nosy be1.jpg',
      '/Nosy_be/Nosy be4.JPG',
    ]
  ];
}
