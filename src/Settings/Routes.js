import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home, LikeTovars, TovarPage } from "../Private";
export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/*" element={<Home/>}/>
            <Route path="/shopping" element={<h1>Hello</h1>}/>
            <Route path="/tovar/:id" element={<TovarPage/>} />
            <Route path="/like-tovars" element={<LikeTovars/>}/>
        </>
    )
)