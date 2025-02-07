import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { VoyagesComponent } from './voyages/voyages.component';
import { ConseilDuVoyageComponent } from './conseil-du-voyage/conseil-du-voyage.component';
import { NosToursComponent } from './nos-tours/nos-tours.component';
import { GuideComponent } from './guide/guide.component';
import { LocationVoituresComponent } from './location-voitures/location-voitures.component';
import { PangalanesComponent } from './content_nos_tours/pangalanes/pangalanes.component';

export const routes: Routes = [
    {path: '', component: AccueilComponent},
    {path: 'Voyages', component: VoyagesComponent},
    {path: 'Conseil', component: ConseilDuVoyageComponent},
    {path: 'Tours', component: NosToursComponent},
    {path: 'Guide', component: GuideComponent},
    {path: 'Location', component: LocationVoituresComponent},
    {path: 'Pangalanes', component: PangalanesComponent}



];
