import { Request, Response, request } from 'express';
import httpStatus from 'http-status';
import { Task, createTask } from '@/protocols';
import { taskService } from '@/services';

async function readTask(req: Request, res: Response): Promise<void> {
    const result: Task[] | string = await taskService.readTask();

    res.status(httpStatus.OK).send(result);
}

async function createTask(req: Request, res: Response): Promise<void> {
    const object = req.body as createTask;

    await taskService.createTask(object.name, object.description);

    res.status(httpStatus.CREATED).send('New task created');
}

async function updateTask(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);

    const task = req.body as createTask;

    await taskService.updateTask(id, task);

    res.status(httpStatus.OK).send('Task updated');
}

async function deleteTask(req: Request, res: Response): Promise<void> {
    await taskService.deleteTask();

    res.status(httpStatus.OK).send('Task Deleted');
}

export const taskController = { readTask, createTask, updateTask, deleteTask };
