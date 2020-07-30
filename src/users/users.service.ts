import { Injectable, BadGatewayException, Logger, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './domain/models/user.interface';
import { Model } from 'mongoose';
import { RegisterUserDto } from './domain/dtos/register-user.dto';
import * as  bcrypt from "bcrypt";

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    /* async getUserByEmail(email: string): Promise<User> {
        const us = await this.userModel.findOne({ email: email });
        return us;
    } */

    async getAllUsers() {
        return await this.userModel.find();
    }

    async registerUser(registerUserDto: RegisterUserDto) {

        const userRegister = new this.userModel(registerUserDto);
        const session = await userRegister.db.startSession();

        try {
            session.startTransaction();
            let pass = await bcrypt.hash(registerUserDto.password, 10);
            let result = await this.userModel.create([{ "email": registerUserDto.email, "password": pass }], { session: session })
            await session.commitTransaction();
        } catch (error) {
            await session.abortTransaction();
            if (error.code === 11000) throw new ConflictException("Usuario duplicado");
            throw new BadGatewayException();
        } finally {
            session.endSession();
        }
    }

    async findByEmail(email): Promise<User> {
        return await this.userModel.findOne({ email: email });
    }
}
