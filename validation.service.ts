import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      'required': 'Обязательно для заполнения',
      'invalidEmailAddress': 'Введите ваш e-mail в правильном формате',
      'invalidPassword': 'Пароль должен быть не меньше 6 символов и содержать минимум одну цифру.',
      'minlength': `Минимальная длина ${validatorValue.requiredLength}`,
      'maxlength': `Максимальная длина ${validatorValue.requiredLength}`,
      'passwordMismatch': 'Пароли должны совпадать',
    };
    return config[validatorName];
  }

  static emailValidator(control) {
    if (control.value) {
      if (control.value.match('[_\\.0-9a-zA-Z-\\+]+@([0-9a-zA-Z][0-9a-zA-Z-]+\\.)+[a-zA-Z]{2,8}')) {
        return null;
      } else {
        return { 'invalidEmailAddress': true };
      }
    }
  }

  static matchPass(control): {[key: string]: boolean} {
    const password = control.get('password');
    const confirmPassword = control.get('passwordConfirm');
    return password.value === confirmPassword.value ? null : { 'passwordMismatch': true };
  }

}
