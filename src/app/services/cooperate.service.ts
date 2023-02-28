import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cooperate } from '../model/cooperate.model';

@Injectable({
  providedIn: 'root',
})
export class CooperateService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000/cooperate';

  getCooperateByCpf(cpf: string): Observable<Cooperate> {
    return this.http.get<Cooperate>(`${this.baseUrl}?cpf=${cpf}`).pipe(
      map((response: any) => {
        return response[0];
      })
    );
  }
}
