import { Component, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { DisplayCount } from './display-count/display-count';
import { ControlCount } from './control-count/control-count';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Products } from './services/products';

@Component({
  imports: [CommonModule, RouterOutlet, RouterLink, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  productData = signal<any[]>([]);
  constructor(private productService:Products){ }

  ngOnInit(){
    this.productService.getProducts().subscribe((data) => this.productData.set(data.products))
  }
}