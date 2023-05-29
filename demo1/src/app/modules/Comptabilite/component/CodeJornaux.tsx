import { Link } from "react-router-dom";
import { KTSVG } from "../../../../_metronic/helpers";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import * as Yup from 'yup'
import { useFormik } from "formik";
import clsx from "clsx";
import { Alert } from "react-bootstrap";

const initialValues = {
    codeJ: '',
    Intitule: '',

}
const CodeJSchema = Yup.object().shape({
    codeJ: Yup.number()
        .required('champs obligatoire'),
    Intitule: Yup.string()
        .required('champs obligatoire'),
})
export function CodeJornaux() {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };
    const [, setLoading] = useState(false)
    const formik = useFormik({
        initialValues,
        validationSchema: CodeJSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            setLoading(true)
        },
    })
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };
    return (
        <>
            <div className='card'>
                <div className='card-header border-0 pt-5'>
                    <div className='card-toolbar'>
                        {/* begin::Search */}
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="search ..."
                                style={{ marginLeft: '800px' }}
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
                                    onClick={handleClick}
                                    style={{ marginLeft: '10px' }}>
                                    <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-4' />
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                {/* begin::Body */}
                <div className='card-body py-3'>
                    {/* begin::Table container */}
                    <div className='table-responsive'>
                        {/* begin::Table */}
                        <table className='table align-middle gs-0 gy-4'>
                            {/* begin::Table head */}
                            <thead>
                                <tr className='fw-bold text-muted bg-light'>
                                    <th className='ps-4 min-w-150px rounded-start'>Code</th>
                                    <th className='min-w-150px'>Intitule</th>
                                    <th className='min-w-150px'>Compte general</th>
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
                        {step === 1 && (
                            <div className='card '>
                                <div className='card-header border-0 pt-5'>
                                    <h3 className='card-title align-items-start flex-column'>
                                        <span className='card-label fw-bold fs-3 mb-1'>Identification</span>
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className='row'>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>code Journal </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('codeJ')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.codeJ && formik.errors.codeJ,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.codeJ && !formik.errors.codeJ,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.codeJ && formik.errors.codeJ && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.codeJ}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className='col-xl-6'>
                                            {/* begin::Form group */}
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Type</label>
                                                <select className='form-select bg-transparent'  >
                                                    <option selected disabled hidden value=""></option>
                                                    <option>jgd</option>
                                                    <option>dld</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Intitule </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('Intitule')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.Intitule && formik.errors.Intitule,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.Intitule && !formik.errors.Intitule,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.Intitule && formik.errors.Intitule && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.Intitule}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className='col-xl-6'>
                                            {/* begin::Form group */}
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Compte de tresorerie</label>
                                                <select className='form-select bg-transparent'  >
                                                    <option selected disabled hidden value=""></option>

                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div className='card '>
                                <div className='card-header border-0 pt-5'>
                                    <h3 className='card-title align-items-start flex-column'>
                                        <span className='card-label fw-bold fs-3 mb-1'>Caracteristique</span>
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className='row'>

                                        {/* begin::Form group Activite */}
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Numerotation</label>
                                                <select className='form-select bg-transparent'  >
                                                    <option selected disabled hidden value=""></option>
                                                    <option>jour</option>
                                                    <option>heure</option>
                                                </select>
                                            </div>


                                            <div className='col-xl-6'>
                                                <input
                                                    className=" bg-transparent"
                                                    type="checkbox"
                                                    style={{ marginLeft: '10px' }}

                                                />
                                                Mettre en someil
                                            </div>

                                            <div className='col'>
                                                <input
                                                    className=" bg-transparent"
                                                    type="checkbox"
                                                    style={{ marginLeft: '10px' }}

                                                />
                                                Autoriser la saisie analytique
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}
                        {step === 3 && (
                            <div className='card '>
                                <div className='card-header border-0 pt-5'>
                                    <h3 className='card-title align-items-start flex-column'>
                                        <span className='card-label fw-bold fs-3 mb-1'>Parametres de traitement</span>
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className='row'>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Contrepartie</label>
                                                <select className='form-select bg-transparent'  >
                                                    <option selected disabled hidden value=""></option>
                                                    <option>jour</option>
                                                    <option>heure</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* begin::Form group Activite */}
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Reprochement sur</label>
                                                <select className='form-select bg-transparent'  >
                                                    <option selected disabled hidden value=""></option>
                                                    <option>jour</option>
                                                    <option>heure</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-xl-6'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            affecter la statut regle aux ecritures
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}
                        <div className='card-toolbar'>
                            {step > 1 && (
                                <Link
                                    className='btn btn-sm btn-light-secondary' to='' onClick={handleBack} >

                                    back
                                </Link>
                            )}
                            {step < 3 && (
                                <Link
                                    className='btn btn-sm btn-light-primary' to='' onClick={handleNext}>
                                    Next
                                </Link>
                            )}
                            {step === 3 && (
                                <Link
                                    className='btn btn-sm btn-light-success' to='' onClick={() => setShowAlert(false)}>
                                    Done
                                </Link>
                            )}
                        </div>
                    </div>
                </Alert>
            </div>
        </>
    )
}