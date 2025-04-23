import clientPromise from "../../../../lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("skiResorts");

    const data = await db.collection("recommendations").find({}).toArray();

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("💥 GET /api/recommend error:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    const { name, resort, reason } = await req.json();
    const client = await clientPromise;
    const db = client.db("skiResorts");

    await db.collection("recommendations").insertOne({
      name,
      resort,
      reason,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: "投稿成功！" }), {
      status: 200,
    });
  } catch (err) {
    console.error("💥 POST /api/recommend error:", err);
    return new Response(JSON.stringify({ error: "投稿に失敗しました" }), {
      status: 500,
    });
  }
}
