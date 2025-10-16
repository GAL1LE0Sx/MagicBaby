import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { Router } from '@angular/router';
import { RouterLink } from "@angular/router";
import feather from 'feather-icons';

export interface Produto {
  nome: string;
  descricao: string;
  imagem: string;
  preco: number;
  opcao?: string[];
}

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [CommonModule, SidebarComponent, RouterLink],
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements AfterViewInit {

  produtos: Produto[] = [
    { nome: 'Macacões de Algodão Orgânico', descricao: 'Pacote com 5 unidades, macio e respirável, em várias cores', imagem: 'assets/Locais/compras/macacao-algodao.png', preco: 24.99, opcao: ['Recém-nascido', '0-3M', '3-6M'] },
    { nome: 'Cobertores Swaddle', descricao: 'Conjunto de 3 faixas de musselina para maior conforto', imagem: 'assets/Locais/compras/cobertores-swaddle.webp', preco: 32.99, opcao: ['Conjunto Pastel', 'Conjunto Neutro', 'Estampa Animal'] },
    { nome: 'Conjunto de Mamadeiras', descricao: 'Pacote com 6 mamadeiras anticólicas com bicos', imagem:  'assets/Locais/compras/conjunto-mamadeiras.webp', preco: 29.99, opcao: ['4oz', '8oz', 'Pacote Combo'] },
    { nome: 'Cadeirinha de Descanso', descricao: 'Cadeirinha portátil para o bebê relaxar com segurança', imagem: 'assets/Locais/compras/tapete-atividades.webp', preco: 149.99, opcao: ['Azul', 'Rosa', 'Cinza'] },
    { nome: 'Tapete de Atividades', descricao: 'Tapete lúdico com cores e brinquedos pendurados para estimular o bebê', imagem: 'assets/Locais/compras/cadeirinha-descanso.webp', preco: 79.99, opcao: ['Colorido', 'Pastel', 'Unissex'] },
    { nome: 'Almofada de Amamentação', descricao: 'Almofada ergonômica para apoio durante a amamentação e conforto', imagem: 'assets/Locais/compras/almofada-amamentacao.webp', preco: 89.99, opcao: ['Grande', 'Médio', 'Pequeno'] },
    { nome: 'Porta-Chupetas', descricao: 'Prático porta-chupetas para transportar chupetas de forma higiênica', imagem: 'assets/Locais/compras/porta-chupetas.webp', preco: 19.99, opcao: ['Azul', 'Rosa', 'Neutro'] },
    { nome: 'Sling para Bebê', descricao: 'Suporte ergonômico para carregar o bebê junto ao corpo com segurança', imagem: 'assets/Locais/compras/sling-bebe.webp', preco: 129.99, opcao: ['Algodão', 'Malha', 'Misto'] },
    { nome: 'Copo de Treinamento', descricao: 'Copo anti-vazamento ideal para a transição da mamadeira para copo', imagem: 'assets/Locais/compras/copo-treinamento.webp', preco: 24.99, opcao: ['Azul', 'Rosa', 'Verde'] }
  ];

  carrinho: Produto[] = [];
  mostrarPopup: boolean = false;
  mensagem: string = '';

  constructor(private router: Router) {}

  ngAfterViewInit() {
    feather.replace(); // Inicializa os ícones Feather
  }

  // Adiciona produto ao carrinho e mostra pop-up
  adicionarAoCarrinho(produto: Produto) {
    this.carrinho.push(produto);
    this.mensagem = `✅ ${produto.nome} adicionado ao carrinho!`;
    this.showPopup();
  }

  // Remove produto do carrinho e mostra pop-up
  removerDoCarrinho(produto: Produto) {
    const index = this.carrinho.indexOf(produto);
    if (index !== -1) {
      this.carrinho.splice(index, 1);
      this.mensagem = `❌ ${produto.nome} removido do carrinho`;
      this.showPopup();
    }
  }

  // Mostra o pop-up temporário
  private showPopup() {
    this.mostrarPopup = true;
    setTimeout(() => this.mostrarPopup = false, 2500);
  }

  // Calcula o total do carrinho
  getTotal(): number {
    return this.carrinho.reduce((total, produto) => total + produto.preco, 0);
  }

  // Finaliza a compra, salva no localStorage e redireciona
  finalizarCompra() {
    if (this.carrinho.length === 0) {
      this.mensagem = 'Seu carrinho está vazio!';
      this.showPopup();
      return;
    }

    // Recupera pedidos existentes do localStorage
    const pedidosExistentes = JSON.parse(localStorage.getItem('pedidos') || '[]');

    // Adiciona a data da compra e tamanho selecionado (opcao pode ser indefinido)
    const novosPedidos = this.carrinho.map(p => ({
      ...p,
      dataCompra: new Date().toLocaleDateString(),
      tamanho: p.opcao?.[0] || 'Padrão'
    }));

    // Salva todos os pedidos de volta
    localStorage.setItem('pedidos', JSON.stringify([...pedidosExistentes, ...novosPedidos]));

    // Limpa carrinho e exibe mensagem de sucesso
    this.carrinho = [];
    this.mensagem = 'Compra finalizada com sucesso!';
    this.showPopup();

    // Redireciona para Meus Produtos
    this.router.navigate(['/dashboard/produtos']);
  }
}
