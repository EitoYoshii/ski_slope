export default function HiddenPage() {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">隠れ名所スキー場</h1>
        <ul className="space-y-4">
          <li className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">みやぎ蔵王えぼしリゾート（宮城県）</h2>
            <p>蔵王連峰の美しい眺めと静かなゲレンデ。</p>
          </li>
          <li className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">斑尾高原スキー場（長野県）</h2>
            <p>ツリーランが魅力の穴場的スポット。</p>
          </li>
          <li className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">奥利根スノーパーク（群馬県）</h2>
            <p>夜まで滑れる＆混雑しにくいゲレンデ。</p>
          </li>
          <li className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">やぶはら高原スキー場（長野県）</h2>
            <p>混雑少なく、のんびり滑れる隠れた名所。</p>
          </li>
        </ul>
      </main>
    );
  }
  