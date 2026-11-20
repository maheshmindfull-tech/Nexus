import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { PAGE_SEO, blogStaticPages, keywordsForSeo } from './src/seo.js'

const ORIGIN = 'https://nexuspune.in'

const escapeAttr = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function replaceMeta(html, attr, key, value) {
  const re = new RegExp(
    `<meta\\s+${attr}=(["'])${key}\\1\\s+content=(["'])[\\s\\S]*?\\2\\s*/?>`,
    'i'
  )
  const tag = `<meta ${attr}="${key}" content="${value}" />`
  return html.replace(re, () => tag)
}

const NOSCRIPT = `
    <noscript>
      <h1>Nexus Pune – Real Estate Developers &amp; Property Advisors in Pune</h1>
      <p>Nexus Group has built homes and commercial spaces in Pune since 1996, with projects in Punawale, Chikhali, Moshi, Kiwale and Nashik.</p>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Nexus Group</a></li>
        <li><a href="/projects">Projects in Pune</a></li>
        <li><a href="/skydale">Nexus Skydale, Punawale</a></li>
        <li><a href="/kinara">Nexus Kinaara, Chikhali</a></li>
        <li><a href="/atrium">Nexus Atrium, Moshi</a></li>
        <li><a href="/genesis">Nexus Genesis, Kiwale</a></li>
        <li><a href="/prime-square">Nexus Prime Square, Moshi</a></li>
        <li><a href="/imperia">Nexus Imperia, Moshi</a></li>
        <li><a href="/westia">Nexus Westia, Punawale</a></li>
        <li><a href="/careers">Careers</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/blogs">Blogs</a></li>
        <li><a href="/cp-inquiry">Channel Partner Inquiry</a></li>
      </ul>
      <p>Sales: sales@nexuspune.com | +91 20 6789 9900 | Plot No.P-087, D-II Block, MIDC, Pimpari Industrial Area, near Wonder Cars Showroom, Chinchwad, Pune 411019</p>
    </noscript>`

// Writes one HTML file per route so crawlers get route-specific tags
// before any JavaScript runs. The React app still takes over in the browser.
function routeHtmlPlugin() {
  return {
    name: 'route-html',
    apply: 'build',
    async closeBundle() {
      const outDir = path.resolve('dist')
      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')
      const blogPages = await blogStaticPages()

      const routes = [
        ...Object.entries(PAGE_SEO),
        ...blogPages.map((seo) => [seo.path, seo]),
      ]

      for (const [page, seo] of routes) {
        const url = `${ORIGIN}${seo.path}`
        const title = escapeAttr(seo.title)
        const description = escapeAttr((seo.description || '').replace(/\s+/g, ' ').trim())
        const keywords = escapeAttr(keywordsForSeo(seo))
        const schemaJson = JSON.stringify({ ...seo.schema, keywords: keywordsForSeo(seo) }).replace(/</g, '\\u003c')

        let html = template
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${seo.title.replace(/&/g, '&amp;')}</title>`)
        html = replaceMeta(html, 'name', 'title', title)
        html = replaceMeta(html, 'name', 'description', description)
        html = replaceMeta(html, 'name', 'keywords', keywords)
        html = replaceMeta(html, 'property', 'og:type', seo.ogType || 'website')
        html = replaceMeta(html, 'property', 'og:url', url)
        html = replaceMeta(html, 'property', 'og:title', title)
        html = replaceMeta(html, 'property', 'og:description', description)
        html = replaceMeta(html, 'name', 'twitter:url', url)
        html = replaceMeta(html, 'name', 'twitter:title', title)
        html = replaceMeta(html, 'name', 'twitter:description', description)
        html = replaceMeta(html, 'property', 'og:image', escapeAttr(seo.image || `${ORIGIN}/assets/home/slide-01.webp`))
        html = replaceMeta(html, 'name', 'twitter:image', escapeAttr(seo.image || `${ORIGIN}/assets/home/slide-01.webp`))
        html = html
          .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
          .replace(
            '</head>',
            `  <script id="page-schema" type="application/ld+json">${schemaJson}</script>\n  </head>`
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
      // Windows locks image files while editors/tools touch them; don't watch static assets.
      ignored: [
        '**/public/pdfs/**',
        '**/public/assets/**',
        '**/Information pdfs/**',
        '**/*.pdf',
        '**/*.{png,jpg,jpeg,webp,gif,mp4}',
      ],
    },
  },
})
