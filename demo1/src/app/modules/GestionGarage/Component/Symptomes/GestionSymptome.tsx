import { useEffect, useState } from "react";
import { KTSVG } from "../../../../../_metronic/helpers";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import axios from "axios";
import { number } from "yup";
import { QualificationRow } from "../../Fetch/QualificationRow";
import { AtelierRow } from "../../Fetch/AtelierRow";
import { EmployeeRow } from "../../Fetch/EmployeeRow";

export function GestionSymptome() {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };
    const [activeView, setActiveView] = useState('FamilleEq');

    const handleFamilleEqClick = () => {
        setActiveView('FamilleEq');
    };
    const [qualifications, setQualifications] = useState<{ idQualification: number; qualificationName: string }[]>([]);

    useEffect(() => {
        axios.get('https://localhost:7074/api/Qualifications')
            .then(response => {
                setQualifications(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleEmpconcerneClick = () => {
        setActiveView('Empconcerne');
    };
    
    const [Symptomes, setSymptomes] = useState<{ symptomeId: number; symptomeCode: string; symptomeName: string }[]>([]);

    useEffect(() => {
        axios.get('https://localhost:7074/api/Symptomes')
            .then(response => {
                setSymptomes(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    const [symptomes, setsymptomes] = useState([]);
    const handleRefresh = () => {
        axios.get('https://localhost:7074/api/Symptomes')
          .then(response => {
            setsymptomes(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      };
    useEffect(() => {
        axios.get('https://localhost:7074/api/Symptomes')
            .then(response => {
                setsymptomes(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    console.log(symptomes)
    const [symptomeCode, setsymptomeCode] = useState<string>("");
    const [symptomeName, setsymptomeName] = useState<string>("");
    const [atelierId, setatelierId] = useState<number>(0);
    const [idEmployee, setidEmployee] = useState<number>(0);
    const [idQualification, setidQualification] = useState<number>(0);
    const addSymptome = () => {
        const SymptomeData = {
            symptomeCode: symptomeCode,
            symptomeName: symptomeName,
            atelierId: atelierId,
            idQualification: idQualification,
            idEmployee: idEmployee
        };

        axios.post('https://localhost:7074/api/Symptomes', SymptomeData)
            .then(response => {
                setsymptomes(symptomes.concat(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    };

    const [Ateliers, setAteliers] = useState<{ atelierId: number }[]>([]);

    useEffect(() => {
        axios.get('https://localhost:7074/api/Ateliers')
            .then(response => {
                setAteliers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    const [Employees, setEmployee] = useState<{ idEmployee: number; email: string }[]>([]);
    useEffect(() => {
        axios.get('https://localhost:7074/api/Employees')
            .then(response => {
                setEmployee(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
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
                                {Symptomes.map(symptome => (
                                    <tr key={symptome.symptomeId}>

                                        <td>
                                            <div className='d-flex align-items-center'>

                                                <div className='d-flex justify-content-start flex-column'>
                                                    <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                        {symptome.symptomeCode}
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='d-flex align-items-center'>

                                                <div className='d-flex justify-content-start flex-column'>
                                                    <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                        {symptome.symptomeName}
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
                                ))}
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
                                <span className='card-label fw-bold fs-3 mb-1'>Gestion Symptomes </span>
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
                                            value={symptomeCode} onChange={e => setsymptomeCode(e.target.value)}

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
                                            value={symptomeName} onChange={e => setsymptomeName(e.target.value)}
                                        />

                                    </div>
                                </div>
                                <div className='col-xl-6'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Atelier </label>
                                        <select className='form-select bg-transparent' onChange={(e) => setatelierId(Number(e.target.value))}>
                                            <option className='text-dark fw-bold text-hover-primary mb-1 fs-6' selected disabled hidden value=''></option>
                                            {Ateliers.map(atelier => (
                                                <option key={atelier.atelierId} value={atelier.atelierId}>
                                                    {atelier.atelierId}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className='col-xl-6'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Qualification </label>
                                        <select className='form-select bg-transparent' onChange={(e) => setidQualification(Number(e.target.value))}>
                                            {qualifications.map(qualification => (
                                                <option key={qualification.idQualification} value={qualification.idQualification}>
                                                    {qualification.qualificationName}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div >
                                <button className='btn btn-light-primary' onClick={handleFamilleEqClick} >Famille d'equipement</button>
                                <button className='btn  btn-light-primary' style={{ marginLeft: '10px' }} onClick={handleEmpconcerneClick}>Employee concerne</button>
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
                                                        {Employees.map(employee => (
                                                            <tr key={employee.idEmployee}>
                                                                <td>
                                                                    <div className='d-flex align-items-center'>
                                                                        <div className='d-flex justify-content-start flex-column'>
                                                                            <input
                                                                                type='checkbox'
                                                                                value={employee.idEmployee}
                                                                                onChange={(e) => setidEmployee(Number(e.target.value))}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <EmployeeRow key={employee.idEmployee} Employee={employee} />
                                                            </tr>
                                                        ))}
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
                        <button

                            className='btn btn-sm btn-light-primary' type="submit" onClick={() => {
                                addSymptome();
                                setShowAlert(false);
                                handleRefresh();

                            }}
                        >

                            Valider
                        </button>
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