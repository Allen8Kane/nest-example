import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Res, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './dto/user.dto';
import { User as UserSchema } from './schema/user.schema';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiNotFoundResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { UserResponse } from './schema/userResponse.schema';
import express, { Request, Response } from 'express';
import { ValidationSchema } from 'src/validation.schema';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  @ApiBody({ type: UserSchema })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: UserResponse,
  })
  @ApiBadRequestResponse({
    description: 'Bad request',
    type: ValidationSchema
  })
  async create(@Body() user: User, @Res() res: Response) {
    return res.status(HttpStatus.CREATED).json(await this.userService.create(user));
  }

  @Get()
  @ApiOkResponse({
    description: 'List of users',
    type: UserResponse,
    isArray: true,
  })
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'User',
    type: UserResponse,
  })
  @ApiNotFoundResponse({ description: 'User not found' })
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const result = await this.userService.findOne(+id);
    return result !== undefined ? result : res.status(HttpStatus.NOT_FOUND).json({ message: 'Not found' });
  }

  @Put(':id')
  @ApiBody({ type: UserSchema })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: UserResponse,
  })
  @ApiBadRequestResponse({
    description: 'Bad request',
    type: ValidationSchema
  })
  async update(@Param('id') id: string, @Body() user: User, @Res() res: Response) {
    const result = await this.userService.update(+id, user);
    console.log(result);
    return result.affected 
    ? res.status(HttpStatus.CREATED).json(await this.userService.findOne(+id)) 
    : res.status(HttpStatus.NOT_FOUND).json({ message: 'Not found' });
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'The record has been successfully deleted.',
    type: UserResponse,
  })
  async remove(@Param('id') id: string, @Res() res: Response) {
    const user = await this.userService.findOne(+id);
    const result = await this.userService.remove(+id);
    return result.affected ? user : res.status(HttpStatus.NOT_FOUND).json({ message: 'Not found' });
  }
}
