import Joi from 'joi';
import { createTask } from 'protocols';

const taskSchema = Joi.object<createTask>({
    name: Joi.string().required(),
    description: Joi.string().required(),
});

export default taskSchema;