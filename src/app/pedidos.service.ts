import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Produto {
  nome: string;
  descricao?: string;
  tamanho?: string;
  preco: number;
  imagem: string;
  dataCompra?: string;
  opcao?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private pedidosSubject = new BehaviorSubject<Produto[]>(this.carregarPedidos());
  pedidos$ = this.pedidosSubject.asObservable();

  constructor() {}

  private carregarPedidos(): Produto[] {
    const pedidos = localStorage.getItem('pedidos');
    return pedidos ? JSON.parse(pedidos) : [];
  }

  adicionarPedidos(novos: Produto[]) {
    const atuais = this.pedidosSubject.value;
    const todos = [...atuais, ...novos];
    localStorage.setItem('pedidos', JSON.stringify(todos));
    this.pedidosSubject.next(todos);
  }

  removerPedido(produto: Produto) {
    const filtrados = this.pedidosSubject.value.filter(
      p => !(p.nome === produto.nome && p.dataCompra === produto.dataCompra)
    );
    localStorage.setItem('pedidos', JSON.stringify(filtrados));
    this.pedidosSubject.next(filtrados);
  }

  limparPedidos() {
    localStorage.setItem('pedidos', '[]');
    this.pedidosSubject.next([]);
  }
}
