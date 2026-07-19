import { createBrowserRouter } from "react-router"
import Root from "./components/Root"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Certifications from "./components/Certifications"
import Resume from "./components/Resume"
import NotFound from "./components/NotFound"
import BorrowBuddy from "./components/BorrowBuddy"
import MunchMatch from "./components/MunchMatch"
import QuickQR from "./components/QuickQR"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
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
