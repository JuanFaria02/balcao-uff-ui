import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import BodyWrapper from "./components/BodyWrapper/BodyWrapper";
import { CreateAnnouncement } from "../pages/CreateAnnouncement";
import { Login } from "../pages/Login";
import ProtectedRoute from "./components/ProtectedRouter/ProtectedRoute";
import Welcome from "../pages/Welcome/Welcome";
import {AnnouncementDetail, Announcements} from "../pages/Announcements";
import { Perfil } from "../pages/Perfil";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout/>} path="/">
        <Route
          index
          element={
            <BodyWrapper>
                <Welcome/>
            </BodyWrapper>
          }
        />
      </Route>

      <Route element={<Layout />} path="/login">
        <Route
          index
          element={
            <BodyWrapper>
              <Login />
            </BodyWrapper>
          }
        />
      </Route>

      <Route element={<Layout />} path="/anuncios">
        <Route
          index
          element={
            <ProtectedRoute>
              <BodyWrapper>
                <Announcements/>
              </BodyWrapper>
            </ProtectedRoute>
          }
        />
      </Route>

      <Route element={<Layout />} path="/forms/anuncio">
        <Route
          index
          element={
            <ProtectedRoute>
              <BodyWrapper>
                <CreateAnnouncement />
              </BodyWrapper>
            </ProtectedRoute>
          }
        />
      </Route>

        <Route element={<Layout />} path="/anuncio/:id">
            <Route
                index
                element={
                    <ProtectedRoute>
                        <BodyWrapper>
                            <AnnouncementDetail/>
                        </BodyWrapper>
                    </ProtectedRoute>
                }
            />
        </Route>

        <Route element={<Layout />} path="/perfil">
        <Route
          index
          element={
            <ProtectedRoute>
              <BodyWrapper>
                <Perfil/>
              </BodyWrapper>
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
