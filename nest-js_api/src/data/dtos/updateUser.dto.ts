import { IsNotEmpty, IsString, IsEnum, IsOptional } from "class-validator";
import { tpGenero } from "../schemas/data.schema";

export class UpdateUserDTO {
    @IsOptional()
    @IsString()
    username: string;
    @IsOptional()
    @IsString()
    email: string;
    @IsOptional()
    @IsString()
    nombres: string;
    @IsOptional()
    @IsString()
    apellidos: string;
    @IsOptional()
    fechaNacimineto: string;
    @IsOptional()
    @IsEnum(tpGenero)
    genero: tpGenero;
}