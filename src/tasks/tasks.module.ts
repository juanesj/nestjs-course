import { Module } from "@nestjs/common";
import { TaskController } from "./tasks.controller";
import { TasksService } from "./tasks.service";
export {TaskController}from './tasks.controller'

@Module({
    
    controllers: [ TaskController],
    providers:[TasksService],
})
export class taskModule{}

