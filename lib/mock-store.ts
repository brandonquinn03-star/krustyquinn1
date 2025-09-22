// Simple in-memory store for demo purposes only
let total = 60
let sold = 0
let open = true

const pies = [
  { id: 'margherita', name:'Margherita', desc:'Tomato, mozzarella, basil', price:18 },
  { id: 'hot-honey-pep', name:'Hot Honey Pepperoni', desc:'Mozzarella, cup & char pepperoni, hot honey', price:20 }
]

export function getNextDropTime(){
  const d = new Date()
  d.setHours(12,0,0,0)
  return d.toLocaleTimeString([],{hour:'numeric', minute:'2-digit'})
}

export async function getInventory(){
  return { total, sold, left: Math.max(total - sold, 0), open }
}

export async function getMenu(){
  return {
    week: {
      title: 'Two pies only',
      subtitle: 'Rotates weekly — keep notifications on',
      pies
    }
  }
}

export async function getSlots(){
  const slots:string[] = []
  const d = new Date(); d.setHours(17,0,0,0)
  for(let i=0;i<12;i++){
    slots.push(d.toLocaleTimeString([],{hour:'numeric', minute:'2-digit'}))
    d.setMinutes(d.getMinutes()+15)
  }
  return slots
}

export async function reserve(pieId:string, slot:string){
  if(!open) return { ok:false, message:'Ordering closed' }
  if(sold>=total) return { ok:false, message:'Sold out' }
  sold += 1
  return { ok:true, left: total - sold, id: `res_${Date.now()}`, qr:`QR-${Math.random().toString(36).slice(2,8)}` }
}

export async function admin(action:string, amount?:number){
  if(action==='bump') total += amount||0
  if(action==='toggle') open = !open
  if(action==='reset') { total=60; sold=0; open=true }
  return { total, sold, left: total - sold, open }
}
