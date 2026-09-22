import { describe, it, expect, beforeEach } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import Navigation from "./Navigation"

describe("Navigation", () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove("dark")
  })

  it("defaults to light theme, then toggles to dark and persists the choice", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    )

    expect(document.documentElement.classList.contains("dark")).toBe(false)

    fireEvent.click(screen.getByLabelText("Toggle theme"))

    expect(document.documentElement.classList.contains("dark")).toBe(true)
    expect(window.localStorage.getItem("theme")).toBe("dark")
  })

  it("reads a previously saved dark theme from localStorage on mount", () => {
    window.localStorage.setItem("theme", "dark")

    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    )

    expect(document.documentElement.classList.contains("dark")).toBe(true)
  })

  it("reveals the mobile nav links when the hamburger button is clicked", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    )

    // The desktop link list is always in the DOM (hidden via CSS), so it
    // already accounts for one match — opening the mobile menu adds a second.
    expect(screen.getAllByText("Projects")).toHaveLength(1)

    fireEvent.click(screen.getByLabelText("Toggle navigation"))

    expect(screen.getAllByText("Projects")).toHaveLength(2)
  })
})
