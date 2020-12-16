import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { TailorCreatorComponent } from './components/tailor_creator/tailor_creator.component'
import { TailorStartComponent } from './components/tailor_start/tailor_start.component'

const routes: Routes = [
    { path: '', component: TailorStartComponent },
    { path: 'creator', component: TailorCreatorComponent }    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
