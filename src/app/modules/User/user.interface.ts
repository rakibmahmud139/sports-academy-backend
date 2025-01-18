import { TRole } from '../Instructors/instructors.interface';

export interface TUser {
  email: string;
  password: string;
  role: TRole;
}
