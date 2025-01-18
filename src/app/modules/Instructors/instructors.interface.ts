export interface TInstructor {
  name: string;
  image: string;
  email: string;
  number_of_class_taken: number;
  role: TRole;
  specialization: string;
  experience_years: number;
  qualification: string;
  achievements: [string];
  rating: number;
}

export const TRole = {
  ADMIN: 'ADMIN',
  STUDENT: 'STUDENT',
  INSTRUCTOR: 'INSTRUCTOR',
};

export type TRole = keyof typeof TRole;
