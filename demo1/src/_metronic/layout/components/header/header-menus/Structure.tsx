import { MenuInnerWithSub } from "./MenuInnerWithSub"
import { MenuItem } from "./MenuItem"
import { Container } from "react-bootstrap"

export function Structure() {
  return (
    <>
     <Container fluid>
          {/* begin:Row */}
          <div className='row '>
            {/* begin:Col */}
            <div className='col-sm-3 ' style={{ maxWidth: '110px' }}>
              {/* Dépot */}
              <MenuInnerWithSub
                title='Dépot'
                to='/Structure/Depot'
                fontIcon='bi-archive'
                hasArrow={true}
                menuPlacement='bottom-start'
                menuTrigger={`{default:'click', lg: 'hover'}`}
              >

                <MenuItem to='/Structure/Depot/emplacement' title='Emplacement ' hasBullet={true} />
                <MenuItem to='/Structure/Depot/depot' title='Dépot' hasBullet={true} />
              {/** <MenuItem to='/Structure/Depot/Ajouter-dépot' title='Ajouter dépot' hasBullet={true} /> */}  
              </MenuInnerWithSub>
            </div>
            {/* end:Col */}
            <div style={{ maxWidth: '140px' }}>
              {/* Familles et Articles */}
              <MenuInnerWithSub
                title='Familles et Articless'
                to='/Structure/FamillesArticles'
                fontIcon='bi-person'
                hasArrow={true}
                menuPlacement='bottom-start'
                menuTrigger={`{default:'click', lg: 'hover'}`}
              >
                <MenuItem to='/Structure/FamillesArticles/familles' title='Familles' hasBullet={true} />
                <MenuItem to='/Structure/FamillesArticles/article' title=' Article' hasBullet={true} />
              </MenuInnerWithSub>

            </div>
            <div className="col-sm-3" style={{ maxWidth: '110px' }}>
              {/* Tiers */}
              <MenuInnerWithSub
                title='Tiers'
                to='/Structure/Tiers'
                fontIcon='bi-sticky'
                hasArrow={true}
                menuPlacement='bottom-start'
                menuTrigger={`{default:'click', lg: 'hover'}`}
              >
                <MenuItem to='/Structure/Tiers/tiers' title='Gestion Tiers' hasBullet={true} />
              </MenuInnerWithSub>
            </div>
            <div className="col-sm-3" style={{ maxWidth: '120px' }}>
              {/*  Employés */}
              <MenuInnerWithSub
                title='Employés'
                to='/Structure/Employes'
                fontIcon='bi-layers'
                hasArrow={true}
                menuPlacement='bottom-start'
                menuTrigger={`{default:'click', lg: 'hover'}`}
              >
                <MenuItem to='/Structure/Employes/GestionCollab' title='Gestion des Collaborateur' hasBullet={true} />
              </MenuInnerWithSub>

            </div>
            <div className="col-sm-3" style={{ maxWidth: '130px' }}>
              {/*  Comptabilité */}
              <MenuInnerWithSub
                title='Comptabilité'
                to='/Structure/Comptabilite'
                fontIcon='bi-layers'
                hasArrow={true}
                menuPlacement='bottom-start'
                menuTrigger={`{default:'click', lg: 'hover'}`}
              >
                <MenuItem to='/Structure/Comptabilite/CompteGeneraux' title='Comptes Genereaux' hasBullet={true} />
                <MenuItem to='/Structure/Comptabilite/TauxTaxes' title='Taux de Taxes' hasBullet={true} />
                <MenuItem to='/Structure/Comptabilite/CodeJornaux' title='Code journeaux' hasBullet={true} />
                <MenuItem to='/Structure/Comptabilite/ModelReglement' title='Modele Reglement' hasBullet={true} />
                <MenuItem to='/Structure/Comptabilite/CompteAnalytique' title='comptes Analytiques' hasBullet={true} />
                <MenuItem to='/Structure/Comptabilite/banques' title='Gestion des Banques' hasBullet={true} />

              </MenuInnerWithSub>
            </div>
            <div className="col-sm-3" style={{ maxWidth: '110px' }}>
            <MenuInnerWithSub
                title='Caisse '
                to='/Structure/Caisse'
                fontIcon='bi-layers'
                hasArrow={true}
                menuPlacement='bottom-start'
                menuTrigger={`{default:'click', lg: 'hover'}`}
              >
                <MenuItem to='/Structure/Caisse/GestionCaisse' title='Gestion de Caisse ' hasBullet={true} />
              </MenuInnerWithSub>
            </div>
          </div>
          {/* end:Row */}
       
          </Container>
    </>
  )

}