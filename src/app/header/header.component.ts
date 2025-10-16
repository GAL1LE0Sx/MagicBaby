import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import feather from 'feather-icons';
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent implements AfterViewInit {

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    feather.replace(); // inicializa os ícones
  }

  redirect(path: string) {
    this.router.navigate([`/${path}`]);
  }
}
