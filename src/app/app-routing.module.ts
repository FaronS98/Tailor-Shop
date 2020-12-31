import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { TailorCreatorComponent } from './components/tailor_creator/tailor_creator.component'
import { TailorStartComponent } from './components/tailor_start/tailor_start.component'
import { TailorGalleryComponent } from './components/tailor-gallery/tailor-gallery.component'
import { TailorInformationComponent } from './components/tailor-information/tailor-information.component'
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component'

const routes: Routes = [
    { path: '', component: TailorStartComponent },
    { path: 'creator', component: TailorCreatorComponent },
    { path: 'gallery', component: TailorGalleryComponent },
    { path: 'information', component: TailorInformationComponent },
    { path: 'admin', component: AdminPanelComponent }       
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
