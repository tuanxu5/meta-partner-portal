import { Module } from '@nestjs/common';
import { CompanyInfoService } from './company-info.service';
import { CompanyInfoController } from './company-info.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyInfo, CompanyInfoSchema } from './schemas/company-info.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CompanyInfo.name, schema: CompanyInfoSchema }]),
  ],
  providers: [CompanyInfoService],
  controllers: [CompanyInfoController]
})
export class CompanyInfoModule {}
