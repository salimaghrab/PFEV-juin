import { Outlet, Route, Routes } from "react-router-dom";
import { GCaisse } from "./component/GCaisse";


const CaissePage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >
            <Route
                path="GestionCaisse"
                element={
                    <>
                    <GCaisse/>
                    </>
                }
            /> 
        </Route>
    </Routes>
)
export default CaissePage;