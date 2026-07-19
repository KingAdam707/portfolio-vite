import type { MouseEventHandler, ReactNode } from "react"
import { Link, useLocation } from "react-router"
import type { LinkProps } from "react-router"

type AppLinkProps = LinkProps & {
  children: ReactNode
}

const getRouteOrder = (path: string) => {
  if (path.startsWith("/projects/")) return 2
  if (path.startsWith("/projects")) return 1
  if (path.startsWith("/education")) return 3
  if (path.startsWith("/certifications")) return 4
  if (path.startsWith("/resume")) return 5
  if (path === "/" || path.startsWith("/#")) return 0
  return 99
}

const normalizeTo = (to: LinkProps["to"]) => {
  if (typeof to === "string") return to
  if (typeof to === "object" && to.pathname) return to.pathname
  return ""
}

export default function AppLink({ onClick, to, children, ...props }: AppLinkProps) {
  const location = useLocation()

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    const toPath = normalizeTo(to)
    if (toPath) {
      const currentOrder = getRouteOrder(location.pathname)
      const nextOrder = getRouteOrder(toPath)
      const direction = nextOrder >= currentOrder ? "forward" : "back"
      document.documentElement.dataset.vt = direction
    }
    onClick?.(event)
  }

  return (
    <Link to={to} viewTransition onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
