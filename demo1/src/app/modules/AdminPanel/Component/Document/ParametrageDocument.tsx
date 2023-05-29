import { KTSVG } from '../../../../../_metronic/helpers';

export function ParametrageDocument() {
    return (
        <>
            <div className='card '>
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Affectation Equipement Achat</span>
                    </h3>
                </div>
                <div className="card-body">
                    <div className='row'>

                        {/* begin::Form group Activite */}
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <input
                                    className=" bg-transparent"
                                    type="checkbox"
                                    style={{ marginLeft: '10px' }}

                                />
                                Equipement Obligatoire



                            </div>
                            {/* end::Form group */}


                            {/* begin::Form group FormeJuridique */}

                            <div className='fv-row mb-8'>
                                <input
                                    className=" bg-transparent"
                                    type="checkbox"
                                    style={{ marginLeft: '10px' }}

                                />
                                Aucun

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
                        <span className='card-label fw-bold fs-3 mb-1'>Affectation Equipement Vente</span>
                    </h3>
                </div>
                <div className="card-body">
                    <div className='row'>

                        {/* begin::Form group Activite */}
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <input
                                    className=" bg-transparent"
                                    type="checkbox"
                                    style={{ marginLeft: '10px' }}

                                />
                                Equipement Obligatoire



                            </div>
                            {/* end::Form group */}


                            {/* begin::Form group FormeJuridique */}

                            <div className='fv-row mb-8'>
                                <input
                                    className=" bg-transparent"
                                    type="checkbox"
                                    style={{ marginLeft: '10px' }}

                                />
                            Aucun 

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
                        <span className='card-label fw-bold fs-3 mb-1'>Projet</span>
                    </h3>
                </div>
                <div className="card-body">
                    <div className='row'>

                        {/* begin::Form group Activite */}
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <input
                                    className=" bg-transparent"
                                    type="checkbox"
                                    style={{ marginLeft: '10px' }}

                                />
                                Projet Obligatoire



                            </div>
                            {/* end::Form group */}


                            {/* begin::Form group FormeJuridique */}

                            <div className='fv-row mb-8'>
                                <input
                                    className=" bg-transparent"
                                    type="checkbox"
                                    style={{ marginLeft: '10px' }}

                                />
                                 Aucun 

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
                        <span className='card-label fw-bold fs-3 mb-1'>Justification</span>
                    </h3>
                </div>
                <div className="card-body">
                    <div className='row'>

                        {/* begin::Form group Activite */}
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <input
                                    className=" bg-transparent"
                                    type="checkbox"
                                    style={{ marginLeft: '10px' }}

                                />
                                Justification Obligatoire dans le demande d'approvisionnement 



                            </div>
                            {/* end::Form group */}


                            {/* begin::Form group FormeJuridique */}

                            <div className='fv-row mb-8'>
                                <input
                                    className=" bg-transparent"
                                    type="checkbox"
                                    style={{ marginLeft: '10px' }}

                                />
                                Justification Obligatoire dans le devis

                            </div>

                        </div>
                        {/* end::Form group */}

                    </div>
                </div>
            </div>
            <a
                        href='#'
                        className='btn btn-sm btn-light-primary'
                    >
                        <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                        Valider
                    </a>
        </>
    )
}
