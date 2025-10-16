import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-contate-nos',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './contate-nos.component.html',
  styleUrls: ['./contate-nos.component.css']
})
export class ContateNosComponent {
  nome = '';
  email = '';
  telefone = '';
  duvida = '';
  mensagem = '';

  mostrarPopup = false;
  mensagemPopup = '';

  enviarFormulario() {
    // Validações
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    const telefoneValido = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(this.telefone);

    if (!this.nome || !this.email || !this.telefone || !this.duvida || !this.mensagem) {
      this.mensagemPopup = '⚠️ Por favor, preencha todos os campos antes de enviar.';
      this.mostrarPopupTemporario();
      return;
    }

    if (!emailValido) {
      this.mensagemPopup = '⚠️ Digite um e-mail válido.';
      this.mostrarPopupTemporario();
      return;
    }

    if (!telefoneValido) {
      this.mensagemPopup = '⚠️ Digite um telefone válido. Exemplo: (11) 98765-4321';
      this.mostrarPopupTemporario();
      return;
    }

    // Sucesso
    this.mensagemPopup = '✅ Sua mensagem foi enviada com sucesso! Aguarde nosso contato.';
    this.mostrarPopupTemporario();

    // Limpa o formulário
    this.nome = '';
    this.email = '';
    this.telefone = '';
    this.duvida = '';
    this.mensagem = '';
  }

  private mostrarPopupTemporario() {
    this.mostrarPopup = true;
    setTimeout(() => (this.mostrarPopup = false), 3000);
  }
}
