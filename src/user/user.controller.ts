import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserInfo } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('/list/:index')
  async list(@Param('index') index: string): Promise<UserInfo[]> {
    console.log(`/list/:index ${index}`);
    return this.service.list(index);
  }

  @Post('/add')
  async add(@Body() item: UserInfo): Promise<UserInfo> {
    console.log(item);
    return this.service.add(item);
  }

  @Post('/delete-all')
  async delete():Promise<boolean>{
    console.log('delete');
    await this.service.delete();
    return true;
  }
}
