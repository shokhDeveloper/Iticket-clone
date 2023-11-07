import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home } from "../Private";
export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home/>}/>
        </>
    )
)