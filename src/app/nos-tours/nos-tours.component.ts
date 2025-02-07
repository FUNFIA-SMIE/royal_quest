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

@Component({
  selector: 'app-nos-tours',
  standalone: true,
  imports: [],
  templateUrl: './nos-tours.component.html',
  styleUrl: './nos-tours.component.scss'
})
export class NosToursComponent {
  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PangalanesComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
