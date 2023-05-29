import { KTSVG } from '../../../../../_metronic/helpers';

export function ChangerCaisse() {
    return (
        <>
            <div className='card'>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Basculer Caisse</span>
                    </h3>
                </div>
                {/* end::Header */}
                {/* begin::Body */}
                <div className='card-body py-3'>
                    <div className='row'>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>N Caisse</label>
                                <select className='form-select bg-transparent'>
                                    <option selected disabled hidden value=""></option>
                                    <option>Caisse1</option>
                                    <option> Caisse2</option>
                                    <option>Caisse3</option>
                                </select>

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
                    <a
                        href='#'
                        className='btn btn-sm btn-light-danger'
                        style={{ marginLeft: '10px' }}
                    >
                        <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                        Anuuler
                    </a>
                </div>
            </div>
        </>
    )
}