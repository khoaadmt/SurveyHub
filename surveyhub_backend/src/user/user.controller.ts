import { Body, Controller, Param, Put } from '@nestjs/common';
import { UserService } from './services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
}
