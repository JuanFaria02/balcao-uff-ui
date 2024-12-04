import { Outlet } from "react-router-dom"
import React from "react"
import { HeaderNav } from "../../../components/structure/HeaderNav"
import Footer from "../../../components/structure/Footer/Footer"

export const Layout = React.memo(() => {
    return (
        <div className="h-full">
            <HeaderNav/>
             <Outlet/>
            <Footer/>
        </div>  
    )
}
)

