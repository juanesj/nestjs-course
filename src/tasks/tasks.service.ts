import { Injectable,HttpCode, NotFoundException } from '@nestjs/common';
import { error } from 'console';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto copy';

export interface User {
    name:string;
    age:number;
}

@Injectable()
export class TasksService {
  private tasks = [];

  getTasks() {
    return this.tasks; 
  }

  getTask(id: number) {
   const taskFound = this.tasks.find(task=> task.id === id)
   if (!taskFound){
    return new NotFoundException(`Task with id ${id} not Found `)
   }
    return taskFound
  }

  createTask(task:CreateTaskDto) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }

  UpdateTask(task:UpdateTaskDto) {
    console.log(task)
    return 'actualizando Tareas ,,,, ';
  }

  deleteTask() {
    return 'Eliminando TAREA ,.....';
  }

  UpdateTaskStatus() {
    return 'Actualizando el Estatus de Tarea ....  ';
  }
}
