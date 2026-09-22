import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import NotFound from "./NotFound"

describe("NotFound", () => {
  it("renders the 404 message and a link back home", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    )

    expect(screen.getByText("404")).toBeInTheDocument()
    expect(screen.getByText("This page drifted off course.")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /back home/i })).toHaveAttribute("href", "/")
  })
})
