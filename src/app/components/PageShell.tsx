import type { ComponentProps, ReactNode } from "react"
import { motion } from "motion/react"

type OrbAnimate = ComponentProps<typeof motion.div>["animate"]

export type Orb = {
  className: string
  animate: OrbAnimate
  duration: number
}

type PageShellProps = {
  orbs: Orb[]
  maxWidth?: string
  contentClassName?: string
  /** Extra background content rendered after the grid overlay, inside the vt-bg layer (e.g. Home's cursor-reactive glow). */
  bgExtra?: ReactNode
  children: ReactNode
}

export default function PageShell({
  orbs,
  maxWidth = "max-w-6xl",
  contentClassName,
  bgExtra,
  children,
}: PageShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[color:var(--bg)]">
      <div className="vt-bg absolute inset-0 overflow-hidden">
        {orbs.map((orb, index) => (
          <motion.div
            key={index}
            className={orb.className}
            animate={orb.animate}
            transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        {bgExtra}
      </div>

      <div
        className={
          contentClassName ??
          `vt-content relative z-10 mx-auto ${maxWidth} px-5 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-32`
        }
      >
        {children}
      </div>
    </div>
  )
}
