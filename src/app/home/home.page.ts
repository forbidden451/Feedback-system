import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  darkMode: boolean =true
  constructor() {}



onchange() {

  this.darkMode=!this.darkMode;
  document.body.classList.toggle('dark');
}

}