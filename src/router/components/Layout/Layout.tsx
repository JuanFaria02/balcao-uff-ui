import { Outlet } from "react-router-dom"
import { Container } from "./styled"
import React from "react"
import { HeaderNav } from "../../../components/structure/HeaderNav"
import Footer from "../../../components/structure/Footer/Footer"
import { AuthProvider } from "../../Auth/auth"

export const Layout = React.memo(() => {
    return (
        <AuthProvider>
        <Container>
                <HeaderNav/>
                <Outlet/>
                <Footer/>
        </Container>  
       </AuthProvider>
    )
}
)

