import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pangalanes',
  standalone: true,
  imports: [NgbCarouselModule],
   templateUrl: './pangalanes.component.html',
  styleUrl: './pangalanes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PangalanesComponent {
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
