import { Outlet, Route, Routes } from "react-router-dom";
import { Fournisseur } from "./Component/Fournisseur/Fournisseur";
import { DemandApp } from "./Component/Achat/DemandApp";
import { DocAchat } from "./Component/Achat/DocAchat";
import { ChiffreAffaireF } from "./Component/Etat/ChiffreAffaireF";
import { GrandLivreF } from "./Component/Etat/GrandLivreF";
import { SoldeFourn } from "./Component/Etat/SoldeFourn";
import { TVAchat } from "./Component/Etat/TVAchat";

const GestionAchatPages= () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >
            <Route
                path="Fournisseurs/GestionFournisseurs"
                element={
                    <>
                       <Fournisseur/>
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
                path="Achat/Demandeapprovisionnement"
                element={
                    <>
                    <DemandApp/>
                    </>
                }
            />  
             <Route
                path="Achat/documentachat"
                element={
                    <>
                    <DocAchat/>
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
                path="Etat/GrandLivrefornisseur"
                element={
                    <>
                       <GrandLivreF/>
                    </>
                }
            />  
             <Route
                path="Etat/chiffreaffairefornisseur"
                element={
                    <>
                       <ChiffreAffaireF/>
                    </>
                }
            /> 
            <Route
                path="Etat/TVA-Achat"
                element={
                    <>
                       <TVAchat/>
                    </>
                }
            /> 
             <Route
                path="Etat/Solde-fournisseur"
                element={
                    <>
                       <SoldeFourn/>
                    </>
                }
            /> 
            
        </Route>
    </Routes>
)
export default GestionAchatPages;