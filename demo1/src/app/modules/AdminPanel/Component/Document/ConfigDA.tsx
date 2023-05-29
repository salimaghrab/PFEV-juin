import clsx from 'clsx';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Yup from 'yup'
import { KTSVG } from '../../../../../_metronic/helpers';

const initialValues = {
    NumeroDoc: '',
    Intitule: '',
}
const ConfigDASchema = Yup.object().shape({
    NumeroDoc: Yup.string()
        .required('champs obligatoire'),
    Intitule: Yup.string()
        .required('champs obligatoire')

})


export function ConfigDA() {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };
    const [loading, setLoading] = useState(false)
    const formik = useFormik({
        initialValues,
        validationSchema: ConfigDASchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            setLoading(true)
        },
    })
    const [showSecondCheckbox, setShowSecondCheckbox] = useState(false);

    const handleCheckboxChange = () => {
        setShowSecondCheckbox(!showSecondCheckbox);
    };

    return (
        <>
            <div className='card '>
                <div className='card-header border-0 pt-5'>
                    <label>
                        <input
                            className=" bg-transparent"
                            type="checkbox"
                            checked={showSecondCheckbox}
                            onChange={handleCheckboxChange}
                        />
                        Activer
                    </label>
                    {showSecondCheckbox && (
                        <label>
                            <input type="checkbox"
                                className=" bg-transparent" />
                            Valide
                        </label>
                    )}
                </div>
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Gestion Demnade </span>
                    </h3>
                    <div className='card-toolbar'>
                        <Link
                            className='btn btn-sm btn-light-primary' onClick={handleClick} to='' >
                            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                        </Link>
                    </div>
                </div>
                {/* begin::Header */}
                <div className='card-body py-3'>
                    {/* begin::Table container */}
                    <div className='table-responsive'>
                        {/* begin::Table */}
                        <table className='table align-middle gs-0 gy-4'>
                            {/* begin::Table head */}
                            <thead>
                                <tr className='fw-bold text-muted bg-light'>
                                    <th className='ps-4 min-w-200px rounded-start'>Etat</th>
                                    <th className='min-w-150px'>Intutile</th>
                                    <th className='min-w-150px'>code</th>
                                    <th className='min-w-150px'>Nature</th>
                                    <th className='min-w-150px'>Destination</th>
                                    <th className='min-w-150px'>N Document</th>
                                    <th className='min-w-200px text-end rounded-end'> Actions</th>
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
                                                    115
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
                                                    115
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
                                                    1159
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
                                                    115
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                            Groupe 1
                                        </a>
                                    </td>
                                    <td>
                                        <span className='badge badge-light-primary fs-7 fw-semibold'>GR1</span>
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
            </div>
            <div className="d-flex justify-content-center align-items-center fixed-top" style={{ zIndex: 999 }}>
                <Alert className="w-50" style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
                    show={showAlert} onClose={() => setShowAlert(false)} dismissible  >
                    <div className="card">
                        <div className="card-body">
                            <div className='row g-5 g-xxl-8'>
                                <div className='col-xl-6'>
                                    {/* begin::Form group  */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Code demande</label>
                                        <select className='form-select bg-transparent'  >
                                            <option selected disabled hidden value=""></option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                    {/* end::Form group */}
                                </div>
                                <div className='col-xl-6'>
                                    {/* begin::Form group Groupe */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Groupe</label>
                                        <select className='form-select bg-transparent'  >
                                            <option selected disabled hidden value=""></option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                    {/* end::Form group */}
                                </div>
                                <div className='col-xl-6'>
                                    {/* begin::Form group  */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Nature</label>
                                        <select className='form-select bg-transparent'  >
                                            <option selected disabled hidden value=""></option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-xl-6'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Numero Document </label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            {...formik.getFieldProps('NumeroDoc')}
                                            className={clsx(
                                                'form-control bg-transparent',
                                                {
                                                    'is-invalid': formik.touched.NumeroDoc && formik.errors.NumeroDoc,
                                                },
                                                {
                                                    'is-valid': formik.touched.NumeroDoc && !formik.errors.NumeroDoc,
                                                }
                                            )}
                                        />
                                        {formik.touched.NumeroDoc && formik.errors.NumeroDoc && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.NumeroDoc}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Intitule Demande </label>
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
                                    <a
                                        href='#'
                                        className='btn btn-sm btn-light-primary'
                                    >
                                        <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                                        Ajouter
                                    </a>
                                    <a
                                        href='#'
                                        className='btn btn-sm btn-light-danger'
                                        style={{ marginLeft: '10px' }}
                                        onClick={() => setShowAlert(false)}
                                    >
                                        <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                                        Anuuler
                                    </a>
                                    {/* end::Form group */}
                                </div>
                            </div>
                        </div>
                    </div>
                </Alert>
            </div>
        </>
    )
}