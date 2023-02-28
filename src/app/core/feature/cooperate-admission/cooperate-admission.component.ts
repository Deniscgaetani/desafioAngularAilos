import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation/validation.service';

@Component({
  selector: 'app-cooperate-admission',
  templateUrl: './cooperate-admission.component.html',
  styleUrls: ['./cooperate-admission.component.scss'],
})
export class CooperateAdmissionComponent implements OnInit {
  cooperateForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private validator: ValidationService
  ) {}

  ngOnInit(): void {
    this.startForm();
  }

  startForm(): void {
    this.cooperateForm = this.formBuilder.group({
      cpf: ['', this.validator.cpfValidator],
    });
  }
}
