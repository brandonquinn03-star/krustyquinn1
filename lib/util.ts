export async function fetchJSON(url: string, init?: RequestInit){
  const res = await fetch(url, { headers:{'Content-Type':'application/json'}, ...(init||{}) })
  if(!res.ok) throw new Error('Request failed')
  return res.json()
}
