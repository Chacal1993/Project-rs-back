import { Controller, Post, Body, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { LoginDto } from '../domain/dtos/login.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post()
    async login(@Body() loginUserDto: LoginDto) {
        let result = await this.authService.login(loginUserDto);
        return result;

    }
}
