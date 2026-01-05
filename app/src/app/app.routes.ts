import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './services/auth.guard';
import { ClientesComponent } from './clientes/clientes.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { PagamentosComponent } from './pagamentos/pagamentos.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: DashboardHomeComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'relatorios', component: RelatoriosComponent },
      { path: 'pagamentos', component: PagamentosComponent },
    ]
  },
  { path: '**', redirectTo: 'login' }
];