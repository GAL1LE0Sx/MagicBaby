import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-information',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.css'],
  standalone: true,
  imports: [SidebarComponent],
})
export class InformationComponent {

  toggleExpand(id: string) {
    const element = document.getElementById(id);
    if (!element) return;

    element.classList.toggle('expanded');


  }

}
