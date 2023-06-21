
import { NgModule } from '@angular/core';
import { ThemeModalComponent } from '../components/modals/theme/theme.component';
import { MaterialModule } from './material';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { CommonModule } from '@angular/common';
import { TaskbarComponent } from '../components/taskbar/taskbar.component';
import { SpotifyComponent } from '../components/modals/spotify/spotify.component';
import { AboutComponent } from '../components/modals/about/about.component';


@NgModule({
    declarations: [
        ThemeModalComponent,
        CheckboxComponent,
        TaskbarComponent,
        SpotifyComponent,
        AboutComponent,

    ],
    imports: [
        MaterialModule,
        CommonModule
    ],
    exports: [
        CheckboxComponent,
        TaskbarComponent
    ],
    providers: [],
    bootstrap: []
})
export class ComponentsModule { }
