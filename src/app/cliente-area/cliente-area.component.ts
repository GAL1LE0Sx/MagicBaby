import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as feather from 'feather-icons';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cliente-area',
  standalone: true,
  imports: [CommonModule, SidebarComponent, RouterModule],
  templateUrl: './cliente-area.component.html',
  styleUrls: ['./cliente-area.component.css']
})
export class ClienteAreaComponent implements AfterViewInit {

  ngAfterViewInit() {
    feather.replace(); // Renderiza os ícones feather
  }
}
