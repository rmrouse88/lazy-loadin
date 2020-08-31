import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'lazy',
        loadChildren: () => import('./lazy-module/lazy.module').then(m => {
            console.log(m)
            return m.LazyModule
        })
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{
}
