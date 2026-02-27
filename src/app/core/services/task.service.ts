import { Injectable } from '@angular/core';
import { Task } from '../../features/tasks/models/task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private taskIdCounter = 1;
  getTasks(): Task[] {
    return this.tasks;
  }
  addTask(task: Task): void {
    task.id = this.taskIdCounter++;
    // provide defaults so components don't need to worry
    task.dueDate = task.dueDate || '';
    task.priority = task.priority || 'Medium';
    this.tasks.push(task);
  }
 updateTask(updatedTask: Task): void {
  const index = this.tasks.findIndex(
    task => task.id === updatedTask.id
  );
  if (index !== -1) {
    this.tasks[index] = updatedTask;
  }
}
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }
}