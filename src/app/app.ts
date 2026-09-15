import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';

@Component({
  imports: [//RouterOutlet,
     Profile],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
  count = 0;
  callMe(){
    alert("Hello Angular");
  }

  counter(action:string){
    if (action == 'minus') {
      this.count > 0 && this.count--;
    } else {
      this.count++;
    }
    console.log(this.count);
  }
}
