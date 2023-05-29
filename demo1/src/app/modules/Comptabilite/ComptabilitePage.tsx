import { Outlet, Route, Routes } from "react-router-dom";
import { TauxTaxes } from "./component/TauxTaxes";
import { CodeJornaux } from "./component/CodeJornaux";
import { ModelReglement } from "./component/ModelReglement";
import { CompteAnalytique } from "./component/CompteAnalytique";
import { CompteGeneraux } from "./component/CompteGeneraux";
import { Banques } from "./component/Banques";

const ComptabilitePage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >
            <Route
                path="TauxTaxes"
                element={
                    <>
                    <TauxTaxes/>
                    </>
                }
            /> 
             <Route
                path="CodeJornaux"
                element={
                    <>
                    <CodeJornaux/>
                    </>
                }
            /> 
            <Route
                path="ModelReglement"
                element={
                    <>
                    <ModelReglement/>
                    </>
                }
            /> 
             <Route
                path="CompteAnalytique"
                element={
                    <>
                    <CompteAnalytique/>
                    </>
                }
            /> 
            <Route
                path="CompteGeneraux"
                element={
                    <>
                    <CompteGeneraux/>
                    </>
                }
            /> 
            <Route
                path="banques"
                element={
                    <>
                    <Banques/>
                    </>
                }
            /> 
            
        </Route>
    </Routes>
)
export default ComptabilitePage;