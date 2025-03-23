import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompanyInfoDocument = CompanyInfo & Document;

@Schema()
export class CompanyInfo {
    @Prop({ required: true })
    companyName: string;

    @Prop({ required: true })
    companyWebsite: string;

    @Prop({ required: true })
    businessType: string;

    @Prop({ required: true })
    companySize: string;

    @Prop()
    companyDescription?: string;

    @Prop({ required: true })
    country: string;

    @Prop()
    yearFounded?: number;

    @Prop({ required: true })
    metaPlatformsExperience: string[];

    @Prop({ required: true })
    servicesOffered: string[];

    @Prop({ required: true })
    clientIndustries: string[];

    @Prop()
    caseStudyExample?: string;

    @Prop()
    certifications?: string[];

    @Prop({ required: true })
    yearsExperience: string;

    @Prop()
    avgMonthlyAdSpend?: string;

    @Prop({ required: true })
    teamExpertise: string;

    @Prop()
    clientReferences?: string;
}

export const CompanyInfoSchema = SchemaFactory.createForClass(CompanyInfo);
