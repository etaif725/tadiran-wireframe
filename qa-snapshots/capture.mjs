import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const base = 'http://localhost:5173'
const outDir = path.resolve('qa-snapshots')

const routes = [
  ['01-home', '/'],
  ['02-about', '/about'],
  ['03-solutions', '/solutions'],
  ['04-solution-enterprise', '/solutions/enterprise-communications'],
  ['05-solution-omnicx', '/solutions/omnichannel-cx'],
  ['06-solution-ai', '/solutions/ai-analytics'],
  ['07-solution-critical', '/solutions/critical-communications'],
  ['08-solution-security', '/solutions/security-resilience'],
  ['09-solution-integrations', '/solutions/integrations-deployment'],
  ['10-products', '/products'],
  ['11-product-aeonix', '/products/aeonix'],
  ['12-product-omnicx', '/products/omnicx'],
  ['13-product-ava', '/products/ava'],
  ['14-product-recording', '/products/recording-quality'],
  ['15-product-analytics', '/products/analytics'],
  ['16-product-mobile', '/products/mobile-touch'],
  ['17-industries', '/industries'],
  ['18-industry-healthcare', '/industries/healthcare'],
  ['19-industry-utilities', '/industries/power-utilities'],
  ['20-industry-transport', '/industries/transportation'],
  ['21-industry-hospitality', '/industries/hospitality'],
  ['22-industry-education', '/industries/education'],
  ['23-industry-assisted', '/industries/assisted-living'],
  ['24-industry-alarm', '/industries/alarm-systems'],
  ['25-industry-finance', '/industries/financial-services'],
  ['26-resources', '/resources'],
  ['27-contact', '/contact'],
  ['28-partners', '/partners'],
  ['29-partners-apply', '/partners/apply'],
  ['30-partners-login', '/partners/login'],
]

await mkdir(outDir, { recursive: true })

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
})

const results = []

for (const [name, route] of routes) {
  const url = `${base}${route}`
  const file = path.join(outDir, `${name}.png`)
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 })
    await page.waitForTimeout(700)
    // collapse sticky noise / wait for fonts
    await page.evaluate(() => document.fonts.ready)
    await page.screenshot({ path: file, fullPage: true })
    const title = await page.title()
    const h1 = await page.locator('h1').first().textContent().catch(() => '')
    results.push({ name, route, file, ok: true, title, h1: (h1 || '').trim() })
    console.log(`OK ${name} ${route}`)
  } catch (error) {
    results.push({ name, route, file, ok: false, error: String(error) })
    console.error(`FAIL ${name} ${route}`, error)
  }
}

await browser.close()
await import('node:fs/promises').then((fs) =>
  fs.writeFile(path.join(outDir, 'manifest.json'), JSON.stringify(results, null, 2)),
)
console.log(`Done: ${results.filter((r) => r.ok).length}/${results.length}`)
