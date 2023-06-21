import { Component } from '@angular/core';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-my-pictures',
  templateUrl: './my-pictures.component.html',
  styleUrls: ['./my-pictures.component.scss'],
})
export class MyPicturesComponent {
  constructor(public ui: UiService) {}
  close() {
    this.ui.myPicsModal.close();
  }
}
