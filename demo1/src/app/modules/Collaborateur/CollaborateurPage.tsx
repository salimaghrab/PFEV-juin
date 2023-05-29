import { Outlet, Route, Routes } from "react-router-dom";
import { Collaborateur } from "./component/Collaborateur";

const CollaborateurPage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >
            <Route
                path="GestionCollab"
                element={
                    <>
                    <Collaborateur/>
                    </>
                }
            /> 
        </Route>
    </Routes>
)
export default CollaborateurPage;