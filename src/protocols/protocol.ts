export type Task = {
    id: string;
    name: string;
    description: string;
};

export type createTask = Omit<Task, 'id'>;
