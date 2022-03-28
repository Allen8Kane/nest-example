import { ApiProperty } from "@nestjs/swagger";
import user from "../user.validation";
import { User } from "./user.schema";

export class UserResponse extends User {
  @ApiProperty({
    description: `User id`,
    example: 1,
    minLength: user.id.Min,
    required: true,
  })
  id: number;
}
