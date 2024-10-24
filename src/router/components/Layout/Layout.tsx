import { Outlet } from "react-router-dom"
import { Container } from "./styled"
import React from "react"
import { HeaderNav } from "../../../components/structure/HeaderNav"

export const Layout = React.memo(() => {
    return (
       <Container>
            <HeaderNav/>
            <Outlet/>
       </Container>  
    )
}
)

