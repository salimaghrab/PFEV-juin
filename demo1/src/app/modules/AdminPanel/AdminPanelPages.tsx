import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { AffectationArticle } from "./Component/Article/AffectationArticle";
import { ConfigRemise } from "./Component/Article/ConfigRemise";
import { Gammes } from "./Component/Article/Gammes";
import { ModelSerie } from "./Component/Article/ModelSerie";
import { Natures } from "./Component/Article/Natures";
import { ParamPrixArt } from "./Component/Article/ParamPrixArt";
import { ReglageCMUP } from "./Component/Article/ReglageCMUP";
import { UniteStock } from "./Component/Article/UniteStock";
import { ActivationSolvabilite } from "./Component/Tiers/ActivationSolvabilite";
import { AffectationCompteG } from "./Component/Tiers/AffectationCompteG";
import { CalculeEcheance } from "./Component/Tiers/CalculeEcheance";
import { CalculeSoldeClient } from "./Component/Tiers/CalculeSoldeClient";
import { CategorieTarifaire } from "./Component/Tiers/CategorieTarifaire";
import { ConditionLivraison } from "./Component/Tiers/ConditionLivraison";
import { GestionFonction } from "./Component/Tiers/GestionFonction";
import { GestionSoucheClient } from "./Component/Tiers/GestionSoucheTiers";
import { ModeExpedition } from "./Component/Tiers/ModeExpedition";
import { ParametrageCreationTier } from "./Component/Tiers/ParametrageCreationTier";
import { QualificationEmployee } from "./Component/Tiers/QualificationEmployee";
import { QualificationTiers } from "./Component/Tiers/QualificationTiers";
import { TypeColisage } from "./Component/Tiers/TypeColisage";
import { Identification } from "./Component/IDSociete/Identification";
import { Groupe } from "./Component/ParametresAccee/Groupe";
import { Numerotation } from "./Component/ParametresAccee/Numerotation";
import { Profile } from "./Component/ParametresAccee/Profile";
import { StatusDoc } from "./Component/ParametresAccee/StatusDoc";
import { Utilisateurs } from "./Component/ParametresAccee/Utilisateurs";
import { CategorieComptable } from "./Component/DeviseEtCompt/CategorieComptable";
import { ConfigComptabilite } from "./Component/DeviseEtCompt/ConfigComptabilite";
import { ConfigRetenue } from "./Component/DeviseEtCompt/ConfigRetenue";
import { Devisesociete } from "./Component/DeviseEtCompt/DeviseSociete";
import { Devises } from "./Component/DeviseEtCompt/Devises";
import { GestionExo } from "./Component/DeviseEtCompt/GestionExo";
import { SuiviEcart } from "./Component/DeviseEtCompt/SuiviEcart";
import { ConfigDA } from "./Component/Document/ConfigDA";
import { ConfigMail } from "./Component/Document/ConfigMail";
import { ConfigVC } from "./Component/Document/ConfigVC";
import { ListDocReglement } from "./Component/Document/ListDocReglement";
import { ParametrageDocument } from "./Component/Document/ParametrageDocument";
import { ProcessDA } from "./Component/Document/ProcessDA";
import { RefFournisseur } from "./Component/Document/RefFournisseur";
import { WebService } from "./Component/Document/WebService";
import { Logs } from "./Component/Logs/Logs";



