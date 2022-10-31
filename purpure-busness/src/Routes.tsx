import { Route, Routes } from "react-router-dom"
import { LandingPage } from "./Pages/landingPage"


export const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<LandingPage/>} />
        </Routes>
    )
}