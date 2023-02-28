/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule } from '@angular/forms';
import { ValidationService } from './validation.service';

describe('Service: Validation', () => {
  let service: ValidationService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidationService, FormsModule],
    });
    service = TestBed.inject(ValidationService);
  });

  it('should ...', inject([ValidationService], (service: ValidationService) => {
    expect(service).toBeTruthy();
  }));

  it('should be a valid cpf', () => {
    const control = new FormControl('18782626022');
    const result = service.cpfValidator(control);

    expect(result).toBeNull();
  });

  it('should be a valid cpf, less than 11 digits', () => {
    const control = new FormControl('1878262602');
    const result = service.cpfValidator(control);

    expect(result).toBeNull();
  });

  it('should be a valid cpf, less than 0 digits', () => {
    const control = new FormControl('');
    const result = service.cpfValidator(control);

    expect(result).toBeNull();
  });

  it('should be a invalid cpf, equal numbers', () => {
    const control = new FormControl('111111111111');
    const result = service.cpfValidator(control);

    expect(result).toEqual({ invalid: true });
  });

  it('should be a invalid cpf, char 0', () => {
    const control = new FormControl('111451111122');
    const result = service.cpfValidator(control);

    expect(result).toEqual({ invalid: true });
  });

  it('should be a invalid cpf, char 1', () => {
    const control = new FormControl('3414193000000');
    const result = service.cpfValidator(control);

    expect(result).toEqual({ invalid: true });
  });
  it('should be a invalid cpf (sum % 11 < 2)', () => {
    const control = new FormControl('00000000002');
    const result = service.cpfValidator(control);

    expect(result).toEqual({ invalid: true });
  });
});
