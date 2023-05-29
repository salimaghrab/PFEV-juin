/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { toAbsoluteUrl } from '../../../_metronic/helpers'

const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById('root')
    if (root) {
      root.style.height = '100%'
    }
    return () => {
      if (root) {
        root.style.height = 'auto'
      }
    }
  }, [])

  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="d-flex flex-column flex-lg-row flex-column-fluid h-100">
          {/* begin::Body */}
          <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
            {/* begin::Form */}
            <div className="d-flex flex-center flex-column flex-lg-row-fluid">
              {/* begin::Wrapper */}
              <div className="w-lg-500px p-10">
                <Outlet />
              </div>
              {/* end::Wrapper */}
            </div>
            {/* end::Form */}
          </div>
          {/* end::Body */}

          {/* begin::Aside */}
          <div
            className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2"
            style={{ backgroundImage: `url(${toAbsoluteUrl('/media/misc/garage.jpg')})` }}
          >
            {/* begin::Content */}
            <div className="d-flex flex-column flex-center py-15 px-5 px-md-15 w-100">

              {/* begin::Image */}
              <img
                className="mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20"
                src={toAbsoluteUrl('')}
                alt=""
              />
              {/* end::Image */}

              {/* begin::Title */}
              <h1 className="text-white fs-2qx fw-bolder text-warning text-center mb-7"style={{ fontFamily: 'Source Sans Pro', fontSize: '32px' }}>Ou l'opportunité de gagner du temps vous attende</h1>
              {/* end::Title */}

              {/* begin::Text */}
              <div className="text-white fs-base text-center">
                Dans cette Platforme ,{' '}
                <a href="#" className="opacity-75-hover text-warning fw-bold me-1">
                  AXIA GARAGE
                </a>
                Optimisez votre efficacité <br />   et boostez votre entreprise 
                <a href="#" className="opacity-75-hover text-warning fw-bold me-1">
                avec notre plateforme intuitive.
                </a>
                Suivi des rendez-vous, gestion des stocks, interactions client fluides... <br />  Tout est là pour faciliter votre quotidien
              </div>
              {/* end::Text */}
            </div>
            {/* end::Content */}
          </div>
          {/* end::Aside */}
        </div>
      </div>
    </div>
  )
}

export { AuthLayout }