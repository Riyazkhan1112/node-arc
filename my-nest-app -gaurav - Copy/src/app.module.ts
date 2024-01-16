import { Module } from '@nestjs/common';
import { StudentController } from './app.controller';
import { StudentService } from './Services';
import { StudentInterface } from './Interface';
@Module({
  imports: [],
  controllers: [StudentController],
  providers: [{
    provide: 'StudentInterface',
    useClass: StudentService,
  },
  StudentService,
],
})
export class AppModule {}


