import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterUserDto } from '../../auth/dtos/register-user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async findByEmail(email: string) {
    return await this.userRepo.findOne({ where: { email: email } });
  }

  async create(userData: Partial<User>) {
    const newUser = this.userRepo.create(userData);
    return await this.userRepo.save(newUser);
  }
}
