import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { PAGE_SEO } from './src/seo.js'

const ORIGIN = 'https://nexuspune.in'

const escapeAttr = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const NOSCRIPT = `
    <noscript>
      <h1>Nexus Pune – Real Estate Developers &amp; Property Advisors in Pune</h1>
      <p>Nexus Group has built homes and commercial spaces in Pune since 1996, with projects in Punawale, Chikhali, Moshi, Kiwale and Nashik.</p>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Nexus Group</a></li>
        <li><a href="/projects">Projects in Pune</a></li>
        <li><a href="/skydale">Nexus Skydale, Punawale</a></li>
        <li><a href="/careers">Careers</a></li>
        <li><a href="/cp-inquiry">Channel Partner Inquiry</a></li>
      </ul>
      <p>Sales: sales@nexuspune.com | +91 20 6789 9900 | Bund Garden Road, Pune 411001</p>
    </noscript>`

// Writes one HTML file per route so crawlers get route-specific tags
// before any JavaScript runs. The React app still takes over in the browser.
function routeHtmlPlugin() {
  return {
    name: 'route-html',
    apply: 'build',
    closeBundle() {
      const outDir = path.resolve('dist')
      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')

      for (const [page, seo] of Object.entries(PAGE_SEO)) {
        const url = `${ORIGIN}${seo.path}`
        const title = escapeAttr(seo.title)
        const description = escapeAttr(seo.description)

        let html = template
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${seo.title.replace(/&/g, '&amp;')}</title>`)
          .replace(/(<meta name="title" content=")[^"]*(")/, `$1${title}$2`)
          .replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`)
          .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
          .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
          .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
          .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`)
          .replace(/(<meta name="twitter:url" content=")[^"]*(")/, `$1${url}$2`)
          .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`)
          .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${description}$2`)
          .replace(
            '</head>',
            `  <script id="page-schema" type="application/ld+json">${JSON.stringify(seo.schema)}</script>\n  </head>`
          )
          .replace('<div id="root"></div>', `<div id="root"></div>${NOSCRIPT}`)

        if (page === 'home') {
          fs.writeFileSync(path.join(outDir, 'index.html'), html)
          continue
        }

        const dir = path.join(outDir, seo.path.replace(/^\//, ''))
        fs.mkdirSync(dir, { recursive: true })
        fs.writeFileSync(path.join(dir, 'index.html'), html)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    routeHtmlPlugin(),
  ],
  server: {
    watch: {
      ignored: ['**/public/pdfs/**', '**/Information pdfs/**', '**/*.pdf'],
    },
  },
})