const AdminPanelPages = () => (
    <Routes>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
        >
            <Route
                path='Article/Gammes'
                element={
                    <>
                        <Gammes />
                    </>
                }

            />
            <Route
                path="Article/UniteStock"
                element={
                    <>
                        <UniteStock />
                    </>
                }
            />
              <Route
                path="Article/ModelSerie"
                element={
                    <>
                        <ModelSerie />
                    </>
                }
            />
               <Route
                path="Article/ParamPrixArt"
                element={
                    <>
                        <ParamPrixArt />
                    </>
                }
            />
             <Route
                path="Article/Natures"
                element={
                    <>
                        <Natures />
                    </>
                }
            />
              <Route
                path="Article/ConfigRemise"
                element={
                    <>
                        <ConfigRemise/>
                    </>
                }
            />
                  <Route
                path="Article/ReglageCMUP"
                element={
                    <>
                        <ReglageCMUP/>
                    </>
                }
            />
            <Route
                path="Article/AffectationArticles"
                element={
                    <>
                        <AffectationArticle/>
                    </>
                }
            />
            

            <Route index element={<Navigate to='/Structure/Article/Gammes' />} />
        </Route>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }


        >
            <Route
                path="Tiers/ConditionLivraison"
                element={
                    <>
                        <ConditionLivraison />
                    </>
                }
            />
            <Route
                path="Tiers/CategorieTarifaire"
                element={
                    <>
                        <CategorieTarifaire />
                    </>
                }
            />
            <Route
                path="Tiers/QualificationTiers"
                element={
                    <>
                        <QualificationTiers />
                    </>
                }
            />
              <Route
                path="Tiers/GestionSoucheClient"
                element={
                    <>
                        <GestionSoucheClient />
                    </>
                }
            />
             <Route
                path="Tiers/QualificationEmployee"
                element={
                    <>
                        <QualificationEmployee />
                    </>
                }
            />
            <Route
                path="Tiers/ModeExpedition"
                element={
                    <>
                        <ModeExpedition />
                    </>
                }
            />
            <Route
                path="Tiers/TypeColisage"
                element={
                    <>
                        <TypeColisage />
                    </>
                }
            />
              <Route
                path="Tiers/GestionFonction"
                element={
                    <>
                        <GestionFonction />
                    </>
                }
            />
               <Route
                path="Tiers/AffectationCompteG"
                element={
                    <>
                        <AffectationCompteG />
                    </>
                }
            />
               <Route
                path="Tiers/ActivationSolvabilite"
                element={
                    <>
                        <ActivationSolvabilite />
                    </>
                }
            />
             <Route
                path="Tiers/CalculeEcheance"
                element={
                    <>
                        <CalculeEcheance />
                    </>
                }
            />
             <Route
                path="Tiers/CalculeSoldeClient"
                element={
                    <>
                        <CalculeSoldeClient />
                    </>
                }
            />
              <Route
                path="Tiers/ParametrageCreationTier"
                element={
                    <>
                        <ParametrageCreationTier />
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
        path='IdentificationSociete/Identification'
        element={
          <>
            <Identification />
          </>
        }
      />
      

     
     
      <Route index element={<Navigate to='/structure/IdentificationSociete/Identification' />} />
        </Route>
        <Route
      element={
        <>
          <Outlet />
        </>
      }
    >
          <Route
        path='ParametresAccess/Groupe'
        element={
          <>
            <Groupe />
          </>
        }
      />
        <Route
        path='ParametresAccess/Profile'
        element={
          <>
            <Profile />
          </>
        }
        
      />
       
      <Route
        path='ParametresAccess/Utilisateurs'
        element={
          <>
            <Utilisateurs/>
          </>
        }
        
      />
     
      <Route
        path='ParametresAccess/Numerotaiondocuments'
        element={
          <>
            <Numerotation/>
          </>
        }
        
      />
      
      <Route
        path='ParametresAccess/Statusdocuments'
        element={
          <>
            <StatusDoc/>
          </>
        }
        
      />
      <Route index element={<Navigate to='/structure/ParametresAccess/Groupe' />} />
        </Route>
        <Route
            element={
              <>
                <Outlet />
              </>
            }
          >
            <Route
              path='Devisecompt/Devises'
              element={
                <>
                  <Devises/>
                </>
              }
              
            />
             <Route
              path='Devisecompt/DeviseSociete'
              element={
                <>
                  <Devisesociete/>
                </>
              }
              
            /> 
              <Route
              path='Devisecompt/SuiviEcart'
              element={
                <>
                  <SuiviEcart/>
                </>
              }
            />
               <Route
              path='Devisecompt/CategorieComptable'
              element={
                <>
                  <CategorieComptable/>
                </>
              }
            />
             <Route
              path='Devisecompt/GestionExo'
              element={
                <>
                  <GestionExo/>
                </>
              }
            />
              <Route
              path='Devisecompt/ConfigComptabilite'
              element={
                <>
                  <ConfigComptabilite/>
                </>
              }
            />
                <Route
              path='Devisecompt/configRetenue'
              element={
                <>
                  <ConfigRetenue/>
                </>
              }
            />
            <Route index element={<Navigate to='/Structure/Devisecompt/Devises' />} />
        </Route>
        <Route
            element={
                <>
                    <Outlet />
                </>
            }


        >
            <Route
                path="Document/ConfigMail"
                element={
                    <>
                        <ConfigMail />
                    </>
                }
            />
            <Route
                path="Document/ParametrageDocument"
                element={
                    <>
                        <ParametrageDocument />
                    </>
                }
            />
            <Route
                path="Document/RefFournisseur"
                element={
                    <>
                        <RefFournisseur />
                    </>
                }
            />
            <Route
                path="Document/ConfigVC"
                element={
                    <>
                        <ConfigVC />
                    </>
                }
            />
             <Route
                path="Document/ListDocReglement"
                element={
                    <>
                        <ListDocReglement />
                    </>
                }
            />
              <Route
                path="Document/WebService"
                element={
                    <>
                        <WebService />
                    </>
                }
            />
                <Route
                path="Document/ConfigDA"
                element={
                    <>
                        <ConfigDA />
                    </>
                }
            />
               <Route
                path="Document/ProcessDA"
                element={
                    <>
                        <ProcessDA />
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
                path="Logs/Logs"
                element={
                    <>
                    <Logs/>
                    </>
                }
            />
           
        </Route>
    </Routes>
)
export default AdminPanelPages;
