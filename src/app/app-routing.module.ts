import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { TailorCreatorComponent } from './components/tailor-creator/tailor-creator.component'

const routes: Routes = [
    { path: 'creator', component: TailorCreatorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
