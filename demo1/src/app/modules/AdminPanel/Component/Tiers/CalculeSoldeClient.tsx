import { Link } from "react-router-dom";

export function CalculeSoldeClient(){
    return(
        <>
          <div className='card '>
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Calcule Solde Client</span>
                    </h3>
                </div>
                <div className="card-body">
                    <br></br>
                    <div className='row'>
                        {/* begin::Form group Activite */}
                        <div className='col'>
                            <div className='fv-row'>
                            <label className='form-label fw-bolder text-dark fs-6'> Calcule solde client</label>
                                <input
                                    className=" bg-transparent"
                                    type="radio"
                                    style={{ marginLeft: '15px' }}
                                />
                                Tous reglements
                            </div>
                        </div>
                        {/* end::Form group */}
                       
                            <div className='fv-row'>
                                <input
                                    className=" bg-transparent"
                                    type="radio"
                                    style={{ marginLeft: '150px' }}
                                />
                                Reglements echus
                            </div>
    
                    </div>
                    <br></br>
                    <Link
                        className='btn btn-sm btn-light-primary float-right' to=''    >
                        Valider
                    </Link>
                </div>
                {/* end::Form group */}
            </div>
        </>
    )
}