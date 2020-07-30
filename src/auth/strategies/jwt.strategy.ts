/* import { Injectable, UnauthorizedException, Logger } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from "../services/auth.service";
import { JwtPayLoad } from 'src/auth/domain/dtos/payload.dto'; */

/* @Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'esta es mi frase'
        })
    }

    async validate(payload: JwtPayLoad) {
        Logger.log("Entrando a Validate");

        const user = await this.authService.validateUserByJwt(payload);
        if (!user) throw new UnauthorizedException();
        return user;

    }
} */