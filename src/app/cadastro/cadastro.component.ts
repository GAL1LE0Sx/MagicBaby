import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HeaderComponent],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nome = '';
  email = '';
  senha = '';
  confirmaSenha = '';
  mensagemErro = '';
  mensagemSucesso = '';

  onSubmit(form: NgForm) {
    this.mensagemErro = '';
    this.mensagemSucesso = '';

    // Validação do formulário
    if (!form.valid) {
      this.mensagemErro = 'Preencha todos os campos obrigatórios.';
      return;
    }

    // Validação do e-mail
    if (!this.validarEmail(this.email)) {
      this.mensagemErro = 'Digite um e-mail válido.';
      return;
    }

    // Validação da senha
    if (this.senha.length < 6) {
      this.mensagemErro = 'A senha deve ter pelo menos 6 caracteres.';
      return;
    }

    // Validação da confirmação
    if (this.senha !== this.confirmaSenha) {
      this.mensagemErro = 'As senhas não coincidem.';
      return;
    }

    // Cadastro válido: mensagem de sucesso com pop-up
    this.mensagemSucesso = `Parabéns, ${this.nome}! Cadastro realizado com sucesso!`;

    // Reseta o formulário
    form.resetForm();

    // Fecha o pop-up automaticamente depois de 3 segundos
    setTimeout(() => {
      this.mensagemSucesso = '';
    }, 3000);
  }

  validarEmail(email: string): boolean {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email.trim());
  }
}
