import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
  Link,
  Outlet
} from "react-router-dom";
import { ContainerPresentationPatternExample } from "./container-and-presentation-pattern"
import { HOCPatternExample } from "./hoc-pattern"
import "./index.css";

const MainLayout = () => {
    return (
        <div id="react-design-pattern-layout">
            <header>
                <Link to="/container-presentation-pattern">
                    Container and Presentation Pattern
                </Link>
                <br/>
                <Link to="/hoc-pattern">
                    HOC Pattern
                </Link>
            </header>
            <div>
                <div>
                    Welcome to the React Training project, Helps you to understand the Container and Presentation
                    and HOC Patterns with examples and explanations.
                    <p>Click on the links to view pattern examples</p>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}

let router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/container-presentation-pattern",
                element: <ContainerPresentationPatternExample/>
            },
            {
                path: "/hoc-pattern",
                element: <HOCPatternExample/>
            }
        ]
    }

]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}