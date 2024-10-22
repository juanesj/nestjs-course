import { Body, Controller, Get, Post,  } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class UsersController {

    constructor (private usersService:UsersService){}
    @ApiTags('users')
    @Get('/users')
    getUsers(){
        return this.usersService.getusers();
    }

    
    @Post('/users')
    @ApiTags('users')
    createUser(@Body()user: CreateUsersDto){
        return this.usersService.createUser(user);
    }
}
