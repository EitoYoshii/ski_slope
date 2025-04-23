import clientPromise from '../../../../lib/mongodb.js'


export async function POST(req) {
  const { name, resort, reason } = await req.json()
  const client = await clientPromise
  const db = client.db('skiResorts')

  const result = await db.collection('recommendations').insertOne({
    name, resort, reason, createdAt: new Date()
  })

  return new Response(JSON.stringify({ message: 'ok', id: result.insertedId }), {
    status: 200,
  })
}

export async function GET() {
  const client = await clientPromise
  const db = client.db('skiResorts')

  const recommendations = await db
    .collection('recommendations')
    .find({})
    .sort({ createdAt: -1 })
    .toArray()

  return new Response(JSON.stringify(recommendations), {
    status: 200,
  })
}
