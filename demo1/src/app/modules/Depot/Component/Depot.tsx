import { Link } from "react-router-dom";
import { KTSVG } from "../../../../_metronic/helpers";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import { useState } from "react";
import { Alert } from "react-bootstrap";

const initialValues = {
    intitule: '',
    codepostale: '',
    adresse: '',
    mail: '',
    teleph1: '',
    teleph2: '',
    contact: ''
}
const DepotSchema = Yup.object().shape({
    intitule: Yup.string()
        .required('champs obligatoire'),
    codepostale: Yup.string()
        .required('champs obligatoire'),
    adresse: Yup.string()
        .required('champs obligatoire'),
    mail: Yup.string()
        .email('entrez un mail valide')
        .required('champs obligatoire'),
    teleph1: Yup.string()
        .required('champs obligatoire'),
    teleph2: Yup.string()
        .required('champs obligatoire'),
    contact: Yup.string()
        .required('champs obligatoire'),

})
export function Depot() {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };
    const [loading, setLoading] = useState(false)
    const formik = useFormik({
        initialValues,
        validationSchema: DepotSchema,
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
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Liste des Depots</span>
                    </h3>
                    <div className='card-toolbar'>
                        <Link
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
                                    <th className='ps-4 min-w-200px rounded-start'>code</th>
                                    <th className='min-w-200px'>Intutile</th>
                                    <th className='min-w-200px'>Adresse</th>
                                    <th className='min-w-200px'>Ville</th>
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
                                                    1888
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                            hjl
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
        

                    <div className="card bg-light">
                        <div className='card-header border-0 pt-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bold fs-3 mb-1'>Gestion de Depot</span>
                            </h3>
                        </div>
                        <div className="card-body">
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
                                            {/* begin::Form group code */}
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>code</label>
                                                <input
                                                    placeholder='Raison Sociale'
                                                    type='text'
                                                    autoComplete='off'

                                                    className=
                                                    'form-control bg-transparent'
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        {/* end::Form group */}
                                        {/* begin::Form group intitule */}
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>intitule</label>
                                                <input
                                                    placeholder='intitule'
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('intitule')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.intitule && formik.errors.intitule,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.intitule && !formik.errors.intitule,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.intitule && formik.errors.intitule && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.intitule}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            {/* end::Form group */}

                                        </div>
                                        {/* begin::Form group Depot Parent */}
                                        <div className='col'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Depot Parent</label>
                                                <select
                                                    className='form-control bg-transparent'
                                                >
                                                    <option>kjg</option>
                                                </select>

                                                {/* end::Form group */}
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
                                        <span className='card-label fw-bold fs-3 mb-1'>Coordonnees</span>
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className='row'>
                                        <div className='col-xl-6'>
                                            {/* begin::Form group codepostale */}
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Pays Origine</label>
                                                <select className='form-select bg-transparent' >
                                                    <option selected disabled hidden value=""></option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-xl-6'>
                                            {/* begin::Form group codepostale */}
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Ville</label>
                                                <select className='form-select bg-transparent'  >
                                                    <option selected disabled hidden value=""></option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                </select>
                                            </div>
                                            </div>
                                            <div className='col-xl-6'>
                                                {/* begin::Form group codepostale */}
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>Region</label>
                                                    <select className='form-select bg-transparent' >
                                                        <option selected disabled hidden value=""></option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-xl-6'>
                                                {/* begin::Form group codepostale */}
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>Code Postale</label>
                                                    <input
                                                        placeholder='codepostale'
                                                        type='text'
                                                        autoComplete='off'
                                                        {...formik.getFieldProps('codepostale')}
                                                        className={clsx(
                                                            'form-control bg-transparent',
                                                            {
                                                                'is-invalid': formik.touched.codepostale && formik.errors.codepostale,
                                                            },
                                                            {
                                                                'is-valid': formik.touched.codepostale && !formik.errors.codepostale,
                                                            }
                                                        )}
                                                    />
                                                    {formik.touched.codepostale && formik.errors.codepostale && (
                                                        <div className='fv-plugins-message-container'>
                                                            <div className='fv-help-block'>
                                                                <span role='alert'>{formik.errors.codepostale}</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            {/* end::Form group */}
                                            {/* begin::Form group adresse */}
                                            <div className='col'>
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>Adresse</label>
                                                    <input
                                                        placeholder='adresse'
                                                        type='text'
                                                        autoComplete='off'
                                                        {...formik.getFieldProps('adresse')}
                                                        className={clsx(
                                                            'form-control bg-transparent',
                                                            {
                                                                'is-invalid': formik.touched.adresse && formik.errors.adresse,
                                                            },
                                                            {
                                                                'is-valid': formik.touched.adresse && !formik.errors.adresse,
                                                            }
                                                        )}
                                                    />
                                                    {formik.touched.adresse && formik.errors.adresse && (
                                                        <div className='fv-plugins-message-container'>
                                                            <div className='fv-help-block'>
                                                                <span role='alert'>{formik.errors.adresse}</span>
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
                            {step === 3 && (
                            <div className='card '>
                                <div className='card-header border-0 pt-5'>
                                    <h3 className='card-title align-items-start flex-column'>
                                        <span className='card-label fw-bold fs-3 mb-1'>Telecommunication</span>
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className='row'>
                                        <div className='col-xl-6'>
                                            {/* begin::Form group mail */}
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>E-mail</label>
                                                <input
                                                    placeholder='Telepone'
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('mail')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.mail && formik.errors.mail,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.mail && !formik.errors.mail,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.mail && formik.errors.mail && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.mail}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {/* end::Form group */}
                                        {/* begin::Form group cobtact */}
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>contact</label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('contact')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.contact && formik.errors.contact,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.contact && !formik.errors.contact,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.contact && formik.errors.contact && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.contact}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {/* end::Form group */}
                                        {/* begin::Form group cotation */}
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Telephone</label>
                                                <input
                                                    placeholder='Telepone'
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('teleph1')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.teleph1 && formik.errors.teleph1,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.teleph1 && !formik.errors.teleph1,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.teleph1 && formik.errors.teleph1 && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.teleph1}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {/* end::Form group */}

                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Telephone</label>
                                                <input
                                                    placeholder='Telepone'
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('teleph2')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.teleph2 && formik.errors.teleph2,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.teleph2 && !formik.errors.teleph2,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.teleph2 && formik.errors.teleph2 && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.teleph2}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* end::Form group */}
                                </div>
                            </div>
                            )}
                            <br></br>
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
          className='btn btn-sm btn-light-success' to=''  onClick={() => setShowAlert(false)}>
            Done
          </Link>
        )}
      </div>
                        </div>
                    </div>
                </Alert>
            </div>
        </>
    )
}