import * as Yup from 'yup'
import { Link } from "react-router-dom";
import { KTSVG, toAbsoluteUrl } from "../../../../_metronic/helpers";
import { useFormik } from 'formik';
import { useState } from 'react';
import clsx from 'clsx';
import { Alert } from 'react-bootstrap';
const initialValues = {
    intitule: '',
    cmptier: '',
    interlocuteur: '',
    commentaire: '',
    adresse: '',
    compadresse: '',
    codepostale: '',
    pays: '',
    tel1: '',
    tel2: '',
    telfixe: '',
    poste: '',
    telecopie: '',
    email: '',
    site: '',
    Idfiscale: ''
}
const TierSchema = Yup.object().shape({

})
export function Tiers() {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };
    const [, setLoading] = useState(false)
    const formik = useFormik({
        initialValues,
        validationSchema: TierSchema,
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
                        <span className='card-label fw-bold fs-3 mb-1'>List des Groupe</span>
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
                                    <th className='ps-4 min-w-100px rounded-start'>Type</th>
                                    <th className='min-w-100px'>Code </th>
                                    <th className='min-w-150px'>ID fascale</th>
                                    <th className='min-w-100px'>Nom</th>
                                    <th className='min-w-100px'>Adresse</th>
                                    <th className='min-w-100px'>Ville</th>
                                    <th className='min-w-150px'>Compte General</th>
                                    <th className='min-w-100px'>E-mail</th>
                                    <th className='min-w-100px'>Interlocuteur</th>
                                    <th className='min-w-150px text-end rounded-end'> Actions</th>
                                </tr>
                            </thead>
                            {/* end::Table head */}
                            {/* begin::Table body */}
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='symbol symbol-50px'>
                                            <img src={toAbsoluteUrl('/media/avatars/unknown.jpg')} alt='' />
                                        </div>
                                    </td>
                                    <td>
                                        <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                            code
                                        </a>
                                    </td>
                                    <td>
                                        <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                            code
                                        </a>
                                    </td>
                                    <td>
                                        <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                            code
                                        </a>
                                    </td>
                                    <td>
                                        <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                            code
                                        </a>
                                    </td>
                                    <td>
                                        <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                            code
                                        </a>
                                    </td>
                                    <td>
                                        <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                            code
                                        </a>
                                    </td>
                                    <td>
                                        <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                            code
                                        </a>
                                    </td>
                                    <td>
                                        <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                            code
                                        </a>
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
                <Alert className="w-50" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
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
                                        <div className='col-xl-3'>
                                            {/* begin::Form group */}
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Type</label>
                                                <select className='form-select bg-transparent'  >
                                                    <option selected disabled hidden value=""></option>
                                                    <option>Strandard</option>
                                                    <option>Gamme</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-xl-3'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Souche</label>
                                                <select className='form-select bg-transparent'  >
                                                    <option selected disabled hidden value=""></option>
                                                    <option>Strandard</option>
                                                    <option>Gamme</option>
                                                </select>
                                            </div>
                                            {/* end::Form group*/}
                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>intitule </label>
                                                <input
                                                    placeholder=''
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
                                        <div className='col-xl-6'>
                                            {/* begin::Form group*/}
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Compte Tiers </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('cmptier')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.cmptier && formik.errors.cmptier,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.cmptier && !formik.errors.cmptier,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.cmptier && formik.errors.cmptier && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.cmptier}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            {/* end::Form group */}
                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Qualite</label>
                                                <select className='form-select bg-transparent'  >
                                                    <option selected disabled hidden value=""></option>
                                                    <option>Strandard</option>
                                                    <option>Gamme</option>
                                                </select>
                                            </div>

                                            {/* end::Form group */}
                                        </div>
                                        <div className='col-xl-6'>
                                            {/* begin::Form group*/}
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>compte collectif </label>
                                                <input
                                                    readOnly
                                                    type='text'
                                                    autoComplete='off'
                                                    className='form-control bg-transparent'
                                                />

                                            </div>
                                            {/* end::Form group */}
                                        </div>
                                        <div className='col-xl-6'>
                                            {/* begin::Form group*/}
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>interlocuteur </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('interlocuteur')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.interlocuteur && formik.errors.interlocuteur,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.interlocuteur && !formik.errors.interlocuteur,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.interlocuteur && formik.errors.interlocuteur && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.interlocuteur}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            {/* end::Form group */}
                                        </div>
                                        <div className='col'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>commentaire </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('commentaire')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.commentaire && formik.errors.commentaire,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.commentaire && !formik.errors.commentaire,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.commentaire && formik.errors.commentaire && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.commentaire}</span>
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
                                        <span className='card-label fw-bold fs-3 mb-1'>Coordonnees</span>
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className='row g-5 g-xxl-8'>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>adresse </label>
                                                <input
                                                    placeholder=''
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
                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>complement adresse </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('compadresse')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.compadresse && formik.errors.compadresse,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.compadresse && !formik.errors.compadresse,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.compadresse && formik.errors.compadresse && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.compadresse}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* end::Form group */}
                                        </div>
                                        <div className='col-xl-6'>
                                            {/* begin::Form group*/}
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>ville</label>
                                                <select className='form-select bg-transparent'  >
                                                    <option selected disabled hidden value=""></option>
                                                    <option>Strandard</option>
                                                    <option>Gamme</option>
                                                </select>
                                            </div>
                                            {/* end::Form group */}
                                        </div>
                                        <div className='col-xl-3'>
                                            {/* begin::Form group */}
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Delegation</label>
                                                <select className='form-select bg-transparent'  >
                                                    <option selected disabled hidden value=""></option>
                                                    <option>Strandard</option>
                                                    <option>Gamme</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-xl-3'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Localite</label>
                                                <select className='form-select bg-transparent'  >
                                                    <option selected disabled hidden value=""></option>
                                                    <option>Strandard</option>
                                                    <option>Gamme</option>
                                                </select>
                                            </div>
                                            {/* end::Form group*/}
                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>codepostale </label>
                                                <input
                                                    placeholder=''
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
                                            {/* end::Form group */}
                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>pays </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('pays')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.pays && formik.errors.pays,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.pays && !formik.errors.pays,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.pays && formik.errors.pays && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.pays}</span>
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
                                    <div className='row g-5 g-xxl-8'>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Telephone 1 </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('tel1')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.tel1 && formik.errors.tel1,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.tel1 && !formik.errors.tel1,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.tel1 && formik.errors.tel1 && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.tel1}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Telephone 2</label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('tel2')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.tel2 && formik.errors.tel2,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.tel2 && !formik.errors.tel2,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.tel2 && formik.errors.tel2 && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.tel2}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* end::Form group */}
                                        </div>
                                        <div className='col-xl-6'>
                                            {/* begin::Form group*/}
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Telephone fixe</label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('telfixe')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.telfixe && formik.errors.telfixe,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.telfixe && !formik.errors.telfixe,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.telfixe && formik.errors.telfixe && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.telfixe}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            {/* end::Form group */}
                                        </div>
                                        <div className='col-xl-3'>
                                            {/* begin::Form group */}
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Poste</label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('poste')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.poste && formik.errors.poste,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.poste && !formik.errors.poste,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.poste && formik.errors.poste && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.poste}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className='col-xl-3'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Telecopie</label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('telecopie')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.telecopie && formik.errors.telecopie,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.telecopie && !formik.errors.telecopie,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.telecopie && formik.errors.telecopie && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.telecopie}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            {/* end::Form group*/}
                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>E-mail </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('email')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.email && formik.errors.email,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.email && !formik.errors.email,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.email && formik.errors.email && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.email}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            {/* end::Form group */}
                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>site internet </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('site')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.site && formik.errors.site,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.site && !formik.errors.site,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.site && formik.errors.site && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.site}</span>
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
                        {step === 4 && (
                            <div className='card '>
                                <div className='card-header border-0 pt-5'>
                                    <h3 className='card-title align-items-start flex-column'>
                                        <span className='card-label fw-bold fs-3 mb-1'>Immatriculation</span>
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className='row g-5 g-xxl-8'>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Personne </label>
                                                <select className='form-select bg-transparent'  >
                                                    <option selected disabled hidden value=""></option>
                                                    <option>morale</option>
                                                    <option>physique</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Identification fiscale</label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('Idfiscale')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.Idfiscale && formik.errors.Idfiscale,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.Idfiscale && !formik.errors.Idfiscale,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.Idfiscale && formik.errors.Idfiscale && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.Idfiscale}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* end::Form group */}

                                        </div>
                                        <div className='col'>
                                            <input
                                                className=" bg-transparent"
                                                type="radio"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Tiers en sommeil
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