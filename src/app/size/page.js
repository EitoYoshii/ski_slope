export default function SizePage() {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">大きさで選ぶスキー場</h1>
        <ul className="space-y-4">
          <li className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">苗場スキー場（新潟県）</h2>
            <p>広大なコースと多彩なアクティビティでファミリーにも人気。</p>
          </li>
          <li className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">志賀高原スキー場（長野県）</h2>
            <p>日本最大級のスキー場。複数のエリアがリフトで連結されている。</p>
          </li>
          <li className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">白馬八方尾根スキー場（長野県）</h2>
            <p>オリンピック会場にもなったワールドクラスの規模。</p>
          </li>
          <li className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">星野リゾート トマムスキー場（北海道）</h2>
            <p>ゲレンデの広さと最新施設が魅力。</p>
          </li>
        </ul>
      </main>
    );
  }

  