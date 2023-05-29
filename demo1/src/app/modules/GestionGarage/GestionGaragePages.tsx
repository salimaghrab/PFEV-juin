import { Outlet, Route, Routes } from "react-router-dom";
import { GestionAtelier } from "../GestionGarage/Component/Atelier/GestionAtelier";
import { AffectationAtelier } from "../GestionGarage/Component/Atelier/AffectationAtelier";
import { GestionRemede } from "./Component/Remedes/GestionRemede";
import { Intervention } from "./Component/Intervention/Intervention";
import { PRendezvous } from "./Component/Rendez-Vous/PRendezvous";
import { PriseRendezVous } from "./Component/Rendez-Vous/PriseRendezVous";
import { GestionSymptome } from "./Component/Symptomes/GestionSymptome";
import { GestionVehicule } from "./Component/Vehicule/GestionVehicule";
import { OrdreReparation } from "./Component/OR/OrdreReparation";
import { ReceptionVehicule } from "./Component/Reception/ReceptionVehicule";
import { VehiculeReceptionne } from "./Component/Reception/VehiculeReceptionne";
import { GammeOper } from "./Component/Gamme/GammeOper";

;

const GestionGaragePages = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >   
            <Route
                path="Atelier/GestionAtelier"
                element={
                    <>
                 <GestionAtelier/>
                    </>
                }
            /> 
            <Route
                path="Atelier/affectationAtelier"
                element={
                    <>
                 <AffectationAtelier/>
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
                path="Remedes/GestionRemedes"
                element={
                    <>
                 <GestionRemede/>
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
                path="Intervention/ProchaineIntervention"
                element={
                    <>
                 <Intervention/>
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
                path="RendezVous/PRendezvous"
                element={
                    <>
                 <PRendezvous/>
                    </>
                }
            />
             <Route
                path="RendezVous/PriseRendezVous"
                element={
                    <>
                 <PriseRendezVous/>
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
                path="Symptomes/GestionSymptomes"
                element={
                    <>
                 <GestionSymptome/>
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
                path="vehicule/GestionVehicule"
                element={
                    <>
                 <GestionVehicule/>
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
                path="OrdreReparation/OR"
                element={
                    <>
              <OrdreReparation/>
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
                path="Reception/ReceptionVehicule"
                element={
                    <>
               <ReceptionVehicule/>
                    </>
                }
            />
             <Route
                path="Reception/vehiculereceptionner"
                element={
                    <>
                <VehiculeReceptionne/>
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
                path="GammeOperatoire/GestionGammeO"
                element={
                    <>
                 <GammeOper/>
                    </>
                }
            /> 
        </Route>
    </Routes>
)
export default GestionGaragePages;