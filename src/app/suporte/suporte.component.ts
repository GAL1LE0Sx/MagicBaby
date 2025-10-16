import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import feather from 'feather-icons';

@Component({
  selector: 'app-suporte',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './suporte.component.html',
  styleUrls: ['./suporte.component.css']
})
export class SuporteComponent implements AfterViewInit {

  // Campos do formulário
  nome = '';
  sobrenome = '';
  email = '';
  assunto = '';
  pergunta = '';

  // Controle de mensagens
  mostrarPopup = false;
  mensagem = '';
  tipoMensagem: 'erro' | 'sucesso' = 'sucesso';

  ngAfterViewInit(): void {
    feather.replace();
  }

  enviarPergunta() {

    // Verifica se todos os campos estão preenchidos
    if (!this.nome.trim() || !this.sobrenome.trim() || !this.email.trim() || !this.assunto.trim() || !this.pergunta.trim()) {
      this.mostrarPopupMensagem('Por favor, preencha todos os campos antes de enviar.', 'erro');
      return;
    }

    // Validação simples do e-mail
    if (!this.validarEmail(this.email)) {
      this.mostrarPopupMensagem('Digite um e-mail válido.', 'erro');
      return;
    }

    // Se tudo estiver ok, mostra a mensagem de sucesso
    this.mostrarPopupMensagem(`✅ Sua pergunta foi recebida com sucesso, ${this.nome}! Aguarde nosso contato.`, 'sucesso');

    // Limpa os campos
    this.nome = '';
    this.sobrenome = '';
    this.email = '';
    this.assunto = '';
    this.pergunta = '';
  }

  mostrarPopupMensagem(msg: string, tipo: 'erro' | 'sucesso') {
    this.mensagem = msg;
    this.tipoMensagem = tipo;
    this.mostrarPopup = true;

    // Fecha popup após 3 segundos
    setTimeout(() => this.mostrarPopup = false, 3000);
  }

  validarEmail(email: string): boolean {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email.trim());
  }
}
