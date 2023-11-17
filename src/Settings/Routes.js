import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home, LikeTovars, Profile, Shop, TovarPage } from "../Private";
export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/*" element={<Home/>}/>
            <Route path="/shopping" element={<Shop/>}/>
            <Route path="/tovar/:id" element={<TovarPage/>} />
            <Route path="/like-tovars" element={<LikeTovars/>}/>
            <Route path="/profile-settings" element={<Profile/>}/>  
        </>
    )
)