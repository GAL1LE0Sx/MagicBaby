// medicamentos.component.ts
import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import feather from 'feather-icons';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-medicamentos',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    feather.replace();
  }
}
