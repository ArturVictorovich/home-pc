interface IForm {
  login: string;
  password: string;
}
interface LoginForm {
  isValid: boolean;
  errorMsg: string;
}
interface PasswordForm extends Omit<LoginForm, 'errorMsg'> {}
type ValidForm = Record<keyof IForm, LoginForm | PasswordForm>;

// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации

const validationData: ValidForm = {
  login: { isValid: false, errorMsg: 'At least 3 characters' },
  password: { isValid: true },
};
