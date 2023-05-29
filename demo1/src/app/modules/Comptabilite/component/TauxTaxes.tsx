import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import { KTSVG } from '../../../../_metronic/helpers'
import { Link } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import clsx from 'clsx'

const initialValues = {
    codetaxe: '',
    Intitule: '',
    taux: '',
    coderegroupement: '',
    assuj: '',
}
const TaxeSchema = Yup.object().shape({
    codetaxe: Yup.string()
        .required('champs obligatoire'),
    Intitule: Yup.string()
        .required('champs obligatoire'),
    taux: Yup.string()
        .required('champs obligatoire'),
    coderegroupement: Yup.string()
        .required('champs obligatoire'),
    assuj: Yup.string()
        .required('champs obligatoire'),
})
export function TauxTaxes() {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };
    const [, setLoading] = useState(false)
    const formik = useFormik({
        initialValues,
        validationSchema: TaxeSchema,
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
                        <Link
                            style={{ marginLeft: 1050 }}
                            className='btn btn-sm btn-light-primary' onClick={handleClick} to='' >
                            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                            Ajouter
                        </Link>
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
                                    <th className='min-w-150px'>Taux</th>
                                    <th className='min-w-100px'>Compte general</th>
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
            <div className="d-flex justify-content-center align-items-center fixed-top " style={{ zIndex: 999 }}>
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
                                                <label className='form-label fw-bolder text-dark fs-6'>code taxe </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('codetaxe')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.codetaxe && formik.errors.codetaxe,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.codetaxe && !formik.errors.codetaxe,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.codetaxe && formik.errors.codetaxe && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.codetaxe}</span>
                                                        </div>
                                                    </div>
                                                )}
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
                                                <label className='form-label fw-bolder text-dark fs-6'>Sens</label>
                                                <select className='form-select bg-transparent'  >
                                                    <option selected disabled hidden value=""></option>
                                                    <option>jgd</option>
                                                    <option>dld</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-xl-3'>
                                            {/* begin::Form group */}
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Taxe</label>
                                                <select className='form-select bg-transparent'  >
                                                    <option selected disabled hidden value=""></option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-xl-3'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'></label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('taux')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.taux && formik.errors.taux,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.taux && !formik.errors.taux,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.taux && formik.errors.taux && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.taux}</span>
                                                        </div>
                                                    </div>
                                                )}
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
                                                <label className='form-label fw-bolder text-dark fs-6'>Type de Taxe</label>
                                                <select className='form-select bg-transparent'  >
                                                    <option selected disabled hidden value=""></option>
                                                    <option>jour</option>
                                                    <option>heure</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>code regroupement </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('coderegroupement')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.coderegroupement && formik.errors.coderegroupement,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.coderegroupement && !formik.errors.coderegroupement,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.coderegroupement && formik.errors.coderegroupement && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.coderegroupement}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {/* end::Form group */}
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Provenance</label>
                                                <select className='form-select bg-transparent'  >
                                                    <option selected disabled hidden value=""></option>
                                                    <option>jour</option>
                                                    <option>heure</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Assujettisement %</label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('assuj')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.assuj && formik.errors.assuj,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.assuj && !formik.errors.assuj,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.assuj && formik.errors.assuj && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.assuj}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {/* end::Form group */}
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
                            {step < 2 && (
                                <Link
                                    className='btn btn-sm btn-light-primary' to='' onClick={handleNext}>
                                    Next
                                </Link>
                            )}
                            {step === 2 && (
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