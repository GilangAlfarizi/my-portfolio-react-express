import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./pages/About.jsx"
import Works from "./pages/Works.jsx"
import App from "./App.jsx"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/works',
        element: <Works />
    }
])

export default router;