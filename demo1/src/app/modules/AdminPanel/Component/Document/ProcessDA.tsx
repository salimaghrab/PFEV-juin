import { KTSVG } from '../../../../../_metronic/helpers';

export function ProcessDA() {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className='row g-5 g-xxl-8'>
                        <div className='col-xl-6'>
                            {/* begin::Form group  */}
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Utilisateur</label>
                                <select className='form-select bg-transparent'  >
                                    <option selected disabled hidden value=""></option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>
                            {/* end::Form group */}
                        </div>
                        <div className='col-xl-6'>
                            {/* begin::Form group Groupe */}
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Depot</label>
                                <select className='form-select bg-transparent'  >
                                    <option selected disabled hidden value=""></option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>
                            {/* end::Form group */}
                        </div>
                    </div>
                </div>
                <div className='card-body py-3'>
                    {/* begin::Table container */}
                    <div className='table-responsive'>
                        {/* begin::Table */}
                        <table className='table align-middle gs-0 gy-4'>
                            {/* begin::Table head */}
                            <thead>
                                <tr className='fw-bold text-muted bg-light'>
                                    <th className='ps-4 min-w-200px rounded-start'>Code</th>
                                    <th className='min-w-200px'>Intutile</th>
                                    <th className='min-w-200px'>VAlidateur</th>
                                    <th className='min-w-200px'>Confirmateur</th>
                                    <th className='min-w-200px text-end rounded-end'> Actions</th>
                                </tr>
                            </thead>
                            {/* end::Table head */}
                            {/* begin::Table body */}
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <div className='symbol symbol-50px me-5'>

                                            </div>
                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    1159
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <div className='symbol symbol-50px me-5'>

                                            </div>
                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    115
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <label>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                            />
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                            />
                                        </label>
                                    </td>
                                    <td className='text-end'>

                                        <a
                                            href='#'
                                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                        >
                                            <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                        </a>
                                        <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                            <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                                        </a>
                                    </td>
                                </tr>

                            </tbody>
                            {/* end::Table body */}
                        </table>
                        {/* end::Table */}
                        
                    </div>
                    {/* end::Table container */}
                    <a
                                href='#'
                                className='btn btn-sm btn-light-primary'
                            >
                                <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-6' />
                                Valider
                            </a>
                </div>
            </div>
        </>
    )
}