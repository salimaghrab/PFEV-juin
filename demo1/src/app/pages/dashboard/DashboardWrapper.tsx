/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { Card4 } from '../../../_metronic/partials/content/cards/Card4'


const DashboardPage: FC = () => (
  <>
    <div className='row g-4 g-xl-8'>
      {/** 1 er ligne */}
      <div className='col-sm col-8'>
        <Card4
          icon={'/media/svg/dashboard/d.svg'}
          title={'Table de board'}
          description={''}
        />
      </div>
      <div className='col-sm col-4'>
        <Card4
          icon={'/media/svg/dashboard/doc1.svg'}
          title={'Documents de vente'}
          description={''}
        />
      </div>
      <div className='col-sm col-4'>
        <Card4
          icon={'/media/svg/dashboard/doc1.svg'}
          title={"Documents d'achat"}
          description={''}
        />
      </div>
      <div className='col-sm col-4'>
        <Card4
          icon={'/media/svg/dashboard/frn.svg'}
          title={'Liste Fournisseurs'}
          description={''}
        />
      </div>
      <div className='col-sm col-4'>
        <Card4
          icon={'/media/svg/dashboard/sortiee.svg'}
          title={'Bon de sortie'}
          description={''}
        />
      </div>
      {/** 2 eme ligne */}
      <div className='col-sm col-4'>
        <Card4
          icon={'/media/svg/dashboard/aart.svg'}
          title={'Liste Articles'}
          description={''}
        />
      </div>
      <div className='col-sm col-4'>
        <Card4
          icon={'/media/svg/dashboard/CL.svg'}
          title={'Liste Clients'}
          description={''}
        />
      </div>
      <div className='col-sm col-4'>
        <Card4
          icon={'/media/svg/dashboard/ord.svg'}
          title={'ajouter Ordre Reparation'}
          description={''}
        />
      </div>
      <div className='col-sm col-4'>
        <Card4
          icon={'/media/svg/dashboard/wallet.svg'}
          title={'boruillard comptable'}
          description={''}
        />
      </div>
      <div className='col-sm col-4'>
        <Card4
          icon={'/media/svg/dashboard/BR.svg'}
          title={'Bon de retour Fournisseur'}
          description={''}
        />
      </div>
      <div className='col-sm col-4'>
        <Card4
          icon={'/media/svg/dashboard/vhc.svg'}
          title={'Ajouter Vehicule'}
          description={''}
        />
      </div>
      {/** 4 eme ligne */}
      <div className='col-sm col-4'>
        <Card4
          icon={'/media/svg/dashboard/INVENTAIR.svg'}
          title={'Inventaire'}
          description={''}
        />
      </div>
      <div className='col-sm col-4'>
        <Card4
          icon={'/media/svg/dashboard/MA.svg'}
          title={'Mouvement des articles'}
          description={''}
        />
      </div>
      <div className='col-sm col-4'>
        <Card4
          icon={'/media/svg/dashboard/entree.svg'}
          title={"Bon d'entre"}
          description={''}
        />
      </div>
      <div className='col-sm col-4'>
        <Card4
          icon={'/media/svg/dashboard/doc.svg'}
          title={'Bon de livraison achat'}
          description={''}
        />
      </div>
      <div className='col-sm col-4'>

      </div>

    </div>
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      <DashboardPage />
    </>
  )
}

export { DashboardWrapper }
