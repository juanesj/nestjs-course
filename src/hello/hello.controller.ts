import { Controller, Get, HttpCode, Param, ParseArrayPipe, ParseBoolPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { validate } from 'class-validator';
import {query, Request,Response}from 'express'
import { agent } from 'supertest';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';


@Controller()
export class HelloController {

    @Get('/hello')
    index( @Req() request:Request,@Res() response:Response) {
        console.log(request.url)
        response.status(200).json({
            message: 

            ' HELLO WORLD MAYA',
        });
    }
    @Get('new')
    @HttpCode(201)
    somethingNew(){
        return 'somethingNew'

    }

    @Get('notfound')
    @HttpCode(404)
    notFoundPage() {
        return ' 404 not found '
    }
    
    @Get('error')
    @HttpCode(500)
    errorPage() {
        return ' Error Roputer ! '
    }

    @Get('ticket/:num')
    getNumber(@Param('num',ParseArrayPipe) num: number){
        console.log(typeof num)
        return num + 14;
    }
    @Get('active/:status')
    inUserActive(@Param('status',ParseBoolPipe) status: boolean){
        console.log(typeof status ) 
        return status ;

    }
    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe)  query:{name: string, age: number }){
        console.log(typeof query.name)
        console.log(typeof query.age)
        return `Hello ${query.name}, you are ${query.age + 30 }, years old `;

    }





}
