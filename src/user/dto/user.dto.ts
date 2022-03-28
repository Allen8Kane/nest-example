import { Min, Max, MinLength, MaxLength } from 'class-validator';
import user from '../user.validation';

export class User {
  @MinLength(user.firstName.MinLength)
  @MaxLength(user.firstName.MaxLength)
  firstName: string;
  @Min(user.salary.Min)
  @Max(user.salary.Max)
  salary: number;
}