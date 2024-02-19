import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { dataSchema, user } from './schemas/data.schema';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './jwt.constants';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: user.name,
                schema: dataSchema
            }
        ]),
        JwtModule.register({
            secret: jwtConstant.secret,
            signOptions: { expiresIn: '20h' }
        })
    ],
    providers: [DataService],
    controllers: [DataController] 
})
export class DataModule {}
