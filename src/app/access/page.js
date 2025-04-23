export default function AccessPage() {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">アクセスで選ぶスキー場</h1>
        <ul className="space-y-4">
          <li className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">GALA湯沢スキー場（新潟県）</h2>
            <p>新幹線駅直結で、東京から最速75分で到着。</p>
          </li>
          <li className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">軽井沢プリンスホテルスキー場（長野県）</h2>
            <p>新幹線で東京から約1時間。駅からもすぐ。</p>
          </li>
          <li className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">丸沼高原スキー場（群馬県）</h2>
            <p>関東から日帰り可能で、アクセスしやすい高原スキー。</p>
          </li>
          <li className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">箱根芦ノ湖スキー場（神奈川県）</h2>
            <p>神奈川近郊から気軽に行けるアクセスの良さ。</p>
          </li>
        </ul>
      </main>
    );
  }
  