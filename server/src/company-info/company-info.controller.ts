import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CompanyInfoService } from './company-info.service';
import { CompanyInfo } from './schemas/company-info.schema';

@Controller('api/company-info')
export class CompanyInfoController {
    constructor(private readonly companyInfoService: CompanyInfoService) { }

    @Post()
    async create(@Body() data: Partial<CompanyInfo>) {
        return this.companyInfoService.create(data);
    }

    @Get()
    async findAll() {
        return this.companyInfoService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.companyInfoService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: Partial<CompanyInfo>) {
        return this.companyInfoService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.companyInfoService.delete(id);
    }
}
