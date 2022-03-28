import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  create(user: User) {
    const result = this.usersRepository.save(user);
    return result;
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOne(id);
  }
  
  update(id: number, user: User) {
    const result = this.usersRepository.update(id, user);
    return result;
  }

  remove(id: number) {
    const result = this.usersRepository.delete(id);
    return result;
  }
}
