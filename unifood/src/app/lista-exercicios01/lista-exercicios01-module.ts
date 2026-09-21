import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaExercicios01RoutingModule } from './lista-exercicios01-routing-module';
import { Exer01 } from './exerc01/exer01';

@NgModule({
  declarations: [Exer01],
  imports: [CommonModule, ListaExercicios01RoutingModule],
})
export class ListaExercicios01Module {}
