import { Component, AfterViewInit } from '@angular/core';
import * as feather from 'feather-icons';
import { HeaderComponent } from "../header/header.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-why-hires-us',
  templateUrl: './why-hires-us.component.html',
  styleUrls: ['./why-hires-us.component.css'],
  imports: [HeaderComponent, RouterModule]
})
export class WhyHiresUsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Substitui os <i data-feather="..."> por SVGs após o template renderizar
    if (feather && (feather as any).replace) {
      (feather as any).replace({ 'stroke-width': 1.5 });
    }
  }
}
