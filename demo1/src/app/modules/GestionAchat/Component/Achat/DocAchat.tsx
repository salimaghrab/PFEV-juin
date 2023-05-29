import { useState, SetStateAction } from "react";

export function DocAchat(){
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate(e.target.value);
    };

    const [selectedDate1, setSelectedDate1] = useState("");

    const handleDateChange1 = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate1(e.target.value);
    };
    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilterChange = (filter: SetStateAction<string>) => {
        setActiveFilter(filter);
        // TODO: Perform any actions necessary when the filter changes
    };
    return (
        <>
            <div className='card '>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card bg-light">
                            <div className="card-body">
                                <div className='card '>
                                    <div className="card-body">
                                        <div className='row'>
                                            <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                                <input
                                                    className='form-check-input'
                                                    type='checkbox'
                                                    value='1'
                                                    data-kt-check='true'
                                                    data-kt-check-target='.widget-9-check'
                                                />
                                                <label >Tous</label>
                                            </div>
                                            <nav className="flex-column">
                                                <div className="container-fluid">
                                                    <button
                                                        type="button"
                                                        className={`btn btn-outline-primary me-2 ${activeFilter === 'Devis' ? 'active' : ''
                                                            }`}
                                                        onClick={() => handleFilterChange('Devis')}
                                                    >
                                                        Devis
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className={`btn btn-outline-primary ${activeFilter === 'Facture' ? 'active' : ''
                                                            }`}
                                                        onClick={() => handleFilterChange('Facture')}
                                                    >
                                                        Facture
                                                    </button>

                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                                <div className='card '>

                                    <div className="card-body">
                                        <div className='row g-5 g-xxl-8'>
                                            <div className='col-xl-12'>
                                                {/* begin::Form group */}
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>Fournisseur </label>
                                                    <select className='form-select bg-transparent'  >
                                                        <option selected disabled hidden value=""></option>
                                                        <option>code1</option>
                                                        <option>code2</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>Depot</label>
                                                    <select className='form-select bg-transparent'  >
                                                        <option selected disabled hidden value=""></option>
                                                        <option>dep1</option>
                                                        <option>dep2</option>
                                                    </select>
                                                </div>
                                                {/* end::Form group*/}
                                            </div>
                                            <div className="col-xl-12">
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>Du</label>
                                                    <input
                                                        type="date" id="date" value={selectedDate} onChange={handleDateChange}
                                                        className='form-control bg-transparent'

                                                    />
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>Au</label>
                                                    <input
                                                        type="date" id="date" value={selectedDate1} onChange={handleDateChange1}
                                                        className='form-control bg-transparent'

                                                    />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/** other card for the f */}
                    <div className="col-md">
                        <div className="card bg-light">

                            <div className="card-body">

                                <div className="card " style={{ marginLeft: 10 }}>
                                    <div className="card-body">
                                        {/* begin::Table container */}
                                        <div className='table-responsive'>
                                            {/* begin::Table */}
                                            <table className='table align-middle gs-0 gy-4'>
                                                {/* begin::Table head */}
                                                <thead>
                                                    <tr className='fw-bold text-muted bg-light'>
                                                        <th className='ps-4 min-w-200px rounded-start'>Statut</th>
                                                        <th className='w-200px rounded-end'>N devis</th>
                                                        <th className='w-200px rounded-end'>souche </th>

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
                                                                        color
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
                                                                        color
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
                                                                        souche
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

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}