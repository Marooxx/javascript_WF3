import { Component } from '@angular/core';


// Décorateur : partie html,création d'objet
@Component({
    selector:'nav-bar',
    template:
    `
    <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">
        {{logo}}
      </a>
    </div>
  </div>
</nav>
`
})

// Deuxième partie : données et fonctions,création de la classe
export class NavbarComponent {
    logo = 'Adressbook App';
}
