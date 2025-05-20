import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-location-voitures',
    imports: [CommonModule,TranslateModule],
    templateUrl: './location-voitures.component.html',
    styleUrl: './location-voitures.component.scss'
})

export class LocationVoituresComponent implements OnInit {
    constructor() { }
    images: string[] = [];
    ngOnInit(): void {
        this.images = Array.from({ length: 8 }, (_, i) => `${i + 1}.jpeg`);
    }




}
