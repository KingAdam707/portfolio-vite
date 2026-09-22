import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { RouterProvider } from "react-router"
import router from "./routes"

describe("router", () => {
  it("renders the lazy-loaded home route through Suspense without crashing", async () => {
    render(<RouterProvider router={router} />)

    expect(await screen.findByRole("heading", { name: "Adam Soong" })).toBeInTheDocument()
    expect(screen.getByText("View My Work")).toBeInTheDocument()
  })
})
