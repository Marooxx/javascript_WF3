import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import {contactFormcomponent} from'./contactForm.component';

@NgModule({
  declarations: [
      // on ajoute le nom de la classe de notre composant
    AppComponent,
    NavbarComponent,
    contactFormcomponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
