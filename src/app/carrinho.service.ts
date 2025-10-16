import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private carrinhoItems: Produto[] = [];
  private carrinhoSubject = new BehaviorSubject<Produto[]>([]);

  carrinho$ = this.carrinhoSubject.asObservable();

  adicionarProduto(produto: Produto) {
    this.carrinhoItems.push(produto);
    this.carrinhoSubject.next(this.carrinhoItems);
  }

  listarCarrinho(): Produto[] {
    return this.carrinhoItems;
  }

  limparCarrinho() {
    this.carrinhoItems = [];
    this.carrinhoSubject.next(this.carrinhoItems);
  }
}
