import { Controller, Post, HttpException, HttpStatus, Logger, Body, Param, Get, UseGuards } from '@nestjs/common';
import { UsersService } from '../users.service';
import { RegisterUserDto } from '../domain/dtos/register-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    /* @Get('/:email')
    async getUserByEmail(@Param('email') emailUser) {
        const eUser = await this.userService.getUserByEmail(emailUser);
        return eUser;
    } */

    @Get()
    getAllUsers() {
        try {
            return this.userService.getAllUsers();
        }
        catch (Exception) {
            throw new HttpException("Exception", HttpStatus.CONFLICT);
        }

    }
    @Post()
    registerUser(
        @Body() registerUserDto: RegisterUserDto) {
        try {
            let data = this.userService.registerUser(registerUserDto);
            return data;
        } catch (Exception) {
            throw new HttpException("Exception", HttpStatus.CONFLICT);
        }
    }

    @Get('/guard')
    @UseGuards(AuthGuard())
    getGuarUser() {
        return "Entra";
    }

}