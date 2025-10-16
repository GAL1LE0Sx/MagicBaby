// exercicio.component.ts
import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import feather from 'feather-icons';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-exercicio',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './exercicio.component.html',
  styleUrls: ['./exercicio.component.css']
})
export class ExercicioComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    feather.replace();
  }
}
