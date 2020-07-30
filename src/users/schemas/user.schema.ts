import { Schema } from 'mongoose';
import *  as  bcrypt from 'bcrypt';

export const UserSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: String,

});