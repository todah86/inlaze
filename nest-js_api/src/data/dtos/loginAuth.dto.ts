import { IsEmpty, MinLength } from "class-validator";

export class LoginAuthDTO {
    @IsEmpty()
    username: string;

    @MinLength(4)
    password: string;
}