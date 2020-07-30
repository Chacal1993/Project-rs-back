import { Injectable, NotFoundException, Logger, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from '../domain/dtos/login.dto';
import *  as  bcrypt from 'bcrypt';
/* import { JwtService } from '@nestjs/jwt';
import { JwtPayLoad } from '../domain/dtos/payload.dto'; */

@Injectable()
export class AuthService {

    constructor(private userService: UsersService/* , private jwtService: JwtService */) { };

    async login(loginDto: LoginDto) {
        let result = await this.userService.findByEmail(loginDto.email);
        if (!result) throw new NotFoundException();

        let checkPass = await bcrypt.compare(loginDto.password, result.password);
        if (!checkPass) throw new UnauthorizedException();

        return result;
    }

    /*  createJwtPayload(user) {
         let data = {
             email: user.email,
             id: user._id
         }
         let jwt = this.jwtService.sign(data);
         return {
             expiresIn: 3600,
             token: jwt
         }
     }
 
     async validateUserByJwt(payload: JwtPayLoad) {
         Logger.log("Entra en validateUserByJWT");
         let user = await this.userService.findByEmail(payload.email);
         if (user) return this.createJwtPayload(user);
         throw new UnauthorizedException();
     } */
}