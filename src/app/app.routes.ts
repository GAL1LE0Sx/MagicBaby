import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CommitmentComponent } from './commitment/commitment.component';
import { WhyHiresUsComponent } from './why-hires-us/why-hires-us.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { InformationComponent } from './informacoes/informacoes.component';
import { ComprasComponent } from './compras/compras.component';
import { SuporteComponent } from './suporte/suporte.component';
import { ClienteAreaComponent } from './cliente-area/cliente-area.component';
import { SenhaComponent } from './senha/senha.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NutricaoComponent } from './nutricao/nutricao.component';
import { ExercicioComponent } from './exercicio/exercicio.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { ContateNosComponent } from './contate-nos/contate-nos.component';
import { AreaClienteComponent } from './area-cliente/area-cliente.component';
import { SaberMaisComponent } from './saber-mais/saber-mais.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'commitment', component: CommitmentComponent },
  { path: 'why-hires-us', component: WhyHiresUsComponent },
  { path: 'senha', component: SenhaComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'nutricao', component: NutricaoComponent },
  { path: 'exercicio', component: ExercicioComponent },
  { path: 'medicamentos', component: MedicamentosComponent },
  { path: 'contate-nos', component: ContateNosComponent },
  { path: 'saber-mais', component: SaberMaisComponent },
  
  

  // Dashboard como layout da área do cliente
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      // Página padrão ao acessar /dashboard
      { path: '', redirectTo: 'cliente-area', pathMatch: 'full' },
      { path: 'produtos', component: ProdutosComponent },
      { path: 'informacoes', component: InformationComponent },
      { path: 'compras', component: ComprasComponent },
      { path: 'suporte', component: SuporteComponent },
      { path: 'cliente-area', component: ClienteAreaComponent },
      { path: 'area-cliente', component: AreaClienteComponent }
    ]
  },

  // Rota catch-all para redirecionar páginas inexistentes
  { path: '**', redirectTo: 'home' }
];
