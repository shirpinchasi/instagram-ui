import * as Yup from 'yup';
import config from '../config/index';


export const RegisterSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'username is too short')
      .max(16, 'username is too long')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Too Short!')
      .max(16, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    agreeTerms: Yup.boolean()
    .oneOf([true], "You must agree to terms")
  });

  const memo = {
    email: {},
    username: {}
  };
  
  async function isUnique(field, value) {
    if (memo[field].hasOwnProperty(value)) {
      return memo[field][value];
    }
    const res = await fetch(`${config.apiUrl}/users/check?${field}=${value}`);
    memo[field][value] = !(await res.json());
    return memo[field][value];
  }