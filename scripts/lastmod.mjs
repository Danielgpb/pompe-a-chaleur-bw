// Génère src/data/lastmod.json : date du dernier commit git par page (pour <lastmod> du sitemap).
// À lancer avant de committer : `npm run lastmod` (Netlify cloné en shallow ne peut pas le calculer).
import { execSync } from 'node:child_process'
import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const PAGES = 'src/pages'
const out = {}

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) { walk(full); continue }
    if (!entry.endsWith('.astro')) continue
    const rel = relative(PAGES, full).replace(/\\/g, '/')
    if (rel === '404.astro') continue
    let route = '/' + rel.replace(/\.astro$/, '').replace(/(^|\/)index$/, '')
    route = route.replace(/\/+$/, '') + '/'
    let date = ''
    try {
      // page modifiée mais pas encore committée → date du jour (le commit suivra)
      const dirty = execSync(`git status --porcelain -- "${full}"`, { encoding: 'utf8' }).trim()
      date = dirty ? new Date().toISOString() : execSync(`git log -1 --format=%cI -- "${full}"`, { encoding: 'utf8' }).trim()
    } catch {}
    if (date) out[route] = date
  }
}
walk(PAGES)
writeFileSync('src/data/lastmod.json', JSON.stringify(out, null, 2) + '\n')
console.log(`lastmod.json : ${Object.keys(out).length} pages`)
