import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Carte de visite';
  test = false;

  constructor() {
    setTimeout(
      ()=> {
        this.test = true;
      }, 1500
    );

  }
}
