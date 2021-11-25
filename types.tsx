import baseTheme from "./theme/baseTheme";
export type ThemeType = typeof baseTheme;
export interface TaskType {
  id: string;
  taskName: string;
  color: string;
  percentCompleted?: string;
  isCompleted: boolean;
  subtasks: SubtaskType[];
}

export interface SubtaskType {
  id: string;
  name: string;
  isCompleted: boolean;
}
