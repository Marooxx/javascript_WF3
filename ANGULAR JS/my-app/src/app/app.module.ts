import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// on importe notre 1er module
import{ProductComponent} from './product.component';

@NgModule({//décorateur qui va définir un objet(varibles et fonctions)
  declarations: [
    AppComponent,
    ProductComponent// on ajoute le non de notre app dans "déclarations"
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,ProductComponent]
})
export class AppModule { }
