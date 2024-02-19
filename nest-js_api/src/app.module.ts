import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DataModule } from './data/data.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://eahoyos:Abcde54321@cluster.q2g8mct.mongodb.net/InlazeDB?retryWrites=true&w=majority'), 
    DataModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
