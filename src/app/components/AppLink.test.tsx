import { describe, it, expect, beforeEach } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router"
import AppLink from "./AppLink"

function Page({ label, to }: { label: string; to: string }) {
  return <AppLink to={to}>{label}</AppLink>
}

describe("AppLink", () => {
  beforeEach(() => {
    delete document.documentElement.dataset.vt
  })

  it("marks the transition direction as forward when navigating to a later route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Page label="Go to projects" to="/projects" />} />
          <Route path="/projects" element={<Page label="Go home" to="/" />} />
        </Routes>
      </MemoryRouter>,
    )

    fireEvent.click(screen.getByText("Go to projects"))

    expect(document.documentElement.dataset.vt).toBe("forward")
  })

  it("marks the transition direction as back when navigating to an earlier route", () => {
    render(
      <MemoryRouter initialEntries={["/projects"]}>
        <Routes>
          <Route path="/" element={<Page label="Go to projects" to="/projects" />} />
          <Route path="/projects" element={<Page label="Go home" to="/" />} />
        </Routes>
      </MemoryRouter>,
    )

    fireEvent.click(screen.getByText("Go home"))

    expect(document.documentElement.dataset.vt).toBe("back")
  })
})
