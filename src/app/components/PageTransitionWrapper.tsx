import type { ReactNode } from "react"

type PageTransitionWrapperProps = {
  children: ReactNode
}

export default function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  return <div className="relative">{children}</div>
}
