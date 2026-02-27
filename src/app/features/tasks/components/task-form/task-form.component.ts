import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../../../../core/services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnChanges {
  @Input() selectedTask!: Task | null;
  @Output() saved = new EventEmitter<void>();
  task: Task = this.getEmptyTask();
  constructor(private taskService: TaskService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedTask'] && this.selectedTask) {
      this.task = { ...this.selectedTask }; 
    }
  }
  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    if (this.task.id && this.task.id !== 0) {
      this.taskService.updateTask(this.task);
    }
    else {
      this.taskService.addTask({ ...this.task });
      form.resetForm(this.getEmptyTask());
    }
    this.saved.emit();
  }
  private getEmptyTask(): Task {
    return {
      id: 0,
      title: '',
      description: '',
      dueDate: '',
      priority: 'Medium',
      isCompleted: false
    };
  }
}