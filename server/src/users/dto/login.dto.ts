import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class RegisterInput {
  @ApiProperty({
    example: 'user@example.com',
    description: 'Email đăng ký tài khoản',
  })
    
  @IsOptional()
  @IsEmail({}, { message: 'Email không hợp lệ' })
  emailOne?: string;


  @IsOptional()
  @IsEmail()
  emailTrue?: string;


  @ApiProperty()
  @IsString()
  @IsOptional()
  passwordOne?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  passwordTrue?: string;
}
