import { Outlet } from "react-router"
import Navigation from "./Navigation"
import PageTransitionWrapper from "./PageTransitionWrapper"

export default function Root() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <Navigation />
      <PageTransitionWrapper>
        <Outlet />
      </PageTransitionWrapper>
    </div>
  )
}
