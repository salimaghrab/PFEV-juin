export function ConfigVC() {
    return (
        <>
            <div className='card '>
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Configuration vente Comptoire</span>
                    </h3>
                </div>
                <div className="card-body">
                    <div className='row'>
                        {/* begin::Form group Activite */}
                        <div className='col'>
                            <div className='fv-row'>
                                <label className='form-label fw-bolder text-dark fs-6'> Activation vente Comptoire</label>
                                <input
                                    className=" bg-transparent"
                                    type="radio"
                                    style={{ marginLeft: '200px' }}
                                />
                                Activer
                            </div>
                        </div>
                        {/* end::Form group */}
                        <div className='col'>
                            <div className='fv-row'>
                                <input
                                    className=" bg-transparent"
                                    type="radio"
                                    style={{ marginLeft: '10px' }}
                                />
                                Desactiver
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className='row'>
                        {/* begin::Form group Activite */}
                        <div className='col'>
                            <label className='form-label fw-bolder text-dark fs-6'> Configuration ligne de Document</label>
                            <div className='fv-row'>
                                <input
                                    className=" bg-transparent"
                                    type="radio"
                                    style={{ marginLeft: '10px' }}
                                />
                                1 Document pour chaque ligne
                            </div>
                            <br></br>
                            {/* end::Form group */}
                            <div className='fv-row'>
                                <input
                                    className=" bg-transparent"
                                    type="radio"
                                    style={{ marginLeft: '10px' }}

                                />
                                Toutes les lignes dans un document
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className='row'>
                        {/* begin::Form group Activite */}
                        <div className='col'>
                            <label className='form-label fw-bolder text-dark fs-6'> Document vente Comptoire souhaite</label>
                            <div className='fv-row'>
                                <input
                                    className=" bg-transparent"
                                    type="radio"
                                    style={{ marginLeft: '10px' }}
                                />
                                Bon de commande
                            </div>
                            <br></br>
                            {/* end::Form group */}
                            <div className='fv-row'>
                                <input
                                    className=" bg-transparent"
                                    type="radio"
                                    style={{ marginLeft: '10px' }}
                                />
                                Bon de Livraison
                            </div>
                        </div>
                    </div>
                </div>
                {/* end::Form group */}
            </div>
        </>
    )
}