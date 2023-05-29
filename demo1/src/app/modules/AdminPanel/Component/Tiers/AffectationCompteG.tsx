import { Link } from "react-router-dom";

export function AffectationCompteG() {
    return (
        <>
            <div className='card'>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Parametrage Comptes generales</span>
                    </h3>
                </div>
                {/* end::Header */}
                {/* begin::Body */}
                <div className="card-body">
                    <div className='row g-5 g-xxl-8'>
                        <div className='fv-row mb-8'>
                            <div className='col-xl-6'>
                                <input
                                    className=" bg-transparent"
                                    type="checkbox"
                                    style={{ marginLeft: '10px' }}

                                />
                                Compte general client par default
                            </div>
                            <div className='col-xl-6'>
                                <br></br>
                                <label className='form-label fw-bolder text-dark fs-6 mb-3'>Compte collectif client </label>
                                <select className='form-select bg-transparent' style={{ marginLeft: '10px' }}  >
                                    <option selected disabled hidden value=""></option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>
                        </div>

                        <div className='fv-row mb-8'>
                            <div className='col-xl-6'>
                                <input
                                    className=" bg-transparent"
                                    type="checkbox"
                                    style={{ marginLeft: '10px' }}

                                />
                                Compte general Fouenisseur par default
                            </div>
                            <div className='col-xl-6'>
                                <br></br>
                                <label className='form-label fw-bolder text-dark fs-6 mb-3'>Compte collectif Fournisseur </label>
                                <select className='form-select bg-transparent' style={{ marginLeft: '10px' }}  >
                                    <option selected disabled hidden value=""></option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <Link
                        className='btn btn-sm btn-light-primary float-right' to=''    >
                        Valider
                    </Link>
                </div>
                
                    
                
            </div>
            {/* begin::Body */}
        </>
    )
}