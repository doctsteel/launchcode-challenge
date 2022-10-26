import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserCredsDto } from './DTO/create-user-creds.dto';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserCredsDto): Promise<void> {
    const { username, password, role } = data;

    const salt = await bcrypt.genSalt();
    const hashedPass = await bcrypt.hash(password, salt);

    const secureData = {
      username,
      password: hashedPass,
      role,
    };
    try {
      await this.prisma.user.create({ data: secureData });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (error.code === 'P2002') {
          throw new ConflictException('username already exists!');
        }
      }
      throw error;
    }
  }
}
