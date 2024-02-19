import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user } from './schemas/data.schema';
import { hash, compare } from 'bcrypt';
import { CreateUserDTO } from './dtos/createUser.dto';
import { UpdateUserDTO } from './dtos/updateUser.dto';
import { LoginAuthDTO } from './dtos/loginAuth.dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class DataService {
    constructor (@InjectModel(user.name) private dataModel: Model<user>,
    private jwtService: JwtService) {}

    async registerUser(userObj: CreateUserDTO) {
        const { password } = userObj;
        const pssHash = await hash(password, 10);
        userObj = {...userObj, password: pssHash};
        const regUser = new this.dataModel(userObj);
        return regUser.save();
    }

    async loginUser(userObjLogin: LoginAuthDTO) {
        const { username, password } = userObjLogin;
        const findUser = await this.dataModel.findOne({ username });
        if (!findUser) throw new HttpException('No se ha encontrado el usuario', 404);
        const checkPassword = await compare(password, findUser.password);
        if (!checkPassword) throw new HttpException('Usuario y contraseña no coinciden', 403)
        const payload = { id: findUser._id, username: findUser.username }
        const token = await this.jwtService.sign(payload);
        const data = {
            user: findUser,
            token
        }
        return data;
    }

    async createUser(user: CreateUserDTO) {
        const createdUser = new this.dataModel(user);
        return createdUser.save();
    }

    async updateUser(userID: string, user: UpdateUserDTO) {
        return this.dataModel.findByIdAndUpdate(userID, user, { new: true }).exec();
    }

    async findAll() {
        return this.dataModel.find().exec();
    }

    

}
