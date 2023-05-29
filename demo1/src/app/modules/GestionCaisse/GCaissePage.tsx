import { Outlet, Route, Routes } from "react-router-dom";
import { ChangerCaisse } from "./component/Caisse/ChangerCaisse";
import { ReglementAvoir } from "./component/Reglement/ReglementAvoir";
import { ReglementColure } from "./component/Reglement/ReglementColure";
import { ReglementGeneral } from "./component/Reglement/ReglementGeneral";
import { ReglementTransfert } from "./component/Reglement/ReglementTransfert";
import { Retenue } from "./component/Retenue/Retenue";
import { ReglementInterne } from "./component/Caisse/ReglementInterne";
import { RecapCaisse } from "./component/Caisse/RecapCaisse";



const GCaissePage = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >   
            <Route
                path="GestionCaisse/ReglementInternes"
                element={
                    <>
                    <ReglementInterne/>
                    
                    </>
                }
            />   
             <Route
                path="GestionCaisse/RecapCaisse"
                element={
                    <>
                    <RecapCaisse/>
                    </>
                }
            />    
             <Route
                path="GestionCaisse/ChangerCaisse"
                element={
                    <>
                    <ChangerCaisse/>
                    </>
                }
            />    
            
        </Route>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >   
            <Route
                path="GestionReglements/ReglementColure"
                element={
                    <>
                    <ReglementColure/>
                    </>
                }
            />   
             <Route
                path="GestionReglements/ReglementTransferes"
                element={
                    <>
                    <ReglementTransfert/>
                    </>
                }
            />  
             <Route
                path="GestionReglements/ReglementAvoir"
                element={
                    <>
                    <ReglementAvoir/>
                    </>
                }
            /> 
               <Route
                path="GestionReglements/ReglementGeneral"
                element={
                    <>
                    <ReglementGeneral/>
                    </>
                }
            /> 
            
            
        </Route>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >   
            <Route
                path="GestionRetenue/Retenue"
                element={
                    <>
                    <Retenue/>
                    </>
                }
            />    
            
            
        </Route>
    </Routes>
)
export default GCaissePage;