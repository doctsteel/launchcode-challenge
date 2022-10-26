import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserCredsDto } from './DTO/create-user-creds.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserCredsDto): Promise<void> {
    this.prisma.user.create({ data });
  }
}
