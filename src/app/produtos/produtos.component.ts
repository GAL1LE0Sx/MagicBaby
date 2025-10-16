import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterModule } from '@angular/router';
import feather from 'feather-icons';
import { PedidosService, Produto } from '../pedidos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  standalone: true,
  imports: [CommonModule, SidebarComponent, RouterModule]
})
export class ProdutosComponent implements AfterViewInit {

  pedidos: Produto[] = [];
 
 guias = [
  {
    titulo: 'Guia Completo da Gravidez',
    descricao: 'Desenvolvimento mês a mês, nutrição e cuidados.',
    imagem: 'assets/Locais/img/gestante.jpeg',
    linkDownload: 'assets/Locais/guias/guia-gravidez.pdf.pdf'
  },
  {
    titulo: 'Manual de Cuidados com o Recém-Nascido',
    descricao: 'Informações essenciais para os 3 primeiros meses.',
    imagem: 'assets/Locais/img/recem-nascido.jpg',
    linkDownload: 'assets/Locais/guias/cuidados-recem-nascido.pdf.pdf'
    },
  {
    titulo: 'Manual de Exercícios para Gestantes',
    descricao: 'Informações essenciais para os 3 primeiros meses.',
    imagem: 'assets/Locais/img/gestante-exercicio.jpeg',
    linkDownload: 'assets/Locais/guias/gestante-exercicio.pdf'
  }
];

  constructor(private pedidosService: PedidosService) {}

  ngAfterViewInit(): void {
    feather.replace();

    // Assina os pedidos para atualização reativa
    this.pedidosService.pedidos$.subscribe(pedidos => {
      this.pedidos = pedidos;
    });
  }

  removerPedido(produto: Produto) {
    this.pedidosService.removerPedido(produto);
  }

  getTotalPedidos(): number {
    return this.pedidos.reduce((total, p) => total + p.preco, 0);
  }
}
