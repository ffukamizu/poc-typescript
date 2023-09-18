import { db } from '@/database/database.connection';
import { Task, createTask } from '@/protocols';

async function select(): Promise<Task[]> {
    const result = await db.query<Task>(`
  SELECT * FROM Tasks ;
`);
    return result.rows;
}

async function insert(name: string, description: string): Promise<void> {
    const insert = await db.query<Task>(
        `
    INSERT INTO Tasks (name,description) values ($1,$2);
  `,
        [name, description]
    );
}

async function update(id: number, Task: createTask) {
    const update = await db.query<Task>(
        `
    UPDATE Tasks SET name=$2, description=$3 WHERE id=$1
  ;`,
        [id, Task.name, Task.description]
    );
}

async function del(): Promise<void> {
    const erase = await db.query<Task>(`DELETE FROM Tasks WHERE id>0;`);
}

async function getById(id: number): Promise<number> {
    const query = await db.query<Task>(
        `
    SELECT * FROM Tasks WHERE id=$1
  ;`,
        [id]
    );
    return query.rowCount;
}

export const TasksRepository = { select, insert, update, getById, del };
