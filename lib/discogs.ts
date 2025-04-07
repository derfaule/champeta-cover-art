const DISCOGS_TOKEN = process.env.DISCOGS_TOKEN

export async function searchReleases(query: string) {
  const res = await fetch(`https://api.discogs.com/database/search?q=${encodeURIComponent(query)}&token=${DISCOGS_TOKEN}`)
  
  if (!res.ok) {
    throw new Error(`Discogs API error: ${res.status}`)
  }

  const data = await res.json()
  return data
}
