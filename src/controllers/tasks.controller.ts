import { Request, Response } from 'npm:express'
import Task from '../models/Task.ts'

export const getTasks = async (_req: Request, res: Response) => {
  const tasks = await Task.find()
  return res.json(tasks)
}

export const createTask = async (req: Request, res: Response) => {
  const newTask = await Task.create(req.body)
  return res.json(newTask)
}

export const getTask = async (req: Request, res: Response) => {
  const task = await Task.findById(req.params.id)
  return res.json(task)
}

export const updateTask = async (req: Request, res: Response) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  return res.json(updatedTask)
}

export const deleteTask = async (req: Request, res: Response) => {
  await Task.deleteOne({ _id: req.params.id })
  return res.json({
    message: 'Task Deleted',
  })
}
