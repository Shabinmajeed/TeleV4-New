import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Role } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }

  @Post('register')
  async register(
    @Body() body: { email: string; password: string; role?: string },
  ) {
    const role = this.validateRole(body.role);
    return this.authService.register(body.email, body.password, role);
  }

  private validateRole(role?: string): Role | undefined {
    if (!role) return undefined;
    const validRoles = Object.values(Role);
    if (!validRoles.includes(role as Role)) {
      throw new BadRequestException(
        `Invalid role: ${role}. Must be one of: ${validRoles.join(', ')}`,
      );
    }
    return role as Role;
  }
}
