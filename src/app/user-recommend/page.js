'use client'
import { useEffect, useState } from 'react'

export default function UserRecommendPage() {
  const [name, setName] = useState('')
  const [resort, setResort] = useState('')
  const [reason, setReason] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/api/recommend')
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, [submitted])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/recommend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, resort, reason }),
    })

    if (res.ok) {
      setName('')
      setResort('')
      setReason('')
      setSubmitted(true)
    }
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">あなたのおすすめスキー場</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input
          type="text"
          placeholder="名前（任意）"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          placeholder="スキー場名"
          value={resort}
          onChange={(e) => setResort(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
        <textarea
          placeholder="おすすめの理由"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="border p-2 w-full rounded h-32"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          投稿する
        </button>
      </form>

      <h2 className="text-2xl font-semibold mt-12 mb-4">みんなのおすすめ</h2>
      <ul className="space-y-4 max-w-xl">
        {posts.map((post, index) => (
          <li key={index} className="border p-4 rounded-xl">
            <p className="font-bold">スキー場:{post.resort}</p>
            <p>理由:{post.reason}</p>
            <p className="text-sm text-gray-500">投稿者: {post.name || '匿名'}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
