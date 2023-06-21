import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-emule',
  templateUrl: './emule.component.html',
  styleUrls: ['./emule.component.scss']
})
export class EmuleComponent {
  constructor(
    public dialog: MatDialogRef<EmuleComponent>,
    public ui: UiService
  ) {}

  close() {
    this.ui.emuleModal.close();
  }
}
