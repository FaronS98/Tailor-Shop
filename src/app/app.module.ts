import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemSelectionComponent } from './components/item-selection/item-selection.component';
import { TailorCreatorComponent } from './components/tailor-creator/tailor-creator.component';
import { TailorModelComponent } from './components/tailor-model/tailor-model.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemSelectionComponent,
    TailorCreatorComponent,
    TailorModelComponent
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
