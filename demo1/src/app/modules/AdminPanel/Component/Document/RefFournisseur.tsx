import { Link } from "react-router-dom";

export function RefFournisseur(){
    return(
        <>
       <div className='card'>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Modificatin reference fourniseur </span>
          </h3>
        </div>
        {/* end::Header */}
        {/* begin::Body */}
        <div className="card-body">
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-4 mb-1'>voulez-vous activer la modification des prix par fournisseur: </span>
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
                Modifier les  Prix
              </div>
            </div>

          </div>
          <div className='card-toolbar'>
            <Link
              className='btn btn-sm btn-light-primary float-right' to=''    >
              Valider
            </Link>
            <Link
              className='btn btn-sm btn-light-danger float-right' to=''  style={{ marginLeft: '10px' }}  >
              Fermer
            </Link>
            </div>
        </div>
        {/* begin::Body */}
      </div>
        </>
    )
}