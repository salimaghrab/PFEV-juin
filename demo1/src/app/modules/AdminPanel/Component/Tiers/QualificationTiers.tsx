import { Link } from "react-router-dom";
import { KTSVG } from "../../../../../_metronic/helpers";

export function QualificationTiers() {
    return (
        <>
            <div className='card'>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <div className='card-toolbar'>
                        {/* begin::Search */}
                        <div className="input-group mb-3">
                            <select className='form-select bg-transparent' style={{ marginLeft: '550px' }} >

                                <option>Client </option>
                                <option>Collaborateur </option>
                                <option>Fournisseur </option>
                            </select>

                        </div>
                    </div>
                    <div className='card-toolbar'>
                        {/* begin::Search */}
                        <div className="input-group mb-3">
                            <label className='form-label fw-bolder text-dark fs-6 mb-3'>Qualification</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                style={{ marginLeft: '10px' }}
                            />
                            <div className="input-group-append">

                                <Link
                                    className='btn  btn-light-primary' to=''
                                    style={{ marginLeft: '10px' }}>
                                    <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-4' />
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>
                {/* end::Header */}
                {/* begin::Body */}
                <div className='card-body py-3'>
                    {/* begin::Table container */}
                    <div className='table-responsive'>
                        {/* begin::Table */}
                        <table className='table align-middle gs-0 gy-4'>
                            {/* begin::Table head */}
                            <thead>
                                <tr className='fw-bold text-muted bg-light'>
                                    <th className='ps-4 min-w-200px rounded-start'>Intitule</th>
                                    <th className='min-w-200px'>Type</th>
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
                                                    Avoir
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
                                                    Avoir
                                                </a>
                                            </div>
                                        </div>
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
                </div>
                {/* end::Body */}
            </div>
        </>
    )
}