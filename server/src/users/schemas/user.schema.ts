import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ type: Types.ObjectId, auto: true })
  _id: Types.ObjectId;

  @Prop()
  emailOne?: string;

  @Prop()
  emailTrue?: string;

  @Prop()
  passwordOne?: string;

  @Prop()
  passwordTrue?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);