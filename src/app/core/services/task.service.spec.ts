import { TaskService } from './task.service';

describe('TaskService', () => {

  let service: TaskService;

  beforeEach(() => {
    service = new TaskService();
  });

  it('should add a task', () => {
    service.addTask({
      id: 0,
      title: 'Test',
      description: 'Test Desc',
      isCompleted: false
    });

    expect(service.getTasks().length).toBe(1);
  });

});