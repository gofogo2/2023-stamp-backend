import { Injectable } from '@nestjs/common';
import { UserInfo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  client;
  constructor(private prisma: PrismaService) {}
  async add(item: UserInfo): Promise<UserInfo> {
    console.log(item);
    const { region, email } = item;
    const result = await this.prisma.userInfo.create({
      data: {
        email,
        region,
      },
    });
    return result;
  }

  async list(index: string): Promise<UserInfo[]> {
    console.log(index);
    const result = await this.prisma.userInfo.findMany();

    return result;
  }
}
