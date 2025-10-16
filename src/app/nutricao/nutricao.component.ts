import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import feather from 'feather-icons';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-nutricao',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './nutricao.component.html',
  styleUrls: ['./nutricao.component.css']
})
export class NutricaoComponent implements AfterViewInit {

  meses = [
    {
      mes: '1º Mês',
      orientacoes: [
        'Comer alimentos ricos em ácido fólico: espinafre, brócolis, feijão.',
        'Evitar alimentos crus e industrializados.',
        'Hidratação constante (água e chás leves).'
      ]
    },
    {
      mes: '2º Mês',
      orientacoes: [
        'Introduzir frutas variadas e legumes coloridos.',
        'Incluir proteínas magras: frango, peixe, ovos.',
        'Evitar excesso de cafeína.'
      ]
    },
    {
      mes: '3º Mês',
      orientacoes: [
        'Consumir fibras para reduzir prisão de ventre: aveia, linhaça, cenoura.',
        'Pequenas refeições a cada 3 horas.',
        'Continuar suplementação de vitaminas conforme orientação médica.'
      ]
    },
    {
      mes: '4º Mês',
      orientacoes: [
        'Aumentar ingestão de cálcio: leite, iogurte, queijos brancos.',
        'Comer peixes ricos em ômega-3 (sardinha, salmão).',
        'Evitar frituras e alimentos ultraprocessados.'
      ]
    },
    {
      mes: '5º Mês',
      orientacoes: [
        'Atenção à anemia: incluir carnes magras, feijão, lentilha.',
        'Manter hidratação e ingestão de frutas com vitamina C.',
        'Evitar alimentos com excesso de açúcar.'
      ]
    },
    {
      mes: '6º Mês',
      orientacoes: [
        'Aumentar consumo de fibras e água para melhorar digestão.',
        'Fracionar refeições se houver azia ou refluxo.',
        'Continuar alimentos ricos em ferro e cálcio.'
      ]
    },
    {
      mes: '7º Mês',
      orientacoes: [
        'Incluir alimentos ricos em magnésio e potássio.',
        'Evitar alimentos que causam gases ou inchaço.',
        'Manter ingestão de proteínas e vegetais variados.'
      ]
    },
    {
      mes: '8º Mês',
      orientacoes: [
        'Preferir refeições leves e frequentes.',
        'Manter boa hidratação e ingestão de frutas.',
        'Evitar sal em excesso para controlar inchaço.'
      ]
    },
    {
      mes: '9º Mês',
      orientacoes: [
        'Alimentos ricos em ferro, cálcio e proteínas magras.',
        'Frutas e vegetais frescos para digestão e vitaminas.',
        'Evitar alimentos ultraprocessados e muito condimentados.'
      ]
    }
  ];

  ngAfterViewInit(): void {
    feather.replace();
  }
}
