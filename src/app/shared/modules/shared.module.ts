import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material';
import { ComponentsModule } from './components.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule,

  ],
  exports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe]
})
export class SharedModule {}
