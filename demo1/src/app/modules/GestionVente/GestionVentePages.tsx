import { Outlet, Route, Routes } from "react-router-dom";
import { BalenceClient } from "../GestionVente/Component/Comptabilite/BalenceClient";
import { ReglementClient } from "../GestionVente/Component/Comptabilite/ReglementClient";
import { ChiffreAffaires } from "./Component/Echeance/ChiffreAffaires";
import { GrandLivreClient } from "./Component/Echeance/GrandLivreClient";
import { SoldeClient } from "./Component/Echeance/SoldeClient";
import { AvoirFinance } from "./Component/Vente/AvoirFinance";
import { DocVente } from "./Component/Vente/DocVente";
import { Client } from "./Component/Client/Client";

const GestionVentePages= () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >
            <Route
                path="Comptabilite/BalanceClient"
                element={
                    <>
                        <BalenceClient/>
                    </>
                }
            />
            <Route
                path="Comptabilite/chiffreaffaires"
                element={
                    <>
                        
                    </>
                }
            />
            <Route
                path="Comptabilite/reglementsclients"
                element={
                    <>
                       <ReglementClient/> 
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
                path="Echeance/GrandLivreC"
                element={
                    <>
                        <GrandLivreClient/>
                    </>
                }
            />
            <Route
                path="Echeance/chiffreaffaires"
                element={
                    <>
                      <ChiffreAffaires/>  
                    </>
                }
            />
            <Route
                path="Echeance/Soldeclient"
                element={
                    <>
                      <SoldeClient/>  
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
                path="DocVente"
                element={
                    <>
                        <DocVente/>
                    </>
                }
            />
            <Route
                path="AvoirFinance"
                element={
                    <>
                        <AvoirFinance/>
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
                path="Clients/GestionClient"
                element={
                    <>
                    <Client/>
                    </>
                }
            /> 
        </Route>
    </Routes>
)
export default GestionVentePages;