import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CooperateService } from 'src/app/services/cooperate.service';
import { Cooperate } from 'src/app/model/cooperate.model';

@Component({
  selector: 'app-search-cooperate',
  templateUrl: './search-cooperate.component.html',
  styleUrls: ['./search-cooperate.component.scss'],
})
export class SearchCooperateComponent implements OnInit {
  invalidSearchDetails!: boolean;
  invalidFormCooperate!: boolean;
  cooperate!: Cooperate;
  viewCooperate!: boolean;
  spinner!: boolean;

  detailsMessageError!: string;
  @Input()
  cooperateForm!: FormGroup;

  constructor(private cooperateUserService: CooperateService) {}

  ngOnInit(): void {}

  findCooperate(): void {
    if (
      this.cooperateForm.valid &&
      this.cooperateForm.controls['cpf'].value != ''
    ) {
      this.spinner = true;
      this.viewCooperate = false;
      this.invalidSearchDetails = false;
      setTimeout(() => {
        this.cooperateUserService
          .getCooperateByCpf(this.cooperateForm.controls['cpf'].value)
          .subscribe(
            (result) => {
              if (result === undefined) {
                this.detailsMessageError =
                  'Atenção, o CPF informado não foi encontrado. Por favor, verifique os números e tente novamente!';
                this.spinner = false;
                this.invalidSearchDetails = true;
              } else {
                this.cooperate = result;
                this.viewCooperate = true;
                this.spinner = false;
              }
            },
            () => {
              this.spinner = false;
              this.invalidSearchDetails = true;
              this.detailsMessageError =
                'Atenção, o serviço está indisponível no momento. Se o problema persistir entre em contato com o administrador! ';
            }
          );
      }, 1500); // apenas para dar impressão de tempo a request;
    } else {
      this.invalidFormCooperate = true;
    }
  }

  validateForm(): void {
    this.invalidFormCooperate = this.cooperateForm.controls['cpf'].invalid;
  }
}
