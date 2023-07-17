import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { FilmesModule } from './objects/filmes/filmes.module';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './objects/usuario/user.module';


@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://ehrikaster:EMg260u88KQmQ5Gw@cluster0.z2djtd0.mongodb.net/?retryWrites=true&w=majority`),
    ScheduleModule.forRoot(),
    AuthModule,
    FilmesModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
 
})
export class AppModule { }
