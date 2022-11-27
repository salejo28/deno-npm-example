import { Schema, model } from 'npm:mongoose'

const Task = new Schema(
  {
    title: String,
    description: String,
    done: Boolean,
  },
  {
    timestamps: true,
  }
)

export default model('Task', Task)
