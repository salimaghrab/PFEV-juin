import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import { KTSVG } from "../../../../../_metronic/helpers";
import * as Yup from 'yup'
import { Alert } from "react-bootstrap";
import clsx from "clsx";



const initialValues = {
    intitule: '',
    Annee: '',
    Lettre: '',
    Chiffre: '',
    Caract: '',
    Compteur: '',
    Masque: '',
    Models: '',
    DerniereCmpt: '',

}

const ModelSchema = Yup.object().shape({
    intitule: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(10, 'Maximum 10 symbols')
        .required('champs is required'),
    Masque: Yup.number()
        .required('champs is required'),
    Annee: Yup.number()
        .required('champs is required'),
    Lettre: Yup.string()
        .min(5, 'Minimum 5 symbols')
        .max(20, 'Maximum 20 symbols')
        .required('champs is required'),
    Chiffre: Yup.string()
        .min(5, 'Minimum 5 symbols')
        .max(20, 'Maximum 20 symbols')
        .required('champs is required'),
    Caract: Yup.string()
        .min(5, 'Minimum 5 symbols')
        .max(20, 'Maximum 20 symbols')
        .required('champs is required'),
    Compteur: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(10, 'Maximum 10 symbols')
        .required('champs Groupe code is required'),
    DerniereCmpt: Yup.number()
        .required('champs is required'),
    Models: Yup.number()
        .required('champs is required')

})




