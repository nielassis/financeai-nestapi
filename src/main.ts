import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors({
    origin: [
      'https://financeai-nestapi.vercel.app/',
      'http://localhost:3005',
      'exp://192.168.0.66:8081',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.use(cookieParser());
  app.use(helmet());

  await app.listen(process.env.PORT ?? 3005);
}
bootstrap();
