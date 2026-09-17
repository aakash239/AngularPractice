import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { DisplayCount } from './display-count/display-count';
import { ControlCount } from './control-count/control-count';

@Component({
  imports: [Child, DisplayCount, ControlCount],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  users = signal(["Hello", "Hi", "How", "Are", "You?"]);
  newUser: WritableSignal<string> = signal("");
  selectedWord = signal('');

  addNewUser() {
    this.users.update((data) => [...data, this.newUser()]);
    this.newUser.set("");
  }

  selectedWordFunc(word: string) {
    console.log(word);
    this.selectedWord.set(word);
  }

  deleteWordFunc(word: string) {
     this.users.update(data => data.filter(item => item!=word))
  }
}