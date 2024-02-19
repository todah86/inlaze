import { IsNotEmpty, IsString, IsEnum } from "class-validator";
import { tpGenero } from "../schemas/data.schema";

export class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
    username: string;
    @IsNotEmpty()
    @IsString()
    email: string;
    @IsNotEmpty()
    @IsString()
    nombres: string;
    @IsNotEmpty()
    @IsString()
    apellidos: string;
    @IsNotEmpty()
    fechaNacimineto: string;
    @IsNotEmpty()
    @IsEnum(tpGenero)
    genero: tpGenero;
    @IsNotEmpty()
    password: string;
}