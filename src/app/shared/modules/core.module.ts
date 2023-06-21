
import { NgModule } from '@angular/core';
import { ComponentsModule } from './components.module';
import { MaterialModule } from './material';


@NgModule({
    declarations: [
    ],
    imports: [
        MaterialModule,
        ComponentsModule,
    ],
    exports: [
        MaterialModule,
        ComponentsModule
    ],
    providers: [],
    bootstrap: []
})
export class CoreModule { }
