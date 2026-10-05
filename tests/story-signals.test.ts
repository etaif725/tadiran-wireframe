import {describe,it,expect} from 'vitest'
import {readFileSync} from 'node:fs'
import {storySignal} from '../src/lib/story-signals'
describe('Lottie photographic registration',()=>{
 it.each(['customer','agent','enterprise'])('matches the source dimensions for %s',name=>{
  const i=['customer','agent','enterprise'].indexOf(name)
  const png=readFileSync(`public/brand/cinema/${name}.png`)
  const data=storySignal(i)
  expect([data.w,data.h]).toEqual([png.readUInt32BE(16),png.readUInt32BE(20)])
  expect(data.op).toBe(180)
  expect(data.layers).toHaveLength(2)
 })
 it('uses separate paths for each photographic scene',()=>{
  expect(new Set([0,1,2].map(i=>JSON.stringify(storySignal(i).layers))).size).toBe(3)
 })
})
