import { Link } from "react-router-dom";

export function AffectationArticle() {
    return (
        <>
            <div className='card bg-light'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card " style={{ marginLeft: 10 }}>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start text-white text-center'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Liste des Articles </span>
                                </h3>
                            </div>
                            <div className="card-body">
                                {/* begin::Table container */}
                                <div className='table-responsive'>
                                    {/* begin::Table */}
                                    <table className='table align-middle gs-0 gy-4'>
                                        {/* begin::Table head */}
                                        <thead>
                                            <tr className='fw-bold text-muted bg-light'>
                                                <th className='ps-4 min-w-200px rounded-start'>Reference</th>
                                                <th className='w-200px rounded-end'>Designation </th>

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
                    {/** other card for the f */}
                    <div className="col-md-6">
                        <div className="card " style={{ marginRight: 10 }}>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Liste des Documents</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='fv-row mb-8'>
                                    <label className='form-label fw-bolder text-dark fs-6'>Souche</label>
                                    <select className="form-select bg-transparent">
                                        <option>Vente</option>
                                        <option>Achat</option>
                                        <option>Maintenance</option>
                                    </select>
                                </div>
                            </div>
                            <div className='fv-row mb-8'>
                                <input
                                    className=" bg-transparent"
                                    type="checkbox"
                                    style={{ marginLeft: '10px' }}

                                />
                                VENTE



                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-toolbar'>
                    <Link
                        className='btn btn-sm btn-light-primary float-right' to=''    >
                        Confirmer
                    </Link>

                    <Link
                        className='btn btn-sm btn-light-danger float-right' to='' style={{ marginLeft: '10px' }} >
                        Fermer
                    </Link>
                </div>
            </div>
        </>
    )
}