import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import * as feather from 'feather-icons';
import { filter } from 'rxjs/operators';
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'MagicBaby'; // Para compatibilidade com o spec.ts
  showPublicHeader: boolean = true;

  // Rotas públicas onde o header deve aparecer
  publicRoutes: string[] = [
    '/home',
    '/about',
    '/commitment',
    '/why-hires-us',
    // Adicione outras páginas públicas aqui
  ];

  constructor(private router: Router) {
    // Atualiza header a cada navegação
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateHeaderVisibility(event.urlAfterRedirects);
      });

    // Garantia de atualização inicial
    setTimeout(() => {
      this.updateHeaderVisibility(this.router.url);
    }, 0);
  }

  private updateHeaderVisibility(url: string) {
    this.showPublicHeader = this.publicRoutes.some(route => url.startsWith(route));
  }

  ngAfterViewInit(): void {
    this.replaceFeatherIcons();

    // Atualiza ícones a cada navegação
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.replaceFeatherIcons();
      }
    });
  }

  private replaceFeatherIcons() {
    if (feather && (feather as any).replace) {
      (feather as any).replace();
    }
  }
}
