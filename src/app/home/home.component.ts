import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router'; // IMPORTANTE para routerLink

declare const feather: any; // Para Feather Icons

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SidebarComponent, RouterModule]
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Ativa os ícones feather depois que o template renderiza
    if (typeof feather !== 'undefined') {
      feather.replace();
    }

    const loginForm = document.getElementById('loginForm') as HTMLFormElement;
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const login = (loginForm.querySelector('input[type="text"]') as HTMLInputElement).value;
        const password = (loginForm.querySelector('input[type="password"]') as HTMLInputElement).value;

        if (login === 'admin' && password === '123456') {
          // Redireciona para o dashboard via Angular Router
          window.location.href = '/dashboard'; 
          // Se quiser usar Angular Router, injete Router no constructor e use:
          // this.router.navigate(['/dashboard']);
        } else {
          alert('Credenciais inválidas. Use login: admin e senha: 123456');
        }
      });
    }
  }
}
