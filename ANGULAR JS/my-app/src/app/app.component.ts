import { Component } from '@angular/core';
//décorateur
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//classe
export class AppComponent {
  title = 'app works!';
  direBonjour = function(){
      alert('hello');
  }
}
