import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About.jsx";
import Works from "./pages/Works.jsx";
import App from "./App.jsx";
import WorkDetail from "./components/WorkDetail.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/works",
		element: <Works />,
	},
	{
		path: "/works/:id",
		element: <WorkDetail />,
	},
]);

export default router;
