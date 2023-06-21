import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss'],
})
export class PhotoDetailComponent implements OnInit {
  fileName: string;
  fileBasePath: string;

  constructor(
    public dialog: MatDialogRef<PhotoDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public ui: UiService
  ) {}

  ngOnInit(): void {
    this.fileBasePath = './assets/images/mis_fotos/';
    this.fileName = this.data.fileName;
  }

  close() {
    this.ui.photosDetailModals[this.fileName]?.close();
  }
}
