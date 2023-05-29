import { Link } from "react-router-dom";

export function ActivationSolvabilite(){
    return(
        <>
        
        <div className='card'>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Activation de Solvabilite</span>
                    </h3>
                </div>
                {/* end::Header */}
                {/* begin::Body */}
                <div className="card-body">
                    <div className='row g-5 g-xxl-8'>
                        <div className='fv-row mb-8'>
                            <div className='col-xl-6'>
                                <br></br>
                                <label className='form-label fw-bolder text-dark fs-6 mb-3'>Activation Solvabilite</label>
                                <select className='form-select bg-transparent' style={{ marginLeft: '10px' }}  >
                                    <option selected disabled hidden value=""></option>
                                    <option>Bon Commande</option>
                                    <option>Bon Livraison</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <Link
                        className='btn btn-sm btn-light-primary float-right' to=''    >
                        Valider
                    </Link>
                    <Link
                        className='btn btn-sm btn-light-danger float-right'style={{ marginLeft: '10px' }} to=''    >
                    Annuler 
                    </Link>
                </div>
                </div>                       
        </>
    )
}