import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hello } from './hello.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hello])],
  controllers: [HelloController],
  providers: [HelloService],
})
export class HelloModule {}
