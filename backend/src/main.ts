import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { writeFileSync } from 'fs';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // Swagger configuration — factory method for lazy document generation
  const config = new DocumentBuilder()
    .setTitle('TeleV4 API')
    .setDescription('Telehealth Marketplace Platform — Backend REST API')
    .setVersion('1.0.0')
    .addTag('auth', 'Authentication endpoints (login, register)')
    .addTag('users', 'User management endpoints')
    .addTag('health', 'Health check endpoint')
    .addBearerAuth()
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory, {
    swaggerOptions: { persistAuthorization: true },
    jsonDocumentUrl: 'api/docs-json',
  });

  // Write swagger.json to backend root for orval codegen
  const document = documentFactory();
  const outputPath = join(__dirname, '..', 'swagger.json');
  writeFileSync(outputPath, JSON.stringify(document, null, 2));

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Server running on http://localhost:${port}`);
  console.log(`📚 Swagger docs at http://localhost:${port}/api/docs`);
  console.log(`📄 Swagger JSON at http://localhost:${port}/api/docs-json`);
}
void bootstrap();
