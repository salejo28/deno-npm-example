import mongoose from 'npm:mongoose'

try {
  const db = await mongoose.connect('mongodb://localhost/deno_proof')
  console.log('Database is connected', db.connection.name)
} catch (error) {
  console.error(error)
}
