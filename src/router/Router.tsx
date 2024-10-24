import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import BodyWrapper from "./components/BodyWrapper/BodyWrapper"
import { CreateAnnouncement } from "../pages/CreateAnnouncement"

const Router = () => (
    <BrowserRouter>
        <Routes>
          <Route element = {<Layout/>} path={"/"}>
                <Route
                    index
                    element={
                    <BodyWrapper>
                        {/* TODO Componente ABOUT */}
                        
                    </BodyWrapper>
                    }
                />
            </Route> 
            <Route element = {<Layout/>} path={"/forms/anuncio"}>
                <Route
                    index
                    element={
                    <BodyWrapper>
                        <CreateAnnouncement/>
                    </BodyWrapper>
                    }
                />
            </Route> 
        </Routes>
    </BrowserRouter>
)

export default Router