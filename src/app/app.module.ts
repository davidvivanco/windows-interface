import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './shared/modules/core.module';
import { SharedModule } from './shared/modules/shared.module';
import { MyPicturesComponent } from './shared/components/modals/my-pictures/my-pictures.component';
import { PhotoDetailComponent } from './shared/components/modals/photo-detail/photo-detail.component';
import { EmuleComponent } from './shared/components/modals/emule/emule.component';


@NgModule({
  declarations: [
    AppComponent,
    MyPicturesComponent,
    PhotoDetailComponent,
    EmuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
