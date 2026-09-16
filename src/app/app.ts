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
  
    handleEvent(eventName:string){
    console.log(eventName);
  }
}
