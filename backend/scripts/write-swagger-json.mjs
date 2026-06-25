#!/usr/bin/env node
/**
 * write-swagger-json.mjs
 * Boots the NestJS app silently, extracts the Swagger document,
 * and writes it to ../swagger.json for orval codegen.
 * 
 * Sets minimal placeholder env vars to pass validation — these are
 * only used for swagger generation, not actual DB/Supabase operations.
 */

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set minimal env vars for swagger generation only
process.env.SUPABASE_URL ||= 'http://localhost:54321';
process.env.SUPABASE_ANON_KEY ||= 'placeholder-anon-key-for-swagger-gen';
process.env.SUPABASE_SERVICE_ROLE_KEY ||= 'placeholder-service-role-for-swagger-gen';
process.env.JWT_SECRET ||= 'placeholder-jwt-secret-for-swagger-gen';
process.env.DATABASE_URL ||= 'postgresql://postgres:postgres@localhost:54322/postgres';
process.env.NODE_ENV ||= 'development';
process.env.PORT ||= '3000';

try {
  const { AppModule } = await import(join(__dirname, '../dist/app.module.js'));
  console.log('✅ AppModule loaded');

  const app = await NestFactory.create(AppModule, { logger: false });
  console.log('✅ App created');

  const config = new DocumentBuilder()
    .setTitle('TeleV4 API')
    .setDescription('Telehealth Marketplace Platform — Backend REST API')
    .setVersion('1.0.0')
    .addTag('auth', 'Authentication endpoints (login, register)')
    .addTag('users', 'User management endpoints')
    .addTag('health', 'Health check endpoint')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const outputPath = join(__dirname, '..', 'swagger.json');
  writeFileSync(outputPath, JSON.stringify(document, null, 2));
  console.log(`✅ swagger.json written to ${outputPath}`);

  await app.close();
  process.exit(0);
} catch (err) {
  console.error('❌ Error:', err.message);
  console.error(err.stack);
  process.exit(1);
}
