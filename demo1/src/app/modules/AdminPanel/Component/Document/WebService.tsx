import clsx from 'clsx';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Yup from 'yup'
import { KTSVG } from '../../../../../_metronic/helpers';
const initialValues = {
    chemin: '',
}
const WebServiceSchema = Yup.object().shape({
    chemin: Yup.string()
        .required('champs obligatoire')
})


export function WebService() {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };
    const [loading, setLoading] = useState(false)
    const formik = useFormik({
        initialValues,
        validationSchema: WebServiceSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            setLoading(true)
        },
    })
    return (
        <>
            <div className='card '>
                <div className='card-header border-0 pt-5'>
                    <label>
                        <input
                            className=" bg-transparent"
                            type="checkbox"
                        />
                        Activer Web Service
                    </label>
                </div>

                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>



                    {/* begin::Form group Activite */}
                    <div className='col'>
                        <div className='fv-row'>
                            <label className='form-label fw-bolder text-dark fs-6'>Categorie</label>
                            <input
                                className=" bg-transparent"
                                type="radio"
                                style={{ marginLeft: '75px' }}
                            />
                            Document
                        </div>
                    </div>
                    {/* end::Form group */}
                    <div className='col'>
                        <div className='fv-row'>
                            <input
                                className=" bg-transparent"
                                type="radio"
                                style={{ marginLeft: '100px' }}
                            />
                            Structure
                        </div>
                    </div>

                    <div className='card-toolbar'>
                        <Link
                            className='btn btn-sm btn-light-primary' onClick={handleClick} to='' >
                            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                            Nouveau
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
                                    <th className='ps-4 min-w-200px rounded-start'>code</th>
                                    <th className='min-w-200px'>Intutile</th>
                                    <th className='min-w-200px'>Type</th>
                                    <th className='min-w-200px'>Type</th>
                                    <th className='min-w-150px'>Type</th>
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
                {/* begin::Body */}
            </div>
            <div className="d-flex justify-content-center align-items-center fixed-top" style={{ zIndex: 999 }}>
                <Alert className="w-50" style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
                    show={showAlert} onClose={() => setShowAlert(false)} dismissible  >
                    <div className="card">
                        <div className='card-header border-0 pt-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bold fs-3 mb-1'>Ajouter Web Service </span>
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className='row g-5 g-xxl-8'>
                                <div className='col-xl-6'>
                                    {/* begin::Form group Domaine */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Domaine </label>
                                        <select className='form-select bg-transparent'  >
                                            <option selected disabled hidden value=""></option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                    {/* end::Form group */}
                                </div>
                                <div className='col-xl-6'>
                                    {/* begin::Form group Souche */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Souche </label>
                                        <select className='form-select bg-transparent'  >
                                            <option selected disabled hidden value=""></option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                    {/* end::Form group */}
                                </div>
                                <div className='col-xl-6'>
                                    {/* begin::Form group TypeDoc */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Type document </label>
                                        <select className='form-select bg-transparent'  >
                                            <option selected disabled hidden value=""></option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-xl-6'>
                                    {/* begin::Form group TypeService */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Type Service  </label>
                                        <select className='form-select bg-transparent'  >
                                            <option selected disabled hidden value=""></option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>chemin</label>
                                        <input
                                            placeholder='chemin'
                                            type='text'
                                            autoComplete='off'
                                            {...formik.getFieldProps('chemin')}
                                            className={clsx(
                                                'form-control bg-transparent',
                                                {
                                                    'is-invalid': formik.touched.chemin && formik.errors.chemin,
                                                },
                                                {
                                                    'is-valid': formik.touched.chemin && !formik.errors.chemin,
                                                }
                                            )}
                                        />
                                        {formik.touched.chemin && formik.errors.chemin && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.chemin}</span>
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