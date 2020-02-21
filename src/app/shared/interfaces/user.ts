import { ICourse } from './course';

export interface IUser {
    _id:string,
    username: string;
    password: string;
    courses:[ICourse];
  }