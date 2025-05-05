import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-conseil-du-voyage',
    imports: [TranslateModule],
    templateUrl: './conseil-du-voyage.component.html',
    styleUrl: './conseil-du-voyage.component.scss',
    animations: [
        trigger('fadeIn', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(20px)' }),
                animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ])
        ]),
        trigger('fadeInImage', [
            transition(':enter', [
                style({ opacity: 0, transform: 'scale(0.9)' }),
                animate('1000ms ease-in-out', style({ opacity: 1, transform: 'scale(1)' }))
            ])
        ]),
        trigger('fadeInIcons', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(-10px)' }),
                animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ])
        ])
    ]
})
export class ConseilDuVoyageComponent {

}
