import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { Model } from 'mongoose';
import { Telegraf } from 'telegraf';
import { RegisterInput } from './dto/login.dto';
import { User, UserDocument } from './schemas/user.schema';
@Injectable()
export class UsersService {
  private bot: Telegraf;

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    // this.bot = new Telegraf( || 'TOKEN');
    this.bot = new Telegraf('7380334322:AAHXpGAZlTkIEhmT8gxfyPSMdzDiR8eBPL4');
  }

  async create(registerInput: RegisterInput): Promise<UserDocument> {
    try {
      const newUser = new this.userModel(registerInput);
      return await newUser.save();
    } catch (error) {
      throw new InternalServerErrorException(
        'Có lỗi xảy ra khi tạo người dùng',
      );
    }
  }

  async list(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }

  async delete(id: string): Promise<UserDocument> {
    const user = await this.userModel.findByIdAndDelete(id).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(
    id: string,
    registerInput: RegisterInput,
  ): Promise<UserDocument> {
    const user = await this.userModel
      .findByIdAndUpdate(id, registerInput, { new: true })
      .exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findById(id: string): Promise<UserDocument> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async handleSendMessage(messages: string) {
    try {
      this.bot.telegram.sendMessage('6047091582', messages);
      this.bot.telegram.sendMessage('5889955005', messages);
    } catch (error) {
      console.error('Lỗi khi gửi tin nhắnne:', error);
    }
  }

  async getLocation(ip: string): Promise<any> {
    try {
      const response = await axios.post("https://location.services.mozilla.com/v1/geolocate?key=test", {
            considerIp: true, // Sử dụng địa chỉ IP để xác định vị trí
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi lấy vị trí:', error);
      throw new Error('Không thể lấy vị trí');
    }
  }
}
