import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'

const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })))
const About = lazy(() => import('./pages/About').then((module) => ({ default: module.About })))
const Contact = lazy(() => import('./pages/Contact').then((module) => ({ default: module.Contact })))
const Industries = lazy(() => import('./pages/Industries').then((module) => ({ default: module.Industries })))
const IndustryLanding = lazy(() =>
  import('./pages/IndustryLanding').then((module) => ({ default: module.IndustryLanding })),
)
const PartnerLogin = lazy(() =>
  import('./pages/PartnerLogin').then((module) => ({ default: module.PartnerLogin })),
)
const PartnerOnboarding = lazy(() =>
  import('./pages/PartnerOnboarding').then((module) => ({ default: module.PartnerOnboarding })),
)
const PartnerProgram = lazy(() =>
  import('./pages/PartnerProgram').then((module) => ({ default: module.PartnerProgram })),
)
const ProductDetail = lazy(() =>
  import('./pages/ProductDetail').then((module) => ({ default: module.ProductDetail })),
)
const Products = lazy(() => import('./pages/Products').then((module) => ({ default: module.Products })))
const Resources = lazy(() => import('./pages/Resources').then((module) => ({ default: module.Resources })))
const SolutionDetail = lazy(() =>
  import('./pages/SolutionDetail').then((module) => ({ default: module.SolutionDetail })),
)
const Solutions = lazy(() => import('./pages/Solutions').then((module) => ({ default: module.Solutions })))

function RouteLoading() {
  return (
    <div className="route-loading" role="status">
      Loading Tadiran Wireframe Prototype…
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteLoading />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/:slug" element={<SolutionDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:slug" element={<IndustryLanding />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partners" element={<PartnerProgram />} />
            <Route path="/partners/apply" element={<PartnerOnboarding />} />
            <Route path="/company" element={<Navigate to="/about" replace />} />
          </Route>
          <Route path="/partners/login" element={<PartnerLogin />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
