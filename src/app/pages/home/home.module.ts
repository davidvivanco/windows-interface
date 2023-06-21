import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
