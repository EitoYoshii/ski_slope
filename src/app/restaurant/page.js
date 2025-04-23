export default function RestaurantPage() {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">レストランで選ぶスキー場</h1>
        <ul className="space-y-4">
          <li className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">星野リゾート アルツ磐梯（福島県）</h2>
            <p>おしゃれなカフェや地元グルメが楽しめる。</p>
          </li>
          <li className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">白馬コルチナスキー場（長野県）</h2>
            <p>ゲレンデ直結のホテル内レストランが絶品。</p>
          </li>
          <li className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">苗場スキー場（新潟県）</h2>
            <p>多彩な飲食店が並び、ゲレンデグルメを満喫。</p>
          </li>
          <li className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">蔵王温泉スキー場（山形県）</h2>
            <p>山形名物・芋煮やジンギスカンが味わえる。</p>
          </li>
        </ul>
      </main>
    );
  }
  