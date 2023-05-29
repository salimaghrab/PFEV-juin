import { FaSearch } from "react-icons/fa";
import { KTSVG } from "../../../../../_metronic/helpers";
import { SetStateAction, useState } from "react";

export function AvoirFinance() {
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate(e.target.value);
    };

    const [selectedDate1, setSelectedDate1] = useState("");

    const handleDateChange1 = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate1(e.target.value);
    };
    return (
        <>
            <div className='card bg-light'>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <label className='form-label fw-bolder text-dark fs-6'>Client</label>
                    <select className='form-select bg-transparent'>
                        <option selected disabled hidden value=""></option>
                        <option>Client1</option>
                        <option> Client2</option>
                        <option>Client3</option>
                    </select>

                    <div className='card-toolbar'>
                        {/* begin::Search */}
                        <div className="input-group mb-3">

                            <label className='form-label fw-bolder text-dark fs-6' style={{ marginLeft: 700 }}>Du</label>
                            <input
                                type="date" id="date" value={selectedDate} onChange={handleDateChange}
                                className='form-control bg-transparent'

                            />
                        </div>
                    </div>
                    <div className='card-toolbar'>
                        {/* begin::Search */}
                        <div className="input-group mb-3">
                            <label className='form-label fw-bolder text-dark fs-6'>au</label>
                            <input
                                type="date" id="date" value={selectedDate1} onChange={handleDateChange1}
                                className='form-control bg-transparent'

                            />
                            <div className="input-group-append">
                                <button className="btn  btn-light-primary" type="button">
                                    <FaSearch />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                {/* end::Header */}
                <div className="row">
                    
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
                                                <th className='min-w-150'>Date</th>
                                                <th className='min-w-150'>Souche</th>
                                                <th className='min-w-150'>Depot  </th>
                                                <th className='min-w-150'>Code Client </th>
                                                <th className='min-w-150'>Intitule Client  </th>
                                                <th className='min-w-150'>Total Net</th>
                                                <th className='min-w-150'>Total TTc</th>
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
                                                                fgnf
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
                                                                fnhfngn
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
                                                                ugkiir
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
                                                                fcxc
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
                                                                cgcg
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
                                                                ghcjgh
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
                                                                ghcjgh
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
                                                                ghcjgh
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
                                        <tfoot>
                                            <tr>
                                                <td>
                                                    <div className='d-flex align-items-center' >
                                                        Total TTC
                                                    </div>
                                                </td>

                                            </tr>
                                        </tfoot>
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