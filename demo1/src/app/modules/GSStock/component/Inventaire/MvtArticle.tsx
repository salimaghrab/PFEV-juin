import { useState, SetStateAction } from "react";
import { FaSearch } from "react-icons/fa";

export function MvtArticle(){
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate(e.target.value);
    };

    const [selectedDate1, setSelectedDate1] = useState("");

    const handleDateChange1 = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate1(e.target.value);
    };
    return(
        <>
         <div className='card bg-light'>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <div className='col-xl-3'>
                    <div className="input-group mb-3">
                            <label className='form-label fw-bolder text-dark fs-6'>Depot</label>
                            <select className='form-select bg-transparent' >
                                <option selected disabled hidden value=""></option>
                                <option >D1</option>
                                <option> D2</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-xl-3'>
                    <div className="input-group mb-3">
                            <label className='form-label fw-bolder text-dark fs-6'>Article</label>
                            <select className='form-select bg-transparent' >
                                <option selected disabled hidden value=""></option>
                                <option >ar1</option>
                                <option> ar2</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        {/* begin::Search */}
                        <div className="input-group mb-3">

                            <label className='form-label fw-bolder text-dark fs-6'>Du</label>
                            <input
                                type="date" id="date" value={selectedDate} onChange={handleDateChange}
                                className='form-control bg-transparent'

                            />
                        </div>
                    </div>
                    <div className='col-xl-3'>
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
                                                <th className='ps-4 min-w-150 rounded-start'>Type</th>
                                                <th className='min-w-150'>Date</th>
                                                <th className='min-w-150'>N Document</th>
                                                <th className='min-w-150'>Code Tiers</th>
                                                <th className='min-w-150'>Intitule Tiers</th>
                                                <th className='min-w-150'>Etat</th>
                                                <th className='min-w-150'>Depot</th>
                                                <th className='min-w-150'>CMUP</th>
                                                <th className='min-w-150'>N Serie</th>
                                                <th className='min-w-150'>Quantite </th>
                                                <th className='min-w-150'>Solde </th>
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