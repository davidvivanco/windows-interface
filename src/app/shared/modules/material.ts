import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgModule } from '@angular/core';

const MODULES = [
  DragDropModule,
  MatButtonModule,
  MatDialogModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatMenuModule,
  MatSelectModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES],
  providers: [],
  bootstrap: [],
})
export class MaterialModule {}
