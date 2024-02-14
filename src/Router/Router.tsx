import { BrowserRouter, Route, Routes } from "react-router-dom"

import { DefaultLayout } from "../layout/DefaultLayout"
import { About } from "../view/About"
import { Project } from "../view/Blog/Project"
import Contact from "../view/Contact/Contact"
import Home from "../view/Home/Home"
import { Wait } from "../view/Wait"

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Wait />} />
                <Route element={<DefaultLayout />}>
                    <Route element={<Home />} path="/home" />
                    <Route element={<Contact />} path="/contact" />

                    <Route path="/about" element={<About />} />
                    <Route element={<Project />} path="/project/:slug" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
