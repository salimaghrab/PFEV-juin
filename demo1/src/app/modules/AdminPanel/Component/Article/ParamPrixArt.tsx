import { Link } from "react-router-dom";
import { KTSVG } from "../../../../../_metronic/helpers";

export function ParamPrixArt() {
  return (
    <>
      <div className='card'>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Configuration du Prix d'Article</span>
          </h3>
        </div>
        {/* end::Header */}
        {/* begin::Body */}
        <div className="card-body">
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>achat </span>
          </h3>
          <br></br>
          <div className='row g-5 g-xxl-8'>
            <div className='fv-row mb-8'>
              <div className='col-xl-6'>
                <input
                  className=" bg-transparent"
                  type="checkbox"
                  style={{ marginLeft: '10px' }}

                />
                Derniere prix d'achat
              </div>

              <br></br>
              <div className='col-xl-6'>
                <input
                  className=" bg-transparent"
                  type="checkbox"
                  style={{ marginLeft: '10px' }}
                />
                Prix d'achat
              </div>
            </div>

          </div>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>vente</span>
          </h3>
          <br></br>
          <div className='row g-5 g-xxl-8'>
            <div className='fv-row mb-8'>
              <div className='col-xl-6'>
                <input
                  className=" bg-transparent"
                  type="checkbox"
                  style={{ marginLeft: '10px' }}

                />
                modification automatique des prix des categories tarifaires
              </div>

            </div>
          </div>
          <div className='card-toolbar'>
            <Link
              className='btn btn-sm btn-light-primary float-right' to=''    >
              Valider
            </Link>
            </div>
        </div>
        {/* begin::Body */}
      </div>
    </>
  )
}