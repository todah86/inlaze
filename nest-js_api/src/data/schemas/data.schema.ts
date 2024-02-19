import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

export enum tpGenero {
    MASCULINO = 'MASCULINO',
    FEMENINO = 'FEMENINO',
    OTRO = 'OTRO'
}

@Schema()
export class user {
    @Prop({ required: true })
    username: string;
    @Prop({ required: true })
    email: string;
    @Prop({ required: true })
    nombres: string;
    @Prop({ required: true })
    apellidos: string;
    @Prop({ required: true })
    fechaNacimineto: string;
    @Prop({ required: true })
    genero: tpGenero;
    @Prop({ required: true, default: 'A' })
    estado: string;
    @Prop({ required: true })
    password: string;
    @Prop({ required: true, default: Date.now })
    fechaRegistro: Date;
}

export const dataSchema = SchemaFactory.createForClass(user);