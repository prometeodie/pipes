import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

//modulo personalizado
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el Local de la app
import localeEsAr from '@angular/common/locales/es-AR';
import localeFr from '@angular/common/locales/fr';
//con esto registro el español de manera local y se puede usar en pipes de forma individual
// cada idioma se debe resgistrar excepto el ingles (EN)
import{ registerLocaleData } from '@angular/common';
registerLocaleData(localeEsAr);
registerLocaleData(localeFr);





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  //estoy registrando el español de forma global
  providers: [
    {provide: LOCALE_ID, useValue:'es-AR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
