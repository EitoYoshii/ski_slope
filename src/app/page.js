export default function HomePage() {
  return (
    <div style={{
      backgroundImage: "url('/bg/home.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '2rem',
        borderRadius: '1rem',
        textAlign: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          おすすめスキーゲレンデ
        </h1>
        <p style={{ marginBottom: '2rem' }}>カテゴリ別にスキー場を探そう</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          justifyItems: 'center',
        }}>
          <a href="/size" style={linkStyle}>1. 大きさで選ぶ</a>
          <a href="/access" style={linkStyle}>2. アクセスで選ぶ</a>
          <a href="/powder" style={linkStyle}>3. パウダースキーが滑れる</a>
          <a href="/restaurant" style={linkStyle}>4. レストランで選ぶ</a>
          <a href="/hidden" style={linkStyle}>5. 隠れ名所</a>
          <a href="/user-recommend" style={linkStyle}>6. あなたのおすすめ</a>
        </div>
      </div>
    </div>
  )
}

const linkStyle = {
  backgroundColor: 'white',
  padding: '1rem',
  borderRadius: '0.75rem',
  textDecoration: 'none',
  fontWeight: 'bold',
  color: '#1f2937',
  width: '100%',
  maxWidth: '220px',
  boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
}

