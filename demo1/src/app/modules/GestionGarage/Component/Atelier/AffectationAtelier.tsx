import { KTSVG } from "../../../../../_metronic/helpers";

export function AffectationAtelier() {
    return (
        <>
            <div className='card bg-light'>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Affectation Atelier </span>
                    </h3>
                </div>
                {/* end::Header */}
                <div className="row">
                    <div className="col-md-6">
                        <div className="card " style={{ marginLeft: '10px' }}>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start text-white text-center'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Atelier </span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='table-responsive '>
                                    {/* begin::Table */}
                                    <table className='table align-middle gs-0 gy-4'>
                                        {/* begin::Table head */}
                                        <thead>
                                            <tr className='fw-bold text-muted bg-light'>
                                                <th className='ps-4 min-w-150 rounded-start'>Code Atelier  </th>
                                                <th className='min-w-150'>Intitule</th>
                                                <th className='min-w-150 text-end rounded-end'>Affecter</th>
                                            </tr>
                                        </thead>
                                        {/* end::Table head */}
                                        {/* begin::Table body */}
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className='d-flex align-items-center'>

                                                        <div className='d-flex justify-content-start flex-column text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                            sfax
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='d-flex justify-content-start flex-column text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                            0000000
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='text-end'>
                                                    <input
                                                        className=" bg-transparent"
                                                        type="checkbox"
                                                        style={{ marginRight: 30 }}
                                                    />
                                                </td>

                                            </tr>

                                        </tbody>
                                        {/* end::Table body */}
                                        <tfoot>
                                            <tr>
                                                <td colSpan={4} style={{ borderTop: "3px solid black" }} className="text-end">
                                                    <button className='btn btn-light-success'>Affecter</button>

                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    {/* end::Table */}
                                </div>
                            </div>

                        </div>
                    </div>
                    {/** other card for the f */}
                    <div className="col-md-6">
                        <div className="card " style={{ marginRight: '10px' }}>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Atelier Maintenance</span>
                                </h3>
                            </div>
                            <div className="card-body ">
                                <div className='table-responsive'>
                                    {/* begin::Table */}
                                    <table className='table align-middle gs-0 gy-4'>
                                        {/* begin::Table head */}
                                        <thead>
                                            <tr className='fw-bold text-muted bg-light'>
                                                <th className='ps-4 min-w-150 rounded-start'>Code Atelier  </th>
                                                <th className='min-w-150'>Intitule</th>
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
                                                        <div className='d-flex justify-content-start flex-column text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                            med
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='d-flex align-items-center'>

                                                        <div className='d-flex justify-content-start flex-column text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                            sfax
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                        {/* end::Table body */}
                                    </table>
                                    {/* end::Table */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}