import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common'; 
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-pangalanes',
    imports: [NgbCarouselModule, CommonModule,TranslateModule],
    templateUrl: './pangalanes.component.html',
    styleUrl: './pangalanes.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PangalanesComponent {
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

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
}
