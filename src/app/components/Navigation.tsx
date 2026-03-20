import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { AnimatePresence, motion } from "motion/react"
import { Menu, Moon, Sun, X } from "lucide-react"
import AppLink from "./AppLink"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Education", href: "/education" },
  { label: "Certifications", href: "/certifications" },
]

export default function Navigation() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light"
    }
    return window.localStorage.getItem("theme") === "dark" ? "dark" : "light"
  })

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    window.localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--nav)] backdrop-blur-lg"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 sm:py-4">
        <AppLink
          to="/"
          className="text-[11px] font-light uppercase tracking-[0.22em] text-[color:var(--text)] sm:text-sm sm:tracking-[0.3em]"
        >
          Adam Soong
        </AppLink>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.href)
            return (
              <div key={link.href} className="relative">
                <AppLink
                  to={link.href}
                  className={`text-xs uppercase tracking-[0.24em] transition ${
                    isActive
                      ? "text-[color:var(--text)]"
                      : "text-[color:var(--text-muted)] hover:text-[color:var(--text)]"
                  }`}
                >
                  {link.label}
                </AppLink>
                {isActive ? (
                  <motion.div
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute -bottom-2 left-0 right-0 h-px bg-[color:var(--text)]"
                  />
                ) : null}
              </div>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text)] transition hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)] sm:h-10 sm:w-10"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:inline-flex"
          >
            <AppLink
              to="/resume"
              className="rounded-full border border-[color:var(--border)] px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-[color:var(--text)] transition hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)] sm:px-5 sm:text-xs sm:tracking-[0.28em]"
            >
              View CV
            </AppLink>
          </motion.div>

          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text)] transition hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)] md:hidden sm:h-10 sm:w-10"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="border-t border-[color:var(--border)] bg-[color:var(--nav)] px-5 py-4 md:hidden sm:px-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(link.href)
                return (
                  <AppLink
                    key={link.href}
                    to={link.href}
                    className={`py-1 text-xs uppercase tracking-[0.24em] ${
                      isActive
                        ? "text-[color:var(--text)]"
                        : "text-[color:var(--text-muted)]"
                    }`}
                  >
                    {link.label}
                  </AppLink>
                )
              })}
              <AppLink
                to="/resume"
                className="inline-flex w-fit rounded-full border border-[color:var(--border)] px-5 py-2 text-xs uppercase tracking-[0.28em] text-[color:var(--text)] transition hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-hover)]"
              >
                View CV
              </AppLink>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  )
}
