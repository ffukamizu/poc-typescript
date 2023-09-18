import { Task, createTask } from '@/protocols';
import { TasksRepository } from '@/repositories/tasks.repository';

async function readTask(): Promise<Task[] | string> {
    const result: Task[] = await TasksRepository.select();

    const name: Task[] | string = result.length > 0 ? result : 'No task registered';

    return name;
}

async function createTask(name: string, description: string): Promise<void> {
    await TasksRepository.insert(name, description);
}

async function findTask(id: number): Promise<boolean> {
    const row = await TasksRepository.getById(id);

    if (row == 0) {
        return false;
    } else {
        return true;
    }
}

async function updateTask(id: number, task: createTask): Promise<void> {
    const exists = await findTask(id);

    if (!findTask) throw { message: 'Not found' };

    await TasksRepository.update(id, task);
}

async function deleteTask(): Promise<void> {
    await TasksRepository.del();
}

export const taskService = { readTask, createTask, updateTask, deleteTask };
