import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class AppController {
  @Get()
  helloWorld() {
    return 'Hello World! You are on the V2 version of the container!';
  }
}
