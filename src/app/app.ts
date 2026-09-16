import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { Child } from './child/child';

@Component({
  imports: [//RouterOutlet,
     Profile, Child],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    userName=signal("Hello")
}
