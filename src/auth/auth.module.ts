import { Module } from '@nestjs/common';
import { AuthController } from './UI/auth.controller';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './services/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
/* import { JwtStrategy } from './strategies/jwt.strategy'; */

@Module({
  imports: [
    /* PassportModule.register({ defaultStrategy: 'jwt', session: false }), JwtModule.register({
      secretOrPrivateKey: 'esta es mi frase', signOptions: {
        expiresIn: 3600
      }
    }), */
    UsersModule],
  controllers: [AuthController],
  providers: [AuthService, /* JwtStrategy */]
})
export class AuthModule { }
