export interface TInstructor {
  name: string;
  image: string;
  email: string;
  number_of_class_taken: number;
  role: TRole;
}

export const TRole = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  INSTRUCTOR: 'INSTRUCTOR',
};

export type TRole = keyof typeof TRole;
