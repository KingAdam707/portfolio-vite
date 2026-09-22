import { Suspense } from "react"
import { Outlet } from "react-router"
import Navigation from "./Navigation"
import PageTransitionWrapper from "./PageTransitionWrapper"

const routeFallback = <div className="min-h-screen bg-[color:var(--bg)]" />

export default function Root() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <Navigation />
      <PageTransitionWrapper>
        <Suspense fallback={routeFallback}>
          <Outlet />
        </Suspense>
      </PageTransitionWrapper>
    </div>
  )
}
