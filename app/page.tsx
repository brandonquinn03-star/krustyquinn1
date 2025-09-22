import Link from 'next/link'
import { getInventory, getMenu, getNextDropTime } from '../lib/mock-store'

export default async function Page(){
  const inv = await getInventory()
  const menu = await getMenu()
  const nextDrop = getNextDropTime()

  return (
    <main className="space-y-6">
      <section className="card p-6">
        <p className="uppercase text-xs tracking-widest opacity-70">This week&apos;s pies</p>
        <h2 className="text-3xl font-bold mt-2">{menu.week.title}</h2>
        <p className="opacity-80">{menu.week.subtitle}</p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          {menu.week.pies.map(p => (
            <div key={p.id} className="bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800">
              <div className="aspect-square bg-zinc-900" />
              <div className="p-4">
                <div className="text-lg font-semibold">{p.name}</div>
                <div className="text-sm opacity-70">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="text-2xl font-bold">{inv.left} left</div>
          <Link href="/order" className="btn">Reserve Pizza</Link>
        </div>
        <p className="text-xs mt-2 opacity-70">Orders open at <strong>12:00 PM</strong>. Next drop: {nextDrop}</p>
      </section>

      <section className="card p-6">
        <h3 className="text-lg font-semibold">How it works</h3>
        <ol className="mt-3 space-y-2 opacity-80 text-sm">
          <li>1) Menu rotates weekly — two pies only.</li>
          <li>2) Order starts at 12:00 PM until sold out.</li>
          <li>3) Select a pickup time between 5–8 PM.</li>
          <li>4) Pay & get a QR code for pickup.</li>
        </ol>
      </section>
    </main>
  )
}
