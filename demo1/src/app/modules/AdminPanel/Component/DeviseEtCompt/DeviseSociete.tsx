export function Devisesociete() {
    return (
        <>
            <div className='card '>
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Monnaie et Format</span>
                    </h3>
                </div>
                <div className="card-body"></div>
                <div className='card '>
                    <div className='card-header border-0 pt-5'>
                        <h3 className='card-title align-items-start flex-column'>
                            <span className='card-label fw-bold fs-3 mb-1'>Monnaie de tenue comerciale</span>
                        </h3>
                    </div>
                    <div className="card-body">
                        <div className='row'>
                            <div className='col-xl-6'>
                                {/* begin::Form group Devise */}
                                <div className='fv-row mb-8'>
                                    <label className='form-label fw-bolder text-dark fs-6'>Devise</label>
                                    <select className="form-select bg-transparent">
                                        <option>Dinar Tunisien</option>
                                        <option>EURO</option>
                                        <option>Dollar</option>
                                    </select>
                                </div>
                            </div>
                            {/* end::Form group */}
                            {/* begin::Form group Sigle */}
                            <div className='col-xl-6'>
                                <div className='fv-row mb-8'>
                                    <label className='form-label fw-bolder text-dark fs-6'>Sigle</label>
                                    <input
                                        className="form-control bg-transparent"
                                        placeholder='TND'
                                        type='text'
                                        autoComplete='off'
                                        readOnly

                                    />

                                </div>
                                {/* end::Form group */}

                            </div>
                            {/* begin::Form group Unite */}
                            <div className='col-xl-6'>
                                <div className='fv-row mb-8'>
                                    <label className='form-label fw-bolder text-dark fs-6'>Unite</label>
                                    <input
                                        className="form-control bg-transparent"
                                        placeholder='DINARS'
                                        type='text'
                                        autoComplete='off'
                                        readOnly

                                    />
                                </div>
                                {/* end::Form group */}
                            </div>
                            {/* begin::Form group Sous Unite */}
                            <div className='col-xl-6'>
                                <div className='fv-row mb-8'>
                                    <label className='form-label fw-bolder text-dark fs-6'>Sous Unite</label>
                                    <input
                                        className="form-control bg-transparent"
                                        placeholder='MILLIME'
                                        type='text'
                                        autoComplete='off'
                                        readOnly
                                    />

                                </div>
                                {/* end::Form group */}
                            </div>
                            {/* begin::Form group FOrmat */}
                            <div className='col-xl-6'>
                                <div className='fv-row mb-8'>
                                    <label className='form-label fw-bolder text-dark fs-6'>Format</label>
                                    <input
                                        className="form-control bg-transparent"
                                        placeholder='##0.000'
                                        type='text'
                                        autoComplete='off'

                                    />

                                </div>
                                {/* end::Form group */}
                            </div>
                            {/* begin::Form group Round */}
                            <div className='col-xl-6'>
                                <div className='fv-row mb-8'>
                                    <label className='form-label fw-bolder text-dark fs-6'>Round</label>
                                    <input
                                        className="form-control bg-transparent"
                                        placeholder='3'
                                        type='text'
                                        autoComplete='off'

                                    />

                                </div>
                                {/* end::Form group */}
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className='card '>
                    <div className="card-body">
                        <div className='row'>
                            <div className='col-xl-6'>
                                {/* begin::Form group Devise */}
                                <div className='fv-row mb-8'>
                                    <label className='form-label fw-bolder text-dark fs-6'>Devise d'equivalence </label>
                                    <select className="form-select bg-transparent">
                                        <option>Dinar Tunisien</option>
                                        <option>EURO</option>
                                        <option>Dollar</option>
                                    </select>
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
                            <span className='card-label fw-bold fs-3 mb-1'>Monnaie de tenue de comptabilite</span>
                        </h3>
                        <span className='badge badge-light-primary fs-7 fw-semibold'>
                            Indiquez la devise dan slaquele vous souhaitez enir votre fichier comptable lie ,
                            cette formation est reprise du fichier comptable ouver en ligne .
                        </span>

                    </div>
                    <div className="card-body">
                        <div className='row'>
                            <div className='col'>
                                {/* begin::Form group Unite */}
                                <div className='fv-row mb-8'>
                                    <label className='form-label fw-bolder text-dark fs-6'>Unite</label>
                                    <select className="form-select bg-transparent">
                                        <option>Dinar Tunisien</option>
                                        <option>EURO</option>
                                        <option>Dollar</option>
                                    </select>
                                </div>
                            </div>
                            {/* end::Form group */}
                        </div>
                        {/* begin::Form group Sigle */}
                        <div className='col'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Sigle</label>
                                <input
                                    className="form-control bg-transparent"
                                    placeholder='TND'
                                    type='text'
                                    autoComplete='off'
                                    readOnly

                                />

                            </div>
                            {/* end::Form group */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}