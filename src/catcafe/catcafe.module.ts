import { Module } from '@nestjs/common';
import { CatcafeController } from './catcafe.controller';

@Module({
    controllers: [CatcafeController]
})
export class CatcafeModule {}
