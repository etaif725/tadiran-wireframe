import path from 'node:path'
import { mkdir } from 'node:fs/promises'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const root = path.resolve(import.meta.dirname, '..')
const sharp = require(path.join(root, 'node_modules/.pnpm/node_modules/sharp'))

const [, , srcRel, destRel, width = '2200', format = 'webp'] = process.argv
if (!srcRel || !destRel) {
  console.error('usage: apply-one.mjs <src> <dest> [width] [webp|jpg|png]')
  process.exit(1)
}

const src = path.isAbsolute(srcRel) ? srcRel : path.join(root, srcRel)
const dest = path.isAbsolute(destRel) ? destRel : path.join(root, 'public', destRel)
await mkdir(path.dirname(dest), { recursive: true })

let pipeline = sharp(src).rotate().resize({ width: Number(width), withoutEnlargement: true })
if (format === 'jpg') pipeline = pipeline.jpeg({ quality: 84, mozjpeg: true })
else if (format === 'png') pipeline = pipeline.png({ compressionLevel: 9 })
else pipeline = pipeline.webp({ quality: 82, effort: 5 })

await pipeline.toFile(dest)
const info = await sharp(dest).metadata()
console.log(`${destRel} ${info.width}x${info.height}`)
