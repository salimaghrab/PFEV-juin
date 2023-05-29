import { Link } from "react-router-dom";

export function ConfigRetenue() {
    return (
        <>
            <div className="card bg-light">
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start text-white text-center'>
                        <span className='card-label fw-bold fs-3 mb-1'>Configuration De Retenue</span>
                    </h3>
                </div>
                <div className="card-body">
                    <div className='card '>
                          
                        <div className="card-body">
                            <div className='row'>

                                {/* begin::Form group Activite */}
                                <div className='col-xl-6'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Montant de la retenue</label>
                                        <input
                                            type='number'
                                            autoComplete='off'
                                            className=
                                            'form-control bg-transparent'
                                        />    
                                    </div>
                                    {/* end::Form group */}
                                    </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className='card '>
                        <div className='card-header border-0 pt-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bold fs-3 mb-1'>Mode d'alert si le montant est superieur a  0</span>
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className='row'>

                                {/* begin::Form group Activite */}
                                <div className='col-xl-6'>
                                    <div className='fv-row mb-8'>
                                        <input
                                            className=" bg-transparent"
                                            type="radio"
                                            style={{ marginLeft: '10px' }}

                                        />
                                        Aucun action



                                    </div>
                                    {/* end::Form group */}


                                    {/* begin::Form group FormeJuridique */}

                                    <div className='fv-row mb-8'>
                                        <input
                                            className=" bg-transparent"
                                            type="radio"
                                            style={{ marginLeft: '10px' }}

                                        />
                                        Blockage 

                                    </div>
                                    <div className='fv-row mb-8'>
                                        <input
                                            className=" bg-transparent"
                                            type="radio"
                                            style={{ marginLeft: '10px' }}

                                        />
                                        Alert 

                                    </div>

                                </div>
                                {/* end::Form group */}

                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className='card '>
                        <div className='card-header border-0 pt-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bold fs-3 mb-1'>Montant si le montant est superieur a 0</span>
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className='row'>

                                {/* begin::Form group Activite */}
                                <div className='col-xl-6'>
                                    <div className='fv-row mb-8'>
                                        <input
                                            className=" bg-transparent"
                                            type="radio"
                                            style={{ marginLeft: '10px' }}

                                        />
                                        Aucun action



                                    </div>
                                    {/* end::Form group */}


                                    {/* begin::Form group FormeJuridique */}

                                    <div className='fv-row mb-8'>
                                        <input
                                            className=" bg-transparent"
                                            type="radio"
                                            style={{ marginLeft: '10px' }}

                                        />
                                        Blockage 

                                    </div>
                                    <div className='fv-row mb-8'>
                                        <input
                                            className=" bg-transparent"
                                            type="radio"
                                            style={{ marginLeft: '10px' }}

                                        />
                                        Alert 

                                    </div>

                                </div>
                                {/* end::Form group */}

                            </div>
                        </div>
                    </div>
                    <Link
          className='btn btn-sm btn-light-success' to='' >
            Confirmer
          </Link>
                </div>

            </div>
        </>
    )
}