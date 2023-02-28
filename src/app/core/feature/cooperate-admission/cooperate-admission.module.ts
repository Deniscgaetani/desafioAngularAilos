import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CooperateAdmissionComponent } from './cooperate-admission.component';
import { CooperateAdmissionRoutingModule } from './cooperate-admission-routing.module';
import { MatStepperModule } from '@angular/material/stepper';
import { SearchCooperateComponent } from './components/search-cooperate/search-cooperate.component';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CooperateDetailsComponent } from './components/cooperate-details/cooperate-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';

@NgModule({
  imports: [
    CommonModule,
    CooperateAdmissionRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    NgDynamicBreadcrumbModule,
  ],
  declarations: [
    CooperateAdmissionComponent,
    SearchCooperateComponent,
    CooperateDetailsComponent,
  ],
})
export class CooperateAdmissionModule {}
