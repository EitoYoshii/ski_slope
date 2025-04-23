// app/layout.js
import './globals.css'

export const metadata = {
  title: 'おすすめスキー場',
  description: 'カテゴリ別にスキー場を紹介するサイト',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
