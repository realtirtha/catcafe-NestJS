import { Test, TestingModule } from '@nestjs/testing';
import { CatcafeController } from './catcafe.controller';

describe('CatcafeController', () => {
  let controller: CatcafeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatcafeController],
    }).compile();

    controller = module.get<CatcafeController>(CatcafeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
