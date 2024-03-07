import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color: string = ''; // Variable to hold the input color

  changeBackgroundColor() {
    const inputColor = this.color.toLowerCase();
    document.body.style.backgroundColor = inputColor; // Change background color to the entered color
  }
}
