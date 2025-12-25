import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { EntityNotFoundFilter } from './common/filters/entity-not-found.filter';
import { EntityAlreadyExistsFilter } from './common/filters/entity-already-exists.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(
    new EntityNotFoundFilter(),
    new EntityAlreadyExistsFilter(),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
