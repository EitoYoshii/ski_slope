export default function PowderPage() {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">パウダースキーが滑れるスキー場</h1>
        <ul className="space-y-4">
          <li className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">ニセコグラン・ヒラフ（北海道）</h2>
            <p>世界的に有名なパウダースノーの聖地。</p>
          </li>
          <li className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">ルスツリゾート（北海道）</h2>
            <p>上質なパウダースノーと多彩なコースが魅力。</p>
          </li>
          <li className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">野沢温泉スキー場（長野県）</h2>
            <p>雪質の良さと温泉も楽しめる魅力的なゲレンデ。</p>
          </li>
          <li className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">かぐらスキー場（新潟県）</h2>
            <p>標高が高く、降雪量も多いのでパウダーが豊富。</p>
          </li>
        </ul>
      </main>
    );
  }
  