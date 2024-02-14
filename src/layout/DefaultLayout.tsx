import { Outlet } from "react-router-dom"
import { Header } from "../view/components/Header"
import { Footer } from "../view/components/Footer"

export function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
