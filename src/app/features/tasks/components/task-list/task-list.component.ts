import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../../../core/services/task.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Output() taskSelected = new EventEmitter<Task>();
  @Output() viewTask = new EventEmitter<Task>();
  showConfirm = false;
  pendingDeleteId: number | null = null;
  constructor(public taskService: TaskService) {}
  get tasks(): Task[] {
    return this.taskService.getTasks();
  }
  editTask(task: Task): void {
    this.taskSelected.emit(task);
  }
  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }
  askDelete(id: number): void {
    this.pendingDeleteId = id;
    this.showConfirm = true;
  }
showAlert: boolean = false;
alertMessage: string = '';
alertType: 'success' | 'error' = 'success';
confirmDelete(): void {
  if (this.pendingDeleteId !== null) {
    this.deleteTask(this.pendingDeleteId);

    this.alertType = 'success';
    this.alertMessage = 'Task deleted successfully';
    this.showAlert = true;
  }
  this.showConfirm = false;
  this.pendingDeleteId = null;
  setTimeout(() => {
    this.showAlert = false;
  }, 3000);
}
  cancelDelete(): void {
    this.showConfirm = false;
    this.pendingDeleteId = null;
  }
}