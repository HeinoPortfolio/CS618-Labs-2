// Tell tests to intialize the database and then when all
// test are finished disconnect from the database

import mongoose from 'mongoose'
import { beforeAll, afterAll } from '@jest/globals'
import { initDatabase } from '../db/init.js'

beforeAll(async () => {
  await initDatabase()
})

afterAll(async () => {
  await mongoose.disconnect()
})
