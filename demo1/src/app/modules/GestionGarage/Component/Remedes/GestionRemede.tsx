import { useState } from "react";
import { KTSVG } from "../../../../../_metronic/helpers";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

export function GestionRemede(){
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };
    const [activeView, setActiveView] = useState('FamilleEq');

    const handleFamilleEqClick = () => {
        setActiveView('FamilleEq');
    };


    const handleEmpconcerneClick = () => {
        setActiveView('Empconcerne');
    };
    return(
        <>
          <div className='card'>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <div className='card-toolbar'>
                        <Link
                            style={{ marginLeft: 1050 }}
                            className='btn btn-sm btn-light-primary' onClick={handleClick} to='' >
                            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                            Ajouter
                        </Link>
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
                                    <th className='ps-4 min-w-150 rounded-start'>Code </th>
                                    <th className='min-w-150'>Intitule</th>
                                    <th className='min-w-150 text-end rounded-end'> Actions</th>
                                </tr>
                            </thead>
                            {/* end::Table head */}
                            {/* begin::Table body */}
                            <tbody>
                                <tr>
                                    
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    lkhgffc
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    qsdryh
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
            <div className="d-flex justify-content-center align-items-center fixed-top" style={{ zIndex: 999 }}>
            <Alert className="w-50" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    show={showAlert} onClose={() => setShowAlert(false)} dismissible  >
                    <div className="card" >
                        <div className='card-header border-0 pt-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bold fs-3 mb-1'>Gestion Remedes </span>
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-xl-6'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Code </label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            className='form-control bg-transparent'

                                        />

                                    </div>
                                </div>
                                <div className='col-xl-6'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Intitule </label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            className='form-control bg-transparent'

                                        />

                                    </div>
                                </div>
                                <div className='col-xl-6'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Atelier </label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            className='form-control bg-transparent'
                                        />
                                    </div>
                                </div>
                                <div className='col-xl-6'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Qualification </label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            className='form-control bg-transparent'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                        <div className="card-body">
                            <div >
                                <button className='btn btn-light-primary' onClick={handleFamilleEqClick} >Famille d'equipement</button>
                                <button className='btn  btn-light-primary'  onClick={handleEmpconcerneClick}>Employee concerne</button>
                            </div>
                            {activeView === 'FamilleEq' && (
                                <div>
                                    <div className='card'>
                                        {/* begin::Header */}
                                       
                                        {/* end::Header */}
                                        {/* begin::Body */}
                                        <div className='card-body py-3 bg-light-primary'>
                                            {/* begin::Table container */}
                                            <div className='table-responsive '>
                                                {/* begin::Table */}
                                                <table className='table align-middle gs-0 gy-4'>
                                                    {/* begin::Table head */}
                                                    <thead>
                                                        <tr className='fw-bold text-muted bg-light'>
                                                            <th className='min-w-200' ></th>
                                                            <th className='ps-4 min-w-200 rounded-start'>Code </th>
                                                            <th className='min-w-200' >Intitule</th>
                                                            
                                                        </tr>
                                                    </thead>
                                                    {/* end::Table head */}
                                                    {/* begin::Table body */}
                                                    <tbody>
                                                        <tr>

                                                            <td>
                                                                <div className='d-flex align-items-center'>

                                                                    <div className='d-flex justify-content-start flex-column'>
                                                                        <input type="checkbox" />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className='d-flex align-items-center'>

                                                                    <div className='d-flex justify-content-start flex-column'>
                                                                        <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                                            qsdryh
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className='d-flex align-items-center'>

                                                                    <div className='d-flex justify-content-start flex-column'>
                                                                        <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                                            qsdryh
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
                            )}
                            {activeView === 'Empconcerne' && (
                                <div>
 <div className='card'>
                                        {/* begin::Header */}
                                       
                                        {/* end::Header */}
                                        {/* begin::Body */}
                                        <div className='card-body py-3 bg-light-primary'>
                                            {/* begin::Table container */}
                                            <div className='table-responsive x'>
                                                {/* begin::Table */}
                                                <table className='table align-middle gs-0 gy-4'>
                                                    {/* begin::Table head */}
                                                    <thead>
                                                        <tr className='fw-bold text-muted bg-light'>
                                                            <th className='min-w-200'> </th>
                                                            <th className='ps-4 min-w-200 rounded-start'>Code </th>
                                                            <th className='min-w-200' >Nom</th>
                                                            <th className='min-w-200' >Prenom</th>
                                                            
                                                        </tr>
                                                    </thead>
                                                    {/* end::Table head */}
                                                    {/* begin::Table body */}
                                                    <tbody>
                                                        <tr>

                                                            <td>
                                                                <div className='d-flex align-items-center'>

                                                                    <div className='d-flex justify-content-start flex-column'>
                                                                        <input type="checkbox" />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className='d-flex align-items-center'>

                                                                    <div className='d-flex justify-content-start flex-column'>
                                                                        <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                                            qsdryh
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className='d-flex align-items-center'>

                                                                    <div className='d-flex justify-content-start flex-column'>
                                                                        <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                                            qsdryh
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className='d-flex align-items-center'>

                                                                    <div className='d-flex justify-content-start flex-column'>
                                                                        <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                                            qsdryh
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
                            )}
                        </div>
                    </div>
                    <div className='card-toolbar'>
                        <Link
                            className='btn btn-sm btn-light-primary' to='' >

                            Valider
                        </Link>
                        <Link
                            className='btn btn-sm btn-light-danger' to='' style={{ marginLeft: 10 }}
                            onClick={() => setShowAlert(false)}>

                            fermer
                        </Link>
                    </div>
                </Alert>
            </div>
        </>
    )
}