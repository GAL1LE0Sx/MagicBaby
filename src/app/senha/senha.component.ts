import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-senha',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HeaderComponent],
  templateUrl: './senha.component.html',
  styleUrls: ['./senha.component.css']
})
export class SenhaComponent {
  email: string = '';
  mensagemSucesso: string = '';
  mensagemErro: string = '';

  constructor(private router: Router) {}

  enviarEmail() {
    if (this.email.trim() === '') {
      this.mensagemErro = 'Por favor, insira seu e-mail.';
      this.mensagemSucesso = '';
      return;
    }

    // Simulação de envio de email (substituir por backend real)
    this.mensagemSucesso = `Um link de redefinição de senha foi enviado para ${this.email}.`;
    this.mensagemErro = '';
    this.email = '';
  }

  voltarLogin() {
    this.router.navigate(['/home']);
  }
}
