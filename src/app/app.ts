import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';

@Component({
  imports: [Child],
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