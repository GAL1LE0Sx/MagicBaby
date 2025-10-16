import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import feather from 'feather-icons';
import { HeaderComponent } from "../header/header.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-saber-mais',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  templateUrl: './saber-mais.component.html',
  styleUrls: ['./saber-mais.component.css']
})
export class SaberMaisComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    feather.replace();
  }

  timelineSteps = [
    { etapa: 'Descoberta', descricao: 'Identificação da gravidez e primeiras orientações.', icone: 'search', cor: 'bg-pink-200' },
    { etapa: 'Cuidados na Gravidez', descricao: 'Alimentação, exercícios e saúde mental.', icone: 'heart', cor: 'bg-blue-200' },
    { etapa: 'Pré-natal', descricao: 'Consultas, exames e planejamento do parto.', icone: 'clipboard', cor: 'bg-green-200' },
    { etapa: 'Nascimento', descricao: 'Recebendo o bebê e primeiros cuidados.', icone: 'gift', cor: 'bg-yellow-200' },
    { etapa: 'Pós-parto', descricao: 'Ajustes, alimentação e recuperação.', icone: 'activity', cor: 'bg-purple-200' }
  ];

  dicasRapidas = [
    { titulo: 'Alimentação saudável', descricao: 'Inclua frutas, vegetais e proteínas variadas diariamente.', icone: 'coffee', cor: 'bg-pink-100' },
    { titulo: 'Rotina de sono', descricao: 'Mantenha horários regulares e ambiente tranquilo para o bebê.', icone: 'moon', cor: 'bg-blue-100' },
    { titulo: 'Exercícios leves', descricao: 'Caminhadas e alongamentos ajudam no bem-estar da mãe.', icone: 'activity', cor: 'bg-green-100' },
    { titulo: 'Hidratação', descricao: 'Beber água suficiente para manter o corpo saudável.', icone: 'droplet', cor: 'bg-yellow-100' }
  ];

  depoimentos = [
    { nome: 'Ana P.', texto: 'Com a MagicBaby, cada etapa da minha gravidez foi mais tranquila!', icone: 'smile' },
    { nome: 'Carlos M.', texto: 'Aprendi dicas práticas que facilitaram muito meus dias com o bebê.', icone: 'thumbs-up' },
    { nome: 'Larissa S.', texto: 'O conteúdo é claro, confiável e muito útil para novos pais.', icone: 'heart' }
  ];
}
