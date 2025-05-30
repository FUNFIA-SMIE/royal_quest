import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { VoyagesComponent } from './voyages/voyages.component';
import { ConseilDuVoyageComponent } from './conseil-du-voyage/conseil-du-voyage.component';
import { NosToursComponent } from './nos-tours/nos-tours.component';
import { GuideComponent } from './guide/guide.component';
import { LocationVoituresComponent } from './location-voitures/location-voitures.component';
import { PangalanesComponent } from './content_nos_tours/pangalanes/pangalanes.component';
import { OuestComponent } from './content_nos_tours/ouest/ouest.component';
import { NosyBEComponent } from './content_nos_tours/nosy-be/nosy-be.component';
import { SainteMArieComponent } from './content_nos_tours/sainte-marie/sainte-marie.component';
import { SudComponent } from './content_nos_tours/sud/sud.component';
import { RakobaComponent } from './content_nos_tours/rakoba/rakoba.component';
import { NosParcsComponent } from './nos-parcs/nos-parcs.component';
import { AndasibeComponent } from './parcs_pages/andasibe/andasibe.component';
import { RanomafanaComponent } from './parcs_pages/ranomafana/ranomafana.component';
import { AnjaComponent } from './parcs_pages/anja/anja.component';
import { IsaloComponent } from './parcs_pages/isalo/isalo.component';
import { TsingyComponent } from './parcs_pages/tsingy/tsingy.component';
import { RenialComponent } from './parcs_pages/renial/renial.component';
import { LokobeComponent } from './parcs_pages/lokobe/lokobe.component';

export const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'Voyages', component: VoyagesComponent },
    { path: 'Conseil', component: ConseilDuVoyageComponent },
    { path: 'Tours', component: NosToursComponent },
    { path: 'Guide', component: GuideComponent },
    { path: 'Location', component: LocationVoituresComponent },
    { path: 'Pangalanes', component: PangalanesComponent },
    { path: 'Ouest', component: OuestComponent },
    { path: 'Nosy_be', component: NosyBEComponent },
    { path: 'Sainte_marie', component: SainteMArieComponent },
    { path: 'Sud', component: SudComponent },
    { path: 'Rakoba', component: RakobaComponent },
    { path: 'Parcs', component: NosParcsComponent },

    { path: 'Andasibe', component: AndasibeComponent },
    { path: 'Ranomafana', component: RanomafanaComponent },
    { path: 'Anja', component: AnjaComponent },
    { path: 'Isalo', component: IsaloComponent },
    { path: 'Tsingy', component: TsingyComponent },
    { path: 'Reniala', component: RenialComponent },
    { path: 'Lokobe', component: LokobeComponent },










];
