import { Controller, Delete, Patch, Get, Post, Put, Body, Query, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto copy';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('Tasks')
export class TaskController {
  constructor(private tasksService: TasksService) {}

  @Get()
  @ApiOperation({summary:'Get all task'})
  @ApiResponse({status: 200, description:'Return all Tasks'})
  @ApiResponse({status: 403, description:'Forbidden'})
  getAllTasks(@Query() query: any) {
    console.log(query)
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getTask(@Param('id')id:string) {
    console.log(id)
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  @ApiOperation({summary:'Get all task'})
  CreateTask(@Body()task: CreateTaskDto) {
    return this.tasksService.createTask(task);
  }

  @Put()
  UpdateTask(@Body()task:UpdateTaskDto) {
    return this.tasksService.UpdateTask(task);
  }

  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask();
  }

  @Patch()
  updateTaskAtatus() {
    return this.tasksService.UpdateTaskStatus();
  }
}
