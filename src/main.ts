import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseMiddleware } from './server/middleware/response.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/v1');
  app.use(ResponseMiddleware);

  process.on('warning', (warning) => {
    // tslint:disable-next-line:no-console
    console.warn('\n\n\n\n[ERROR 1] warning:', warning);
  });

  process.on('uncaughtException', (err) => {
    // tslint:disable-next-line:no-console
    console.error('\n\n\n\n[ERROR 2] There was an uncaught error', err);
  });

  process.on('unhandledRejection', (reason, p) => {
    // tslint:disable-next-line:no-console
    console.log('[ERROR 3] Unhandled Rejection at:', p, 'reason:', reason);
  });

  await app.listen(3000);
}
bootstrap();
