import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma:PrismaService){}

    getusers(){
        return this.prisma.user.findMany();
    }

    createUser(user:CreateUsersDto){
        return this.prisma.user.create({data:user});
    }
       
         
    
}
