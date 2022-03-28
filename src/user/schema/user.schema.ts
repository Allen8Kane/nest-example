import { ApiProperty } from '@nestjs/swagger';
import user from '../user.validation';

export class User {
  @ApiProperty({
    description: `User first name`,
    example: 'Alex',
    minLength: user.firstName.MinLength,
    maxLength: user.firstName.MaxLength,
    required: true,
  })
  firstName: string;
  @ApiProperty({
    description: `User salary`,
    example: '300',
    minimum: user.salary.Min,
    maximum: user.salary.Max,
    required: true,
  })
  salary: number;
}
