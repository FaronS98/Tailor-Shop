import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemSelectionComponent } from './components/item_selection/item_selection.component';
import { TailorCreatorComponent } from './components/tailor_creator/tailor_creator.component';
import { TailorModelComponent } from './components/tailor_model/tailor_model.component';
import { TailorHeaderComponent } from './components/tailor_header/tailor_header.component';
import { TailorFooterComponent } from './components/tailor_footer/tailor_footer.component';
import { TailorStartComponent } from './components/tailor_start/tailor_start.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemSelectionComponent,
    TailorCreatorComponent,
    TailorModelComponent,
    TailorHeaderComponent,
    TailorFooterComponent,
    TailorStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
