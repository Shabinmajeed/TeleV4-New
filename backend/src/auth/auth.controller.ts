import { Controller, Post, Body, BadRequestException, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Role } from '@prisma/client';
import { LoginDto, RegisterDto, AuthResponseDto, ErrorResponseDto } from '../common/dto/swagger.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'User login', description: 'Authenticate user with email and password' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 200, description: 'Login successful', type: AuthResponseDto })
  @ApiResponse({ status: 401, description: 'Invalid credentials', type: ErrorResponseDto })
  async login(@Body() body: LoginDto) {
    return this.authService.login(body.email, body.password);
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'User registration', description: 'Create a new user account' })
  @ApiBody({ type: RegisterDto })
  @ApiResponse({ status: 201, description: 'Registration successful', type: AuthResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid input', type: ErrorResponseDto })
  async register(@Body() body: RegisterDto) {
    const validRoles = Object.values(Role);
    if (body.role && !validRoles.includes(body.role)) {
      throw new BadRequestException(
        `Invalid role: ${body.role}. Must be one of: ${validRoles.join(', ')}`,
      );
    }
    return this.authService.register(body.email, body.password, body.role);
  }
}
