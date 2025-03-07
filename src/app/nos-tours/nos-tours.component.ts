import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { PangalanesComponent } from '../content_nos_tours/pangalanes/pangalanes.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-nos-tours',
    imports: [TranslateModule],
    templateUrl: './nos-tours.component.html',
    styleUrl: './nos-tours.component.scss'
})
export class NosToursComponent {


}
