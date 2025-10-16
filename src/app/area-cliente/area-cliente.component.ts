import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // *ngIf, *ngFor
import { FormsModule } from '@angular/forms';   // ngModel
import { RouterModule } from '@angular/router'; // routerLink
import { SidebarComponent } from '../sidebar/sidebar.component';
import feather from 'feather-icons';

@Component({
  selector: 'app-area-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, SidebarComponent],
  templateUrl: './area-cliente.component.html',
  styleUrls: ['./area-cliente.component.css']
})
export class AreaClienteComponent implements OnInit {
  temaEscuro = false;

  nome = '';
  sobrenome = '';
  nomeFilho = '';
  sexoFilho = '';
  dataNascimentoFilho: string | null = null;
  idadeFilho: number | null = null;
  fotoPerfil: string | null = null;

  mostrarPopup = false;
  mensagem = '';

  ngOnInit() {
    feather.replace();
  }

  alternarTema() {
    this.temaEscuro = !this.temaEscuro;
    setTimeout(() => feather.replace(), 0);
  }

  alterarFoto(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => (this.fotoPerfil = reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  calcularIdade() {
    if (!this.dataNascimentoFilho) return;
    const nascimento = new Date(this.dataNascimentoFilho);
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) idade--;
    this.idadeFilho = idade;
  }

  salvarAlteracoes() {
    if (!this.nome || !this.sobrenome || !this.nomeFilho || !this.sexoFilho || !this.dataNascimentoFilho) {
      this.exibirMensagem('Por favor, preencha todos os campos.');
      return;
    }
    this.exibirMensagem('Alterações salvas com sucesso!');
  }

  private exibirMensagem(texto: string) {
    this.mensagem = texto;
    this.mostrarPopup = true;
    setTimeout(() => (this.mostrarPopup = false), 3000);
  }
}
