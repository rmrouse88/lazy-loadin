import { NgModule } from '@angular/core';
import { LazyComponent } from './lazy.component';
import { LazyRoutingModule } from './lazy.routing.module';

@NgModule({
    imports: [
        LazyRoutingModule
    ],
    declarations: [
        LazyComponent
    ],
    exports: [
        LazyComponent
    ]
})
export class LazyModule{

}