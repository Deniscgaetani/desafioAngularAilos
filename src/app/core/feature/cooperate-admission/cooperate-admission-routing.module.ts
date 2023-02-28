import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CooperateAdmissionComponent } from './cooperate-admission.component';

const routes: Routes = [
  {
    path: '',
    component: CooperateAdmissionComponent,
    data: {
      title: 'Ailos',
      breadcrumb: [
        {
          label: 'Cadastro',
          url: '/',
        },
        {
          label: 'Admissão do Cooperado',
          url: '/',
        },
        {
          label: 'Nova Admissão de Cooperado',
          url: '',
        },
      ],
    },
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CooperateAdmissionRoutingModule {}
