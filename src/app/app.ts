import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BibliotecaFormComponent } from './components/bibliotecaformulario/biblioteca';
import { BibliotecaTableComponent } from './components/bibliotecatabla/bibliotecatable';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BibliotecaFormComponent, BibliotecaTableComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}