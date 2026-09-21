import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc10',
  standalone: false,
  templateUrl: './exerc10.html',
  styleUrl: './exerc10.scss',
})
export class Exerc10 {
  usuario = '';
  senha = '';
  logado = false; 
  entrar() { this.logado = true; }
}
