// Ping IndexNow (Bing, Yandex, Naver…) avec toutes les URLs du sitemap après un build Netlify.
// Ne fait rien en local (variable NETLIFY absente) pour éviter les pings à chaque build de test.
import { readFileSync } from 'node:fs'

const KEY = 'a08bd37bace98523b68903edf3fd889e'
const HOST = 'pompe-a-chaleur-bw.be'

if (!process.env.NETLIFY) {
  console.log('[indexnow] build local — ping ignoré')
  process.exit(0)
}

const xml = readFileSync(new URL('../dist/sitemap-0.xml', import.meta.url), 'utf-8')
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1])

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
})
console.log(`[indexnow] ${urls.length} URLs soumises — HTTP ${res.status}`)
