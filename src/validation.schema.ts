import { ApiProperty } from '@nestjs/swagger';

export class ValidationSchema {
  @ApiProperty()
  statusCode: number;
  @ApiProperty()
  message: string[];
  @ApiProperty()
  error: string;
}