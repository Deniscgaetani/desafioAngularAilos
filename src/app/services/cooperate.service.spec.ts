/* tslint:disable:no-unused-variable */

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CooperateService } from './cooperate.service';
import { Cooperate } from '../model/cooperate.model';

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

const mockResponse: Cooperate = {
  id: 6,
  cpf: '66755080080',
  name: 'Godofedro Nunes',
  situation: 'Regular',
  accountNumber: '0328856-0',
  currentAccount: '0328856-0',
};

describe('Service: Cooperate', () => {
  let httpClient: HttpClient;
  let service: CooperateService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CooperateService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getCooperateByCpf', () => {
    it('should get cooperate by cpf', () => {
      spyOn(httpClient, 'get').and.returnValue(of(mockRequest));
      service.getCooperateByCpf('66755080080').subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });
    });

    it('should fail to fetch cpf', () => {
      spyOn(httpClient, 'get').and.returnValue(of({}));
      service.getCooperateByCpf('72594287672').subscribe((response) => {
        expect(response).toBeUndefined();
      });
    });
  });
});
