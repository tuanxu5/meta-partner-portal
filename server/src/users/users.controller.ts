import { Body, Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';
import { RegisterInput } from './dto/login.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() registerInput: RegisterInput) {
    return this.usersService.create(registerInput);
  }

  @Get('list')
  async list() {
    return this.usersService.list();
  }

  @Delete('delete')
  async delete(@Body() id: string) {
    return this.usersService.delete(id);
  }

  @Put('update')
  async update(@Body() id: string, registerInput: RegisterInput) {
    return this.usersService.update(id, registerInput);
  }

  @Get('findById')
  async findById(@Body() id: string) {
    return this.usersService.findById(id);
  }

  @Post('sendMessage')
  async sendMessage(@Body() body: { message: string }) {
    return this.usersService.handleSendMessage(body.message);
  }

  @Get('getLocation')
  async getLocation(@Req() request: Request) {
    const ip =
      request.headers['x-forwarded-for'] ;
    return this.usersService.getLocation(ip as string);
  }
}
