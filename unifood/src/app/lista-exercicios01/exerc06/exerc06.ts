import { Component } from '@angular/core';

@Component({
  selector: 'app-exerc06',
  standalone: false,
  templateUrl: './exerc06.html',
  styleUrl: './exerc06.scss',
})
export class Exerc06 {
  quantidade = 0;
  incrementar() { this.quantidade++; }
  decrementar() { if (this.quantidade > 0) { this.quantidade--; } }

}
