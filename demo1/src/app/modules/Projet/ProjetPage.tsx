import { Outlet, Route, Routes } from "react-router-dom";
import { Projets } from "./component/Projets";


const ProjetPage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >
            <Route
                path="projets"
                element={
                    <>
                  <Projets/>
                    </>
                }
            />  
        </Route>
    </Routes>
)
export default ProjetPage;