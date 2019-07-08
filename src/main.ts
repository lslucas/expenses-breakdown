import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseMiddleware } from './middleware/response.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/v1');
  app.use(ResponseMiddleware);
  await app.listen(3000);
}
bootstrap();
