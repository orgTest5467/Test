import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TireComponent } from './tire/tire.component';
import {HttpClientModule} from '@angular/common/http'
import { TireReducer } from './store/reducers/tiredata.reducer';
import { ShoppingEffects } from './store/effects/tiredata.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    TireComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({shopping: TireReducer}),
    EffectsModule.forRoot([ShoppingEffects]),
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
