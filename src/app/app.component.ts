import { Component } from '@angular/core';
import { Task } from './features/tasks/models/task.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isFormModalOpen = false;
  currentTask: Task | null = null;
  isDetailModalOpen = false;
  detailTask: Task | null = null;
  onTaskSelected(task: Task): void {
    this.openForm(task);
  }
  openForm(task?: Task): void {
    this.currentTask = task ? { ...task } : null;
    this.isFormModalOpen = true;
  }
  closeForm(): void {
    this.isFormModalOpen = false;
    this.currentTask = null;
  }
  onFormSaved(): void {
    this.closeForm();
  }
  openDetail(task: Task): void {
    this.detailTask = { ...task };
    this.isDetailModalOpen = true;
  }
  closeDetail(): void {
    this.isDetailModalOpen = false;
    this.detailTask = null;
  }
  editFromDetail(): void {
    if (this.detailTask) {
      this.openForm(this.detailTask);
      this.closeDetail();
    }
  }
}