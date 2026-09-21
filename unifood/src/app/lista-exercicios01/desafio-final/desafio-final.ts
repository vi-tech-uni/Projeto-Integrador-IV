import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio-final',
  standalone: false,
  templateUrl: './desafio-final.html',
  styleUrl: './desafio-final.scss',
})
export class DesafioFinal {
  nomeAluno = '';
  quantidadeDisciplinas = 1; 
  mensagem = '';
  aumentar() { this.quantidadeDisciplinas++; } diminuir() { if (this.quantidadeDisciplinas > 1) { this.quantidadeDisciplinas--; } } realizarMatricula() { this.mensagem = `Matrícula realizada: ${this.nomeAluno}, ${this.quantidadeDisciplinas} disciplina(s)`; }
}
