import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Produto {
  nome: string;
  preco: number;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 max-w-2xl mx-auto">
      <h1 class="text-2xl font-bold mb-4">Checkout</h1>
      <div *ngIf="carrinho.length > 0; else vazio">
        <div *ngFor="let item of carrinho" class="flex justify-between border-b py-2">
          <span>{{ item.nome }}</span>
          <span>R$ {{ item.preco | number:'1.2-2' }}</span>
        </div>

        <div class="flex justify-between font-bold text-lg mt-4">
          <span>Total</span>
          <span>R$ {{ getTotal() | number:'1.2-2' }}</span>
        </div>

        <button 
          (click)="concluirCompra()"
          class="mt-6 w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition-colors">
          Confirmar Pedido
        </button>
      </div>

      <ng-template #vazio>
        <p>Seu carrinho está vazio.</p>
      </ng-template>
    </div>
  `
})
export class CheckoutComponent {
  carrinho: Produto[] = JSON.parse(localStorage.getItem('carrinho') || '[]');
  
  constructor(private router: Router) {}

  getTotal(): number {
    return this.carrinho.reduce((total, p) => total + p.preco, 0);
  }

  concluirCompra() {
    // Salva os pedidos
    const pedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');
    pedidos.push(...this.carrinho);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));

    // Limpa o carrinho
    localStorage.setItem('carrinho', JSON.stringify([]));
    
    alert('Pedido concluído com sucesso!');
    this.router.navigate(['/meus-pedidos']);
  }
}
