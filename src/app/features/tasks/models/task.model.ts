export type Priority = 'Low' | 'Medium' | 'High';
export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate?: string;
  priority?: Priority;
  isCompleted: boolean;
}