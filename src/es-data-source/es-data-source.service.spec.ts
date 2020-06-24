import { Test, TestingModule } from '@nestjs/testing';
import { EsDataSourceService } from './es-data-source.service';

describe('EsDataSourceService', () => {
  let service: EsDataSourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EsDataSourceService],
    }).compile();

    service = module.get<EsDataSourceService>(EsDataSourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
