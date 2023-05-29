import { Link } from "react-router-dom";
import { KTSVG } from "../../../../../_metronic/helpers";
import { FaSearch } from "react-icons/fa";
import { SetStateAction, useState } from "react";

export function ReglementTransfert() { 
    return (
        <>
            <div className='card bg-light'>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Liste Reglement Transferes</span>
                    </h3>
                    <div className='card-toolbar'>
                        {/* begin::Search */}
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="search ..."
                                style={{ marginLeft: '550px' }}
                            />
                        </div>
                    </div>
                    <div className='card-toolbar'>
                        {/* begin::Search */}
                        <div className="input-group mb-3">

                            <div className="input-group-append">
                                <button className="btn  btn-light-primary" type="button">
                                    <FaSearch />
                                </button>
                            </div>
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
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='badge badge-light-primary fs-5 fw-semibold'> Reglement Transferer saisie</span>
                                </h3>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='badge badge-light-primary fs-5 fw-semibold'> Reglement Transferer recue</span>
                                </h3>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='badge badge-light-primary fs-5 fw-semibold'>Liste Reglement en cours</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='card'>

                            {/* begin::Body */}
                            <div className='card-body py-3'>
                                {/* begin::Table container */}
                                <div className='table-responsive'>
                                    {/* begin::Table */}
                                    <table className='table align-middle gs-0 gy-4'>
                                        {/* begin::Table head */}
                                        <thead>
                                            <tr className='fw-bold text-muted bg-light'>
                                                <th className='ps-4 min-w-150 rounded-start'>N Piece</th>
                                                <th className='min-w-150'>Souche</th>
                                                <th className='min-w-150'>Date</th>
                                                <th className='min-w-150'>Montant total </th>
                                                <th className='min-w-150'>Montant total Valide </th>
                                                <th className='min-w-150'>Etat </th>
                                                <th className='min-w-150 text-end rounded-end'> Actions</th>
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
                    </div>
                </div>
            </div>



           
        </>
    )
}