import { User } from '../types/user';

export const userModel = (): User => {
  return {
    alias: '',
    firstName: '',
    lastName: '',
    email: '',
    secret: '',
  }
}
