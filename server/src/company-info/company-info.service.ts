import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompanyInfo, CompanyInfoDocument } from './schemas/company-info.schema';

@Injectable()
export class CompanyInfoService {
    constructor(
        @InjectModel(CompanyInfo.name) private companyInfoModel: Model<CompanyInfoDocument>,
    ) { }

    async create(data: Partial<CompanyInfo>): Promise<CompanyInfo> {
        const newCompanyInfo = new this.companyInfoModel(data);
        return newCompanyInfo.save();
    }

    async findAll(): Promise<CompanyInfo[]> {
        return this.companyInfoModel.find().exec();
    }

    async findOne(id: string): Promise<CompanyInfo | null> {
        return this.companyInfoModel.findById(id).exec();
    }

    async update(id: string, data: Partial<CompanyInfo>): Promise<CompanyInfo | null> {
        return this.companyInfoModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    async delete(id: string): Promise<CompanyInfo | null> {
        return this.companyInfoModel.findByIdAndDelete(id).exec();
    }
}
