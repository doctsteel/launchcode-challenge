import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserCredsDto } from './DTO/create-user-creds.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async registerUser(@Body() newUserInfo: CreateUserCredsDto): Promise<void> {
    return this.authService.createUser(newUserInfo);
  }
}
