import { Link } from "react-router-dom";

export function ReglageCMUP(){
    return(
        <>
         <div className='card'>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Parametrage CMUP</span>
          </h3>
        </div>
        {/* end::Header */}
        {/* begin::Body */}
        <div className="card-body">
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Reglage CMUP </span>
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
                HT(Hors Taxe )
              </div>

              <br></br>
              <div className='col-xl-6'>
                <input
                  className=" bg-transparent"
                  type="checkbox"
                  style={{ marginLeft: '10px' }}
                />
                TTC(Tous Taxes Compris)
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