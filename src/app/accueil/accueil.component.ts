import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [NgbCarouselModule, FooterComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
})
export class AccueilComponent {
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
