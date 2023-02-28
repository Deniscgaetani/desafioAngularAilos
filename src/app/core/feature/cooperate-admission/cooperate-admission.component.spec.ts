/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CooperateAdmissionComponent } from './cooperate-admission.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { SearchCooperateComponent } from './components/search-cooperate/search-cooperate.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CooperateAdmissionComponent', () => {
  let component: CooperateAdmissionComponent;
  let fixture: ComponentFixture<CooperateAdmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CooperateAdmissionComponent, SearchCooperateComponent],
      imports: [
        RouterTestingModule,
        BrowserTestingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatStepperModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperateAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
