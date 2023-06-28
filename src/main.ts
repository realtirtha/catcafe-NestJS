import { NestFactory } from '@nestjs/core';
import { CatcafeModule } from './catcafe/catcafe.module';

async function bootstrap() {
  const app = await NestFactory.create(CatcafeModule);
  await app.listen(3000);
}
bootstrap();
