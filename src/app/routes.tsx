import { createBrowserRouter } from "react-router"
import Root from "./components/Root"
import NotFound from "./components/NotFound"
import {
  Home,
  Projects,
  Education,
  Certifications,
  Resume,
  BorrowBuddy,
  MunchMatch,
  QuickQR,
  AlgebraArcade,
} from "./lazyPages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "projects/algebraarcade", element: <AlgebraArcade /> },
      { path: "projects/borrowbuddy", element: <BorrowBuddy /> },
      { path: "projects/munchmatch", element: <MunchMatch /> },
      { path: "projects/quickqr", element: <QuickQR /> },
      { path: "education", element: <Education /> },
      { path: "certifications", element: <Certifications /> },
      { path: "resume", element: <Resume /> },
      { path: "*", element: <NotFound /> },
    ],
  },
])

export default router
