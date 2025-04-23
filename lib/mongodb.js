import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI

if (!uri) {
  throw new Error('❌ MONGODB_URI is not defined in environment variables')
}

let client
let clientPromise

try {
  client = new MongoClient(uri)
  clientPromise = client.connect()
} catch (err) {
  console.error('❌ MongoDB connection error:', err)
  throw err
}

export default clientPromise

