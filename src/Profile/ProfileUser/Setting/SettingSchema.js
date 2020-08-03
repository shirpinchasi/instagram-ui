import * as Yup from 'yup';
import { string } from 'prop-types';



export const SettingSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'username is too short')
      .max(16, 'username is too long')
      .required('Required'),
    avatar: Yup.string(),
    bio: Yup.string()
      .max(30)
  });