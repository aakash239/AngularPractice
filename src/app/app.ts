import { Component, signal, WritableSignal } from '@angular/core';
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
    users=signal(["Hello", "Hi", "How", "Are", "You?"]);
    newUser:WritableSignal<string> = signal("");

    addNewUser(){
      this.users.update((data) => [...data, this.newUser()]);
      this.newUser.set("");
    }
}
