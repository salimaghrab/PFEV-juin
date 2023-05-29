import { Link } from "react-router-dom";
import { KTSVG } from "../../../../../_metronic/helpers";
import { SetStateAction, useState } from "react";
import { Alert } from "react-bootstrap";

export function OrdreReparation() {

    {/**Alert   */ }

    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };
    {/** View Button  */ }
    const [activeView, setActiveView] = useState('OR');

    const handleORClick = () => {
        setActiveView('OR');
    };


    const handleInfoClientClick = () => {
        setActiveView('InfoClient');
    };

    const handleDetailsClick = () => {
        setActiveView('Details');
    };
    const handleAffectationClick = () => {
        setActiveView('Affectation');
    };
    {/**Date input  */ }
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate(e.target.value);
    };
    const [selectedDate0, setSelectedDate0] = useState("");

    const handleDateChange0 = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate0(e.target.value);
    };
    const [selectedDate1, setSelectedDate1] = useState("");

    const handleDateChange1 = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate1(e.target.value);
    };
    return (
        <>
            <div className='card'>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Liste Ordre Travail</span>
                    </h3>
                    <Link
                        style={{}}
                        className='btn btn-sm btn-light-primary' onClick={handleClick} to='' >
                        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                        Ajouter OR
                    </Link>
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
                                    <th className='ps-4 min-w-150 rounded-start'>Satut</th>
                                    <th className='min-w-150'>Etat</th>
                                    <th className='min-w-150'>Code</th>
                                    <th className='min-w-150'>Souche</th>
                                    <th className='min-w-150'>Code Client</th>
                                    <th className='min-w-150'>Code Vehicule</th>
                                    <th className='min-w-150'>Immatrculation</th>
                                    <th className='min-w-150'>Date</th>
                                    <th className='min-w-150'>Observation</th>
                                    <th className='min-w-150'>Description</th>
                                    <th className='min-w-150'>Facture</th>
                                    <th className='min-w-150'>Rendev-Vous</th>
                                    <th className='min-w-150'>Reception</th>

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
                                            <div className='d-flex justify-content-start flex-column' >
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    fjfj
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    0000000
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    213027
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    Avoir
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    kjkvd
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    nbvjv
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
                                                    hfk
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <div className='symbol symbol-50px me-5'>
                                            </div>
                                            <div className='d-flex justify-content-start flex-column' >
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    fjfj
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    0000000
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    213027
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    Avoir
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    kjkvd
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    nbvjv
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
            <div className="d-flex justify-content-center align-items-center fixed-top" style={{ zIndex: 999 }}>
            <Alert className="w-50" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    show={showAlert} onClose={() => setShowAlert(false)} dismissible  >
                    <div className="card bg-light">
                        <div className="card">
                            <div className="card-body">
                            <div className="overflow-auto" style={{ maxHeight: "450px" }}>
                                <div >
                                    <button className='btn btn-light-primary' onClick={handleORClick} >Ordre Reparation</button>
                                    <button className='btn  btn-light-primary' style={{ marginLeft: '10px' }} onClick={handleInfoClientClick}>Information Client</button>
                                    <button className='btn  btn-light-primary' style={{ marginLeft: '10px' }} onClick={handleDetailsClick}>Details</button>
                                    <button className='btn  btn-light-primary' style={{ marginLeft: '10px' }} onClick={handleAffectationClick}>Affectation</button>
                                </div>
                                {activeView === 'OR' && (
                                    <div>
                                        <div className="card" >
                                            <div className="card-body">
                                                <div className='row'>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Document </label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'></label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Etat </label>
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
                                                            <label className='form-label fw-bolder text-dark fs-6'>Date </label>
                                                            <input
                                                                type="date" id="date" value={selectedDate} onChange={handleDateChange}
                                                                className='form-control bg-transparent'

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Observation </label>
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
                                    </div>
                                )}
                                {activeView === 'InfoClient' && (
                                    <div>
                                        <div className="card" style={{ marginTop: 30 }} >

                                            <div className="col-md-4">
                                                <img src={require("./garage.jpg")} alt="Card Image" className="card-img" />
                                            </div>
                                            <div className="card-body">
                                                <div className='row'>
                                                    <div className='col-xl-12'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6 bg-light-primary'>Initule </label>
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
                                                            <label className='form-label fw-bolder text-dark fs-6'>Adresse </label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>CP </label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'> Ville</label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>E-mail </label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-12'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6 bg-light-primary'>Vehicule </label>
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
                                                            <label className='form-label fw-bolder text-dark fs-6'>Marque </label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Modele </label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Etat vehicule </label>
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
                                                            <label className='form-label fw-bolder text-dark fs-6'>Kilometrage </label>
                                                            <input

                                                                placeholder=''
                                                                type='number'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='col'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'> Nombre chaissis</label>
                                                            <input
                                                                readOnly
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

                                    </div>
                                )}
                                {activeView === 'Details' && (
                                    <div>
                                        <div className="card" style={{ marginTop: 30 }} >
                                            <div className="card-body">
                                                <div className='row'>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Date debut </label>
                                                            <input
                                                                type="date" id="date" value={selectedDate0} onChange={handleDateChange0}
                                                                className='form-control bg-transparent'

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Date Fin </label>
                                                            <input
                                                                type="date" id="date" value={selectedDate1} onChange={handleDateChange1}
                                                                className='form-control bg-transparent'

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-12'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'> Description</label>
                                                            <input
                                                                style={{ height: 70 }}
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Frais Supplementaire </label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Gamme Operatoire </label>
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
                                    </div>
                                )}
                                {activeView === 'Affectation' && (
                                    <div>
                                        <div className="card-body">
                                            <div className='row'>
                                                <div className='col-xl-12'>
                                                    <div className='fv-row mb-8'>
                                                        <label className='form-label fw-bolder text-dark fs-6 bg-light-primary'>Atelier </label>
                                                        <input

                                                            placeholder=''
                                                            type='text'
                                                            autoComplete='off'
                                                            className='form-control bg-transparent'

                                                        />

                                                    </div>
                                                    <div className='fv-row mb-8'>
                                                        <label className='form-label fw-bolder text-dark fs-6 bg-light-primary'>Responsable </label>
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
                                )}
                            </div>
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
                    </div>
                </Alert>
            </div>
        </>
    )
}