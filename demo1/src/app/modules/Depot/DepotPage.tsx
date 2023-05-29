import { Outlet, Route, Routes } from "react-router-dom";
import { Depot } from "./Component/Depot";
import { Emplacement } from "./Component/Emplacement";

const DepotPage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }


        >
            <Route
                path="emplacement"
                element={
                    <>
                        <Emplacement />
                    </>
                }
            /> 
            <Route
                path="depot"
                element={
                    <>
                        <Depot />
                    </>
                }
            /> 
        </Route>
    </Routes>
)
export default DepotPage;