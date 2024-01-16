import { Module } from '@nestjs/common';
import { StudentController } from './app.controller';
import { StudentService } from './Services';
@Module({
  imports: [],
  controllers: [StudentController],
  providers: [ StudentService],
})
export class AppModule {}


