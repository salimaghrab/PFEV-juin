import { FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import DepotPage from '../modules/Depot/DepotPage'
import FamilleArticlePage from '../modules/FamilleArticle/FamilleArticlePage'
import StructureTiersPage from '../modules/StructureTiers/StructureTiersPage'
import CaissePage from '../modules/Caisse/CaissePage'
import CollaborateurPage from '../modules/Collaborateur/CollaborateurPage'
import ComptabilitePage from '../modules/Comptabilite/ComptabilitePage'
import ProjetPage from '../modules/Projet/ProjetPage'
import GCaissePage from '../modules/GestionCaisse/GCaissePage'
import StockPage from '../modules/GSStock/StockPage'
import { RDVClient } from '../modules/auth/client/RDVClient'
import AdminPanelPages from '../modules/AdminPanel/AdminPanelPages'
import GestionGaragePages from '../modules/GestionGarage/GestionGaragePages'
import GestionVentePages from '../modules/GestionVente/GestionVentePages'
import GestionAchatPages from '../modules/GestionAchat/GestonAchatPages'
const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/loginAdmin' element={<Navigate to='/dashboard' />} />
        <Route path='/auth/login/RDVC'  element={<RDVClient />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path='admin/*'
          element={
            <SuspensedView>
              <AdminPanelPages />
            </SuspensedView>
          }
        />
        <Route
          path='/admin/Garage/*'
          element={
            <SuspensedView>
              <GestionGaragePages/>
            </SuspensedView>
          }
        />
         <Route
          path='/Structure/Depot/*'
          element={
            <SuspensedView>
              <DepotPage />
            </SuspensedView>
          }
        />
        <Route
          path='/Structure/FamillesArticles/*'
          element={
            <SuspensedView>
              <FamilleArticlePage />
            </SuspensedView>
          }
        />
        <Route
          path='/Structure/Tiers/*'
          element={
            <SuspensedView>
              <StructureTiersPage />
            </SuspensedView>
          }
        />
         <Route
          path='/Structure/Caisse/*'
          element={
            <SuspensedView>
              <CaissePage />
            </SuspensedView>
          }
        />
            <Route
          path='/Structure/Employes/*'
          element={
            <SuspensedView>
            <CollaborateurPage/>
            </SuspensedView>
          }
        />
         <Route
          path='/Structure/Comptabilite/*'
          element={
            <SuspensedView>
              <ComptabilitePage/>
            </SuspensedView>
          }
        />
         <Route
          path='/Structure/Projet/*'
          element={
            <SuspensedView>
              <ProjetPage/>
            </SuspensedView>
          }
        />
           <Route
          path='/GestionVente/*'
          element={
            <SuspensedView>
              <GestionVentePages/>
            </SuspensedView>
          }
        />
         <Route
          path='/GestionVente/Vente/*'
          element={
            <SuspensedView>
              <ProjetPage/>
            </SuspensedView>
          }
        />
        <Route
          path='/GestionGarage/*'
          element={
            <SuspensedView>
              <GestionGaragePages/>
            </SuspensedView>
          }
        />
       
        <Route
          path='/GestionCaisse/*'
          element={
            <SuspensedView>
              <GCaissePage/>
            </SuspensedView>
          }
        />

        <Route
          path='/GestionA/*'
          element={
            <SuspensedView>
              <GestionAchatPages/>
            </SuspensedView>
          }
        />
        <Route
          path='/GestionStock/*'
          element={
            <SuspensedView>
              <StockPage/>
            </SuspensedView>
          }
        />
        
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
