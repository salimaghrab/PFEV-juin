import { Outlet, Route, Routes } from "react-router-dom";
import { Tiers } from "./component/Tiers";

const StructureTiersPage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >
            <Route
                path="tiers"
                element={
                    <>
                    <Tiers/>
                    </>
                }
            /> 
        </Route>
    </Routes>
)
export default StructureTiersPage;