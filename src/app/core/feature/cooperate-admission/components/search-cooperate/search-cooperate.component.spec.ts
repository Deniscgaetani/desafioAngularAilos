/* tslint:disable:no-unused-variable */
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { SearchCooperateComponent } from './search-cooperate.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { CooperateService } from 'src/app/services/cooperate.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

const mockRequest: any = [
  {
    id: 6,
    cpf: '66755080080',
    name: 'Godofedro Nunes',
    situation: 'Regular',
    accountNumber: '0328856-0',
    currentAccount: '0328856-0',
  },
];

const mockRequestEmpty: any = undefined;
describe('SearchCooperateComponent', () => {
  let component: SearchCooperateComponent;
  let fixture: ComponentFixture<SearchCooperateComponent>;
  let mockService: jasmine.SpyObj<CooperateService>;

  beforeEach(async(() => {
    mockService = jasmine.createSpyObj('CooperateService', [
      'getCooperateByCpf',
    ]);
    TestBed.configureTestingModule({
      declarations: [SearchCooperateComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [{ provide: CooperateService, useValue: mockService }],
    }).compileComponents();
    TestBed.inject(HttpClient);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCooperateComponent);
    component = fixture.componentInstance;
    component.cooperateForm = new FormGroup({
      cpf: new FormControl(['66755080080']),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be use #validateForm', () => {
    component.validateForm();
    expect(component.invalidFormCooperate).toBeFalsy();
  });

  it('should be use #findCooperate', fakeAsync(() => {
    mockService.getCooperateByCpf.and.returnValue(of(mockRequest));
    fixture.detectChanges();
    const usersSpy = spyOn(component, 'findCooperate').and.callThrough();
    component.findCooperate();
    tick(1500);
    expect(usersSpy).toHaveBeenCalled();
  }));

  it('should be use #findCooperate, cpf not exist', fakeAsync(() => {
    mockService.getCooperateByCpf.and.returnValue(of(mockRequestEmpty));
    fixture.detectChanges();
    const usersSpy = spyOn(component, 'findCooperate').and.callThrough();
    component.findCooperate();
    tick(1500);
    expect(usersSpy).toHaveBeenCalled();
  }));

  it('should be use #findCooperate, HttpErrorResponse', fakeAsync(() => {
    mockService.getCooperateByCpf.and.returnValue(throwError({}));
    fixture.detectChanges();
    const usersSpy = spyOn(component, 'findCooperate').and.callThrough();
    component.findCooperate();
    tick(1500);
    expect(usersSpy).toHaveBeenCalled();
  }));

  it('should be use #findCooperate, cooperateForm invalid', () => {
    component.cooperateForm.controls['cpf'].setValue('');
    fixture.detectChanges();
    component.findCooperate();
    expect(component.invalidFormCooperate).toBeTruthy();
  });
});
