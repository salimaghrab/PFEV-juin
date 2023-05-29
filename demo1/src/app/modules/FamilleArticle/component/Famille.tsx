import { FaSearch } from "react-icons/fa";
import { KTSVG } from "../../../../_metronic/helpers";
import { Link } from "react-router-dom";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import { useState } from "react";
import { Alert } from "react-bootstrap";
const initialValues = {
    Intitule: '',
    Type: '',
    Unite: '',
    origine:'',
    remise:''
}
const FamilleSchema = Yup.object().shape({
    Intitule: Yup.string()
        .required('champs obligatoire'),
    Type: Yup.string()
        .required('champs obligatoire'),
    Unite: Yup.string()
        .required('champs obligatoire'),
        origine: Yup.string()
        .min(3,'Min 3 symbole'),
    remise: Yup.number()
        .nullable(),
})

export function Famille() {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };
    const [loading, setLoading] = useState(false)
    const formik = useFormik({
        initialValues,
        validationSchema: FamilleSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            setLoading(true)
        },
    })

    return (
        <>
            <div className='card'>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Gestion des Familles </span>
                    </h3>
                    <div className='card-toolbar'>
                        {/* begin::Search */}
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="search ..."
                                style={{ marginLeft: '550px' }}
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
                                    <th className='ps-4 min-w-200px rounded-start'>Famille</th>
                                    <th className='min-w-200px'>Intitule</th>
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
            <div className="d-flex justify-content-center align-items-center fixed-top " style={{ zIndex: 999 }}>
                <Alert className="w-50" style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
                    show={showAlert} onClose={() => setShowAlert(false)} dismissible  >
                    <div className="card ">
                        <div className='card-header border-0 pt-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bold fs-3 mb-1'>Famille</span>
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className='row '>
                                <div className='col-xl-6'>
                                    {/* begin::Form group Code */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Code</label>
                                        <input
                                            readOnly
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            className='form-control bg-transparent'
                                        />
                                    </div>
                                    {/* end::Form group */}
                                </div>
                                <div className='col-xl-6'>
                                    {/* begin::Form group Intitule */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Intitule</label>
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
                                    {/* end::Form group */}
                                </div>
                                <div className='col-xl-6'>
                                    {/* begin::Form group Type */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Type</label>
                                        <select className="form-control bg-transparent">
                                            <option selected disabled hidden value=""></option>
                                            <option>Standar</option>

                                        </select>
                                        {formik.touched.Type && formik.errors.Type && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.Type}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {/* end::Form group */}
                                </div>
                                <div className='col-xl-6'>
                                    {/* begin::Form group Unite */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Unite</label>
                                        <select className="form-control bg-transparent">
                                            <option selected disabled hidden value=""></option>
                                            <option>Standar</option>

                                        </select>
                                        {formik.touched.Unite && formik.errors.Unite && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.Unite}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* end::Form group */}
                                </div>
                                <div className='col-xl-6'>
                                    {/* begin::Form group Suivi Stock */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Suivi Stock</label>
                                        <select className="form-control bg-transparent">
                                            <option selected disabled hidden value=""></option>
                                            <option>Standar</option>

                                        </select>
                                       
                                    </div>
                                   
                                    {/* end::Form group */}
                                </div>
                                <div className='col-xl-6'>
                                    {/* begin::Form group origine */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Pays d'origine</label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            {...formik.getFieldProps('origine')}
                                            className={clsx(
                                                'form-control bg-transparent',
                                                {
                                                    'is-invalid': formik.touched.origine && formik.errors.origine,
                                                },
                                                {
                                                    'is-valid': formik.touched.origine && !formik.errors.origine,
                                                }
                                            )}
                                        />
                                        {formik.touched.origine && formik.errors.origine && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.origine}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {/* end::Form group */}
                                   
                                </div>
                                <div className='col-xl-6'>
                                    {/* begin::Form group remise */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Max remise</label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            {...formik.getFieldProps('remise')}
                                            className={clsx(
                                                'form-control bg-transparent',
                                                {
                                                    'is-invalid': formik.touched.remise && formik.errors.remise,
                                                },
                                                {
                                                    'is-valid': formik.touched.remise && !formik.errors.remise,
                                                }
                                            )}
                                        />
                                        {formik.touched.remise && formik.errors.remise && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.remise}</span>
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