export function ModelSerie() {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };
    const [loading, setLoading] = useState(false)
    const formik = useFormik({
        initialValues,
        validationSchema: ModelSchema,
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
                        <span className='card-label fw-bold fs-3 mb-1'>Model Serie</span>
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
                                    <th className='min-w-250px'>Intitule</th>
                                    <th className='min-w-250px'>Format</th>
                                    <th className='min-w-250px'>dernier Model</th>
                                    <th className='min-w-200px text-end rounded-end'>Actions </th>
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
                                                    1hgjf
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                            xs cc 1
                                        </a>
                                    </td>
                                    <td>
                                        <span className='badge badge-light-primary fs-7 fw-semibold'>acsdc</span>
                                    </td>
                                    <td>
                                        <span className='badge badge-light-primary fs-7 fw-semibold'>acsdc</span>
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
        {step === 1 && (

                    <div className="card">
                        <div className='card-header border-0 pt-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bold fs-3 mb-1'>Gestion Models Serie</span>
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className='row'>
                                <div className='col'>
                                    {/* begin::Form group intitule */}
                                    <div className='fv-row mb-6'>
                                        <label className='form-label fw-bolder text-dark fs-6'>intitule</label>
                                        <input
                                            placeholder='Raison Sociale'
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
                                </div>
                                {/* end::Form group */}
                            </div>
                        </div>
                    </div>
        )}
        {step === 2 && (
                    <div className="card">
                        <div className='card-header border-0 pt-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bold fs-3 mb-1'>Masque</span>
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-xl-8'>
                                    {/* begin::Form group Annee */}
                                    <div className='fv-row mb-6'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Annee</label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            {...formik.getFieldProps('Annee')}
                                            className={clsx(
                                                'form-control bg-transparent',
                                                {
                                                    'is-invalid': formik.touched.Annee && formik.errors.Annee,
                                                },
                                                {
                                                    'is-valid': formik.touched.Annee && !formik.errors.Annee,
                                                }
                                            )}
                                        />
                                        {formik.touched.Annee && formik.errors.Annee && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.intitule}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {/* end::Form group */}
                                <div className='col-xl-8'>
                                    {/* begin::Form group Lettre */}
                                    <div className='fv-row mb-6'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Lettre</label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            {...formik.getFieldProps('Lettre')}
                                            className={clsx(
                                                'form-control bg-transparent',
                                                {
                                                    'is-invalid': formik.touched.Lettre && formik.errors.Lettre,
                                                },
                                                {
                                                    'is-valid': formik.touched.Lettre && !formik.errors.Lettre,
                                                }
                                            )}
                                        />
                                        {formik.touched.Lettre && formik.errors.Lettre && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.intitule}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className='col-xl-8'>
                                    {/* begin::Form group Chiffre */}
                                    <div className='fv-row mb-6'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Chiffre</label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            {...formik.getFieldProps('Chiffre')}
                                            className={clsx(
                                                'form-control bg-transparent',
                                                {
                                                    'is-invalid': formik.touched.Chiffre && formik.errors.Chiffre,
                                                },
                                                {
                                                    'is-valid': formik.touched.Chiffre && !formik.errors.Chiffre,
                                                }
                                            )}
                                        />
                                        {formik.touched.Chiffre && formik.errors.Chiffre && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.intitule}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className='col-xl-8'>
                                    {/* begin::Form group Caract */}
                                    <div className='fv-row mb-6'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Caractere</label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            {...formik.getFieldProps('Caract')}
                                            className={clsx(
                                                'form-control bg-transparent',
                                                {
                                                    'is-invalid': formik.touched.Caract && formik.errors.Caract,
                                                },
                                                {
                                                    'is-valid': formik.touched.Caract && !formik.errors.Caract,
                                                }
                                            )}
                                        />
                                        {formik.touched.Caract && formik.errors.Caract && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.intitule}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className='col-xl-8'>
                                    {/* begin::Form group Compteur */}
                                    <div className='fv-row mb-6'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Compteur</label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            {...formik.getFieldProps('Compteur')}
                                            className={clsx(
                                                'form-control bg-transparent',
                                                {
                                                    'is-invalid': formik.touched.Compteur && formik.errors.Compteur,
                                                },
                                                {
                                                    'is-valid': formik.touched.Compteur && !formik.errors.Compteur,
                                                }
                                            )}
                                        />
                                        {formik.touched.Compteur && formik.errors.Compteur && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.intitule}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        )}
        {step === 3 && (
                    <div className="card">
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-xl-8'>
                                    {/* begin::Form group Masque */}
                                    <div className='fv-row mb-6'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Masque</label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            {...formik.getFieldProps('Masque')}
                                            className={clsx(
                                                'form-control bg-transparent',
                                                {
                                                    'is-invalid': formik.touched.Masque && formik.errors.Masque,
                                                },
                                                {
                                                    'is-valid': formik.touched.Masque && !formik.errors.Masque,
                                                }
                                            )}
                                        />
                                        {formik.touched.Masque && formik.errors.Masque && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.intitule}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                    {step === 4 && (
                    <div className="card">
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-xl-8'>
                                    {/* begin::Form group Models */}
                                    <div className='fv-row mb-6'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Models</label>
                                        <input
                                            placeholder='Raison Sociale'
                                            type='text'
                                            autoComplete='off'
                                            {...formik.getFieldProps('Models')}
                                            className={clsx(
                                                'form-control bg-transparent',
                                                {
                                                    'is-invalid': formik.touched.Models && formik.errors.Models,
                                                },
                                                {
                                                    'is-valid': formik.touched.Models && !formik.errors.Models,
                                                }
                                            )}
                                        />
                                        {formik.touched.Models && formik.errors.Models && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.intitule}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                    {step === 5 && (
                    <div className="card">
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-xl-8'>
                                    {/* begin::Form group DerniereCmpt */}
                                    <div className='fv-row mb-6'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Derniere Compteur</label>
                                        <input
                                            placeholder='Raison Sociale'
                                            type='text'
                                            autoComplete='off'
                                            {...formik.getFieldProps('DerniereCmpt')}
                                            className={clsx(
                                                'form-control bg-transparent',
                                                {
                                                    'is-invalid': formik.touched.DerniereCmpt && formik.errors.DerniereCmpt,
                                                },
                                                {
                                                    'is-valid': formik.touched.DerniereCmpt && !formik.errors.DerniereCmpt,
                                                }
                                            )}
                                        />
                                        {formik.touched.DerniereCmpt && formik.errors.DerniereCmpt && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.intitule}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
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
        {step < 4 && (
            <Link
             className='btn btn-sm btn-light-primary' to='' onClick={handleNext}>
            Next
          </Link>
        )}
        {step === 4 && (
          <Link
          className='btn btn-sm btn-light-success' to=''  onClick={() => setShowAlert(false)}>
            Done
          </Link>
        )}
      </div>
                </Alert>
            </div>
        </>
    )
}