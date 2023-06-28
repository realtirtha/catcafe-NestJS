import { Test, TestingModule } from '@nestjs/testing';
import { CatcafeService } from './catcafe.service';

describe('CatcafeService', () => {
  let service: CatcafeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatcafeService],
    }).compile();

    service = module.get<CatcafeService>(CatcafeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
