import { Outlet } from "react-router-dom"
import { Container } from "./styled"
import React from "react"
import { HeaderNav } from "../../../components/structure/HeaderNav"
import Footer from "../../../components/structure/Footer/Footer"

export const Layout = React.memo(() => {
    return (
        <Container>
            <HeaderNav/>
             <Outlet/>
            <Footer/>
        </Container>  
    )
}
)

