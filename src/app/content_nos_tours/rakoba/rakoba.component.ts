import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-rakoba',
    imports: [CommonModule, NgbCarouselModule,TranslateModule],
    templateUrl: './rakoba.component.html',
    styleUrl: './rakoba.component.scss'
})
export class RakobaComponent {
  slides = [
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

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
}
