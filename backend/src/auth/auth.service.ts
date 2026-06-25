import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async login(email: string, _password: string) {
    // TODO: Implement login with password hashing + JWT
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return {
      message: 'Login endpoint - implementation pending',
      user: { id: user.id, email: user.email, role: user.role },
    };
  }

  async register(email: string, password: string, role?: Role) {
    // TODO: Implement registration with password hashing
    const user = await this.prisma.user.create({
      data: { email, password, role: role ?? Role.PATIENT },
    });
    return {
      message: 'Registration endpoint - implementation pending',
      user: { id: user.id, email: user.email, role: user.role },
    };
  }
}
