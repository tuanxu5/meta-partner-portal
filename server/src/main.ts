import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import * as morgan from 'morgan';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/Interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Thêm TransformInterceptor global
  app.useGlobalInterceptors(new TransformInterceptor(new Reflector()));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    })
  );

  app.use(cookieParser());
  const configService = app.get(ConfigService);
  app.enableCors({
    origin: '*', // Chỉ cho phép frontend chạy ở 5050
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });
  app.use(morgan('dev'));

  app.use(helmet());

  const port = process.env.PORT || 3000; // Render tự cấp cổng
  await app.listen(port, '0.0.0.0'); // Đảm bảo ứng dụng có thể lắng nghe từ bên ngoài

  console.log(`Server is running on http://0.0.0.0:${port}`);



  console.log(
    `    - Listen BACKEND:
    - PORT: ${configService.get<string>('PORT', '1001')} 
    - CONNECTDB: ${configService.get<string>('MONGODB_URI', 'localhost:27017').slice(0, 90)} 
    - ENV: ${configService.get<string>('NODE_ENV', 'dev')}`,
  );
}
bootstrap();