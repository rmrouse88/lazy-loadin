import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, RouterState } from '@angular/router';
import { LazyComponent } from './lazy.component';


const routes: Routes = [
    {
        path: '',
        component: LazyComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class LazyRoutingModule{
    
}