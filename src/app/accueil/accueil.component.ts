import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, effect} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MultiLangService } from '../multi-lang.service';

@Component({
    selector: 'app-accueDil',
    standalone:true,
    imports: [NgbCarouselModule,TranslateModule],
    templateUrl: './accueil.component.html',
    styleUrl: './accueil.component.scss'
})
export class AccueilComponent {
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


}
