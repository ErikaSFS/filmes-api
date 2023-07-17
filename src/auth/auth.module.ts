import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConsts } from './consts';
import { UserModule } from 'src/objects/usuario/user.module';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConsts.secret,
      signOptions: { expiresIn: '30min' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}