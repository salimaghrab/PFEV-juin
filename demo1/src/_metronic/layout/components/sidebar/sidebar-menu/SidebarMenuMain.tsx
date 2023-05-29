/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Dashboard </span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='/admin/IdentificationSociete'
        title='Identification société'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <SidebarMenuItem to='/admin/IdentificationSociete/identification' title='identification' hasBullet={true}>
        </SidebarMenuItem>
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to="/admin/ParametresAccess"
        title="Parametres d'accés"
        icon='/media/icons/duotune/communication/com006.svg'
        fontIcon='bi-person'
      >
        <SidebarMenuItem to='/admin/ParametresAccess/Groupe' title='Groupe' hasBullet={true} />
        <SidebarMenuItem to='/admin/ParametresAccess/Utilisateurs' title='Utilisateurs' hasBullet={true} />
        <SidebarMenuItem to='/admin/ParametresAccess/Profile' title='Profils' hasBullet={true} />
        <SidebarMenuItem to='/admin/ParametresAccess/Numerotaiondocuments' title='Numérotaion des documents' hasBullet={true} />
        <SidebarMenuItem to='/admin/ParametresAccess/Statusdocuments' title='Status des documents' hasBullet={true} />

      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/admin/Devisecompt'
        title='Devis et Comptabilités'
        fontIcon='bi-sticky'
        icon='/media/icons/duotune/finance/fin008.svg'
      >
        <SidebarMenuItem to='/admin/Devisecompt/DeviseSociete' title='Devise société' hasBullet={true} />
        <SidebarMenuItem to='/admin/Devisecompt/Devises' title='Devises' hasBullet={true} />
        <SidebarMenuItem to='/admin/Devisecompt/CategorieComptable' title='Categorie Comptable' hasBullet={true} />
        <SidebarMenuItem to='/admin/Devisecompt/configRetenue' title='Configuration de la Retenue' hasBullet={true} />
        <SidebarMenuItem to='/admin/Devisecompt/SuiviEcart' title='Suivi Ecart ' hasBullet={true} />
        <SidebarMenuItem to='/admin/Devisecompt/GestionExo' title='Gestion Exoneration' hasBullet={true} />
        <SidebarMenuItem to='/admin/Devisecompt/ConfigComptabilite' title='Configuration Comptabilité' hasBullet={true} />

      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/admin/Tiers'
        title='Tiers'
        icon='/media/icons/duotune/finance/fourn.svg'
        fontIcon='bi-layers'
      >
        <SidebarMenuItem to='/admin/Tiers/ConditionLivraison' title='Condition de livraison' hasBullet={true} />
        <SidebarMenuItem to='/admin/Tiers/CategorieTarifaire' title='Categorie Tarifaire' hasBullet={true} />
        <SidebarMenuItem to='/admin/Tiers/QualificationTiers' title='Qualifications Tiers' hasBullet={true} />
        <SidebarMenuItem to="/admin/Tiers/ModeExpedition" title="Mode d'expidition" hasBullet={true} />
        <SidebarMenuItem to='/admin/Tiers/TypeColisage' title='Type de Colisage' hasBullet={true} />
        <SidebarMenuItem to='/admin/Tiers/AffectationCompteG' title='Affectation Compte General' hasBullet={true} />
        <SidebarMenuItem to='/admin/Tiers/ActivationSolvabilite' title='Activation Solvabilite' hasBullet={true} />
        <SidebarMenuItem to='/admin/Tiers/ParametrageCreationTier' title='Parametrage creation Tiers' hasBullet={true} />
        <SidebarMenuItem to="/admin/Tiers/CalculeEcheance" title="Calcul d'Echeance" hasBullet={true} />
        <SidebarMenuItem to='/admin/Tiers/GestionSoucheClient' title='Gestion Souche Tiers' hasBullet={true} />
        <SidebarMenuItem to='/admin/Tiers/CalculeSoldeClient' title='Calcul Solde Client' hasBullet={true} />
        <SidebarMenuItem to='/admin/Tiers/QualificationEmployee' title='Qualification Employes' hasBullet={true} />
        <SidebarMenuItem to='/admin/Tiers/GestionFonction' title='Gestion des Fonctions' hasBullet={true} />

      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/admin/Article'
        title='Article'
        icon='/media/icons/duotune/general/box.svg'
        fontIcon='bi-layers'
      >
        <SidebarMenuItem to='/admin/Article/Gammes'title='Gammes' hasBullet={true}/>
        <SidebarMenuItem to='/admin/Article/UniteStock'title='Unites de stockage' hasBullet={true}/>
        <SidebarMenuItem to='/admin/Article/ConfigRemise'title='Configuration remise' hasBullet={true}/>
        <SidebarMenuItem to='/admin/Article/AffectationArticles'title='Affectation des Articles' hasBullet={true}/>
        <SidebarMenuItem to='/admin/Article/ModelSerie'title='Modele Serie' hasBullet={true}/>
        <SidebarMenuItem to='/admin/Article/ParamPrixArt'title='Parametrage Prix Article' hasBullet={true}/>
        <SidebarMenuItem to='/admin/Article/ReglageCMUP'title='Reglage CMUP' hasBullet={true}/>
        <SidebarMenuItem to='/admin/Article/Natures'title='Natures' hasBullet={true}/>

      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/admin/Document'
        title='Document'
        icon='/media/icons/duotune/files/fil012.svg'
        fontIcon='bi-layers'
      >
        <SidebarMenuItem to='/admin/Document/ConfigMail'title='Configuration E-mail' hasBullet={true}/>
        <SidebarMenuItem to='/admin/Document/Gestion-ds-champs-libres'title='Gestion des champs libres' hasBullet={true}/>
        <SidebarMenuItem to='/admin/Document/ParametrageDocument'title='Parametrage document' hasBullet={true}/>
        <SidebarMenuItem to='/admin/Document/ListDocReglement'title='Listes des natures reglements' hasBullet={true}/>
        <SidebarMenuItem to='/admin/Document/ConfigVC'title='Configuration vente comptoir' hasBullet={true}/>
        <SidebarMenuItem to='/admin/Document/RefFournisseur'title='Reference fournisseur' hasBullet={true}/>
        <SidebarMenuItem to='/admin/Document/WebService'title='Web service' hasBullet={true}/>
        <SidebarMenuItem to='/admin/Document/ConfigDA'title='Configuration DA' hasBullet={true}/>
        <SidebarMenuItem to='/admin/Document/ProcessDA'title='Process DA' hasBullet={true}/>

      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/admin/Logs'
        title='Logs'
        icon='/media/icons/duotune/general/gen048.svg'
        fontIcon='bi-layers'
      >
        <SidebarMenuItem to='/admin/Logs/Logs'title='Logs' hasBullet={true}/>
        <SidebarMenuItem to='/admin/Logs/Historique'title='Historique' hasBullet={true}/>
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/admin/Garage'
        title='Garage'
        icon='/media/icons/duotune/general/gen001.svg'
        fontIcon='bi-layers'
      >
        <SidebarMenuItem to='/admin/Garage/affectationatelier'title='Affectation Atelier' hasBullet={true}/>
      </SidebarMenuItemWithSub>
     
    </>
  )
}

export {SidebarMenuMain}
