import "@mantine/core/styles.css"; //import Mantine V7 styles needed by MRT
import "@mantine/dates/styles.css"; //if using mantine date picker features
import "mantine-react-table/styles.css"; //import MRT styles

import "./index.css";

import { MantineProvider } from "@mantine/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./App.jsx";
import PlayersList from "./pages/PlayersList";
import TeamList from "./pages/TeamList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <TeamList />,
            },
            {
                path: "/team/:id",
                element: <PlayersList />,
            },
        ],

        errorElement: (
            <div>
                <h1>Error</h1>
                <p>Page not found</p>
                <Link to="/">Go to home</Link>
            </div>
        ),
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <MantineProvider>
            <RouterProvider router={router} />
        </MantineProvider>
    </StrictMode>
);
