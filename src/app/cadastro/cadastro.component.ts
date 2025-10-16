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
  aceiteLGPD = false;
  mostrarTermos = false; // ✅ Controla o popup de termos

  onSubmit(form: NgForm) {
    this.mensagemErro = '';
    this.mensagemSucesso = '';

    if (!form.valid) {
      this.mensagemErro = 'Preencha todos os campos obrigatórios.';
      return;
    }

    if (!this.aceiteLGPD) {
      this.mensagemErro = 'É necessário aceitar os Termos de Uso e a Política de Privacidade.';
      return;
    }

    if (!this.validarEmail(this.email)) {
      this.mensagemErro = 'Digite um e-mail válido.';
      return;
    }

    if (this.senha.length < 6) {
      this.mensagemErro = 'A senha deve ter pelo menos 6 caracteres.';
      return;
    }

    if (this.senha !== this.confirmaSenha) {
      this.mensagemErro = 'As senhas não coincidem.';
      return;
    }

    this.mensagemSucesso = `Parabéns, ${this.nome}! Cadastro realizado com sucesso!`;
    form.resetForm();
    this.aceiteLGPD = false;

    setTimeout(() => {
      this.mensagemSucesso = '';
    }, 3000);
  }

  validarEmail(email: string): boolean {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email.trim());
  }

  abrirTermos() {
    this.mostrarTermos = true;
  }

  fecharTermos() {
    this.mostrarTermos = false;
  }
}
