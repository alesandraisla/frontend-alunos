import { Injectable } from '@angular/core';
import { Notas } from './notas';

//integração com api / banco de dados 

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  notas: Notas[] = [
    { id: 1, nome: 'Yuna', nota_1: 8, nota_2: 6, nota_3: 8, nota_4: 10 }
  ];

  constructor() { }

  getAll() {
    return this.notas;
  }
}
