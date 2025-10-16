import { Component, AfterViewInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    // Substitui os ícones no footer após a view ser carregada
    feather.replace();
  }
}
