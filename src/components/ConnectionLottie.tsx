import { LottieLight } from 'lottie-react'

const orbitAnimation = {
  v: '5.9.0',
  fr: 30,
  ip: 0,
  op: 180,
  w: 600,
  h: 600,
  nm: 'Connected communications orbit',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Outer orbit',
      sr: 1,
      ks: {
        o: { a: 0, k: 28 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [300, 300, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: 'el',
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [480, 480] },
          nm: 'Orbit',
        },
        {
          ty: 'st',
          c: { a: 0, k: [0.322, 0.78, 0.91, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 2 },
          lc: 2,
          lj: 2,
          nm: 'Stroke',
        },
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'Middle orbit',
      sr: 1,
      ks: {
        o: { a: 0, k: 42 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [300, 300, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: 'el',
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [330, 330] },
          nm: 'Orbit',
        },
        {
          ty: 'st',
          c: { a: 0, k: [0.322, 0.78, 0.91, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 2 },
          lc: 2,
          lj: 2,
          nm: 'Stroke',
        },
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: 'Core',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [300, 300, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [88, 88, 100], e: [108, 108, 100] },
            { t: 90, s: [108, 108, 100], e: [88, 88, 100] },
            { t: 180, s: [88, 88, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: 'el',
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [94, 94] },
          nm: 'Core',
        },
        {
          ty: 'fl',
          c: { a: 0, k: [0.322, 0.78, 0.91, 1] },
          o: { a: 0, k: 100 },
          r: 1,
          nm: 'Fill',
        },
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0,
    },
    ...[
      { ind: 4, name: 'Voice', start: [300, 60], mid: [540, 300] },
      { ind: 5, name: 'Digital', start: [540, 300], mid: [300, 540] },
      { ind: 6, name: 'Data', start: [300, 540], mid: [60, 300] },
      { ind: 7, name: 'People', start: [60, 300], mid: [300, 60] },
    ].map((node) => ({
      ddd: 0,
      ind: node.ind,
      ty: 4,
      nm: node.name,
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { t: 0, s: [...node.start, 0], e: [...node.mid, 0] },
            { t: 90, s: [...node.mid, 0], e: [...node.start, 0] },
            { t: 180, s: [...node.start, 0] },
          ],
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: 'el',
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [34, 34] },
          nm: 'Node',
        },
        {
          ty: 'fl',
          c: { a: 0, k: [1, 1, 1, 1] },
          o: { a: 0, k: 100 },
          r: 1,
          nm: 'Fill',
        },
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0,
    })),
  ],
}

type ConnectionLottieProps = {
  className?: string
}

export function ConnectionLottie({ className }: ConnectionLottieProps) {
  return (
    <div className={className} aria-hidden="true">
      <LottieLight src={orbitAnimation} loop autoplay />
    </div>
  )
}
