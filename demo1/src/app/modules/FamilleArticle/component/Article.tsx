import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { KTSVG } from '../../../../_metronic/helpers'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import { useFormik } from 'formik'
import { Alert } from 'react-bootstrap'
import clsx from 'clsx'
const initialValues = {
    reference: '',
    designation: '',
    descritpion: '',
    prixA: '',
    prixV: '',
    coeff: '',
    uniteS: ''
}
const ArticleSchema = Yup.object().shape({
    reference: Yup.string()
        .required('champs obligatoire'),
    designation: Yup.string()
        .required('champs obligatoire'),
    descritpion: Yup.string()
        .required('champs obligatoire'),
    prixA: Yup.number()
        .required('champs obligatoire'),
    prixV: Yup.number()
        .required('champs obligatoire'),
    coeff: Yup.number()
        .required('champs obligatoire'),
    uniteS: Yup.number()
        .required('champs obligatoire'),
})
export function Article() {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };
    const [loading, setLoading] = useState(false)
    const formik = useFormik({
        initialValues,
        validationSchema: ArticleSchema,
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
                <div className="row">
                    <div className="col-4">
                        <br></br>
                        <div className="card bg-light" style={{ marginLeft: '10px' }}>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Liste des Familles</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='card'>
                                    {/* begin::Body */}
                                    <div className='card-body py-3'>
                                        {/* begin::Table container */}
                                        <div className='table-responsive'>
                                            {/* begin::Table */}
                                            <table className='table align-middle gs-0 gy-4'>
                                                {/* begin::Table head */}
                                                <thead>
                                                    <tr className='fw-bold text-muted bg-light'>
                                                        <th className='ps-4 min-w-150px rounded-start'>Famille</th>
                                                        <th className='min-w-100px'>Intitule</th>
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
                                                                        FAN00001
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
                                                                        FRAIS
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
                        </div>
                        <br></br>
                        <div className="card bg-light" style={{ marginLeft: '10px' }}>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Type de Liste</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='card'>
                                    {/* begin::Body */}
                                    <div className='card-body py-3'>
                                        <div className='fv-row mb-8'>
                                            <div className='col'>
                                                <input
                                                    className=" bg-transparent"
                                                    type="radio"
                                                    style={{ marginLeft: '10px' }}

                                                />
                                                Referance Article
                                            </div>

                                            <br></br>
                                            <div className='col'>
                                                <input
                                                    className=" bg-transparent"
                                                    type="radio"
                                                    style={{ marginLeft: '10px' }}
                                                />
                                                Articles Gammes
                                            </div>
                                            <br></br>
                                            <div className='col'>
                                                <input
                                                    className=" bg-transparent"
                                                    type="radio"
                                                    style={{ marginLeft: '10px' }}
                                                />
                                                Articles en sommeil
                                            </div>
                                        </div>
                                    </div>
                                    {/* end::Body */}
                                </div>
                            </div>
                        </div>

                    </div>


                    {/** other card for the f */}
                    <div className="col-8">
                        <br></br>
                        <div className="card bg-light" style={{ marginRight: '10px' }}>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Article</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='card'>
                                    {/* begin::Header */}
                                    <div className='card-header border-0 pt-5'>
                                        <div className='card-toolbar'>
                                            {/* begin::Search */}
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="search ..."
                                                    style={{ marginLeft: '300px' }}
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
                                                        <th className='ps-4 min-w-100px rounded-start'>Reference </th>
                                                        <th className='min-w-100px'>Designation</th>
                                                        <th className='min-w-100px'>Famille</th>
                                                        <th className='min-w-100px'>Prix d'achat</th>
                                                        <th className='min-w-150px'>Prix de vente</th>
                                                        <th className='min-w-150px'>Unite de stock</th>
                                                        <th className='min-w-100px text-end rounded-end'> Actions</th>
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
                                                                        hdt
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
                                                                        hghhr
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
                                                                        yhgfb
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
                                                                        bgb
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
                                                                        dgnb
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
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="d-flex justify-content-center align-items-center fixed-top" style={{ zIndex: 999 }}>
            <Alert className="w-50" style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
          show={showAlert} onClose={() => setShowAlert(false)} dismissible  >
       
                    <div className="card  bg-light">
                    {step === 1 && (
                        <div className='card '>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Identification</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row g-5 g-xxl-8'>
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Reference </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'
                                                {...formik.getFieldProps('reference')}
                                                className={clsx(
                                                    'form-control bg-transparent',
                                                    {
                                                        'is-invalid': formik.touched.reference && formik.errors.reference,
                                                    },
                                                    {
                                                        'is-valid': formik.touched.reference && !formik.errors.reference,
                                                    }
                                                )}
                                            />
                                            {formik.touched.reference && formik.errors.reference && (
                                                <div className='fv-plugins-message-container'>
                                                    <div className='fv-help-block'>
                                                        <span role='alert'>{formik.errors.reference}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        {/* begin::Form group*/}
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Type</label>
                                            <select className='form-select bg-transparent'  >
                                                <option selected disabled hidden value=""></option>
                                                <option>Strandard</option>
                                                <option>Gamme</option>
                                            </select>
                                        </div>
                                        {/* end::Form group */}
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Designation </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'
                                                {...formik.getFieldProps('designation')}
                                                className={clsx(
                                                    'form-control bg-transparent',
                                                    {
                                                        'is-invalid': formik.touched.designation && formik.errors.designation,
                                                    },
                                                    {
                                                        'is-valid': formik.touched.designation && !formik.errors.designation,
                                                    }
                                                )}
                                            />
                                            {formik.touched.designation && formik.errors.designation && (
                                                <div className='fv-plugins-message-container'>
                                                    <div className='fv-help-block'>
                                                        <span role='alert'>{formik.errors.designation}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* end::Form group */}
                                    </div>
                                    <div className='col-xl-3'>
                                        {/* begin::Form group */}
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Nature</label>
                                            <select className='form-select bg-transparent'  >
                                                <option selected disabled hidden value=""></option>
                                                <option>Strandard</option>
                                                <option>Gamme</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-xl-3'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>suivi stock</label>
                                            <select className='form-select bg-transparent'  >
                                                <option selected disabled hidden value=""></option>
                                                <option>Strandard</option>
                                                <option>Gamme</option>
                                            </select>
                                        </div>
                                        {/* end::Form group*/}
                                    </div>
                                    <div className='col'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>descritpion </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'
                                                {...formik.getFieldProps('descritpion')}
                                                className={clsx(
                                                    'form-control bg-transparent',
                                                    {
                                                        'is-invalid': formik.touched.descritpion && formik.errors.descritpion,
                                                    },
                                                    {
                                                        'is-valid': formik.touched.descritpion && !formik.errors.descritpion,
                                                    }
                                                )}
                                            />
                                            {formik.touched.descritpion && formik.errors.descritpion && (
                                                <div className='fv-plugins-message-container'>
                                                    <div className='fv-help-block'>
                                                        <span role='alert'>{formik.errors.descritpion}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        {/* end::Form group */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                        {step === 2 && (
                        <div className='card '>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Tarif</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row g-5 g-xxl-8'>
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Prix Achat</label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'
                                                {...formik.getFieldProps('prixA')}
                                                className={clsx(
                                                    'form-control bg-transparent',
                                                    {
                                                        'is-invalid': formik.touched.prixA && formik.errors.prixA,
                                                    },
                                                    {
                                                        'is-valid': formik.touched.prixA && !formik.errors.prixA,
                                                    }
                                                )}
                                            />
                                            {formik.touched.prixA && formik.errors.prixA && (
                                                <div className='fv-plugins-message-container'>
                                                    <div className='fv-help-block'>
                                                        <span role='alert'>{formik.errors.prixA}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>coefficient </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'
                                                {...formik.getFieldProps('coeff')}
                                                className={clsx(
                                                    'form-control bg-transparent',
                                                    {
                                                        'is-invalid': formik.touched.coeff && formik.errors.coeff,
                                                    },
                                                    {
                                                        'is-valid': formik.touched.coeff && !formik.errors.coeff,
                                                    }
                                                )}
                                            />
                                            {formik.touched.coeff && formik.errors.coeff && (
                                                <div className='fv-plugins-message-container'>
                                                    <div className='fv-help-block'>
                                                        <span role='alert'>{formik.errors.coeff}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Prix de vente </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'
                                                {...formik.getFieldProps('prixV')}
                                                className={clsx(
                                                    'form-control bg-transparent',
                                                    {
                                                        'is-invalid': formik.touched.prixV && formik.errors.prixV,
                                                    },
                                                    {
                                                        'is-valid': formik.touched.prixV && !formik.errors.prixV,
                                                    }
                                                )}
                                            />
                                            {formik.touched.prixV && formik.errors.prixV && (
                                                <div className='fv-plugins-message-container'>
                                                    <div className='fv-help-block'>
                                                        <span role='alert'>{formik.errors.prixV}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* end::Form group */}
                                    </div>

                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Unite de Stock </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'
                                                {...formik.getFieldProps('uniteS')}
                                                className={clsx(
                                                    'form-control bg-transparent',
                                                    {
                                                        'is-invalid': formik.touched.uniteS && formik.errors.uniteS,
                                                    },
                                                    {
                                                        'is-valid': formik.touched.uniteS && !formik.errors.uniteS,
                                                    }
                                                )}
                                            />
                                            {formik.touched.uniteS && formik.errors.uniteS && (
                                                <div className='fv-plugins-message-container'>
                                                    <div className='fv-help-block'>
                                                        <span role='alert'>{formik.errors.uniteS}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        {/* end::Form group */}
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
        {step < 2 && (
            <Link
             className='btn btn-sm btn-light-primary' to='' onClick={handleNext}>
            Next
          </Link>
        )}
        {step === 2 && (
          <Link
          className='btn btn-sm btn-light-success' to=''  onClick={() => setShowAlert(false)}>
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
{/**
 */}