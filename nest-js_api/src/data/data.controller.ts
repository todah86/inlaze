import { Controller, Post, Body, ValidationPipe, Put, Get, Delete, Param, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { DataService } from './data.service';
import { CreateUserDTO } from './dtos/createUser.dto';
import { LoginAuthDTO } from './dtos/loginAuth.dto';
import { UpdateUserDTO } from './dtos/updateUser.dto';

@Controller('data')
export class DataController {
    constructor(private dataService: DataService) {}

    @Post('registerUser')
    async registerUser(@Res() res, @Body(new ValidationPipe()) createUser: CreateUserDTO) {
        const resCreate = await this.dataService.registerUser(createUser);
        if (!resCreate) throw new NotFoundException('Ha ocurrido un error en el proceso');
        return res.status(HttpStatus.OK).json({
            message: 'Usuario creado correctamente',
            resCreate
        });
    }

    @Post('loginUser')
    async loginUser(@Body() userobjLogin: LoginAuthDTO) {
        return this.dataService.loginUser(userobjLogin);
    }

    @Post('create')
    async createUser(@Res() res, @Body(new ValidationPipe()) createUser: CreateUserDTO) {
        const resCreate = await this.dataService.createUser(createUser);
        if (!resCreate) throw new NotFoundException('Ha ocurrido un error en el proceso');
        return res.status(HttpStatus.OK).json({
            message: 'Usuario creado correctamente',
            resCreate
        });
    }

    @Put(':userID')
    async updateUser(@Res() res, @Param('userID') userID: string,  @Body(new ValidationPipe()) updateUser: UpdateUserDTO) {
        const resUpdate = await this.dataService.updateUser(userID, updateUser);
        if (!resUpdate) throw new NotFoundException('Ha ocurrido un error en el proceso');
        return res.status(HttpStatus.OK).json({
            message: 'Usuario actualizado correctamente',
            resUpdate
        });
    }

    @Get()
    async selectUser() {
        return await this.dataService.findAll();
    }


}
