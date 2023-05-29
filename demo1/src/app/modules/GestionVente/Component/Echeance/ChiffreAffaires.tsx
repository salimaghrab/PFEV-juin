import { useState, SetStateAction } from "react";
import { FaSearch } from "react-icons/fa";

export function ChiffreAffaires() {
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
                <div className='card-header border-0 pt-5'>
                    <div className='card-toolbar'>
                        <div className="row">
                        <div className="col-xl-4">
                            {/* begin::Search */}
                            <div className="fv-row mb-8">

                                <label className='form-label fw-bolder text-dark fs-6'>Du</label>
                                <input
                                    type="date" id="date" value={selectedDate} onChange={handleDateChange}
                                    className='form-control bg-transparent'

                                />
                            </div>
                        </div>
                        <div className='col-xl-4'>
                            {/* begin::Search */}
                            <div className="fv-row mb-8">
                                <label className='form-label fw-bolder text-dark fs-6'>au</label>
                                <input
                                    type="date" id="date" value={selectedDate1} onChange={handleDateChange1}
                                    className='form-control bg-transparent'

                                />
                               
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Souche</label>
                                <select className='form-select bg-transparent'>
                                    <option selected disabled hidden value=""></option>
                                    <option>Vente</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Collaborateur</label>
                                <select className='form-select bg-transparent'>
                                    <option selected disabled hidden value=""></option>
                                    <option>salima</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Article</label>
                                <select className='form-select bg-transparent'>
                                    <option selected disabled hidden value=""></option>
                                    <option>art</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="col-xl-4">
                            <div  className="input-group mb-3" >
                                <label className='form-label fw-bolder text-dark fs-6' >Depot</label>
                                <select className='form-select bg-transparent'>
                                    <option selected disabled hidden value=""></option>
                                    <option>dep1</option>
                                </select>
                                <div className="input-group-append">
                                    <button className="btn  btn-light-primary" type="button">
                                        <FaSearch />
                                    </button>
                                </div>
                            </div>
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
                                                <th className='ps-4 min-w-250 rounded-start'>code Tiers </th>
                                                <th className='min-w-250'>Intitule </th>
                                                <th className='min-w-250'>Chiffre d'affaires en HT</th>
                                                <th className='min-w-250'>Chiffre d'affaires en TTC</th>
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
                                                                ugkiir
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                        {/* end::Table body */}
                                        <tfoot>
                                            <td></td>
                                            <td></td>
                                            <td>Total en HT:</td>
                                            <td>Total en TTc:</td>
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
            </div >
        </>
    )
}