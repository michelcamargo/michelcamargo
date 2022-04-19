import { User } from '../types/user';

export const userModel = (id: number): User => {
  return {
    id: id,
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  }
}
