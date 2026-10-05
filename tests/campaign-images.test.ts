import {describe,it,expect} from 'vitest'
import {existsSync} from 'node:fs'
import {join} from 'node:path'
import {products,solutions,industries} from '../src/content/portfolio'
import {campaignImages} from '../src/content/campaign-images'
import {storyImage} from '../src/content/cinema'
describe('section-specific campaign imagery',()=>{
 it('gives every product, solution and industry its own existing image',()=>{
  const paths=[...products,...solutions,...industries].map(entry=>storyImage(entry.slug))
  expect(new Set(paths).size).toBe(paths.length)
  for(const path of paths)expect(existsSync(join(process.cwd(),'public',path))).toBe(true)
 })
 it('supports distinct left, right and panoramic compositions',()=>{
  expect(new Set(Object.values(campaignImages).map(image=>image.layout))).toEqual(new Set(['split-left','split-right','panorama','feature']))
 })
})
