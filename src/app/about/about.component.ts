import { Component, AfterViewInit } from '@angular/core';
import * as feather from 'feather-icons';
import { HeaderComponent } from "../header/header.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [HeaderComponent, RouterModule],
})
export class AboutComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    feather.replace(); // inicializa os ícones
  }

}
