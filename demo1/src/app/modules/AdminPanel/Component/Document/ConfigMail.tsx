import clsx from 'clsx'
import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import { KTSVG } from '../../../../../_metronic/helpers';

const initialValues = {
    nom: '',
    password: '',
    serveur: '',
    port: '',
    temps: ''
}
const ConfigMailSchema = Yup.object().shape({
    nom: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(35, 'Maximum 10 symbols')
        .required('champs obligatoire '),
    password: Yup.string()
        .min(4, 'min 4 symbole')
        .required('champs obligatoire'),
    serveur: Yup.string()
        .required('champs obligatoire'),
    port: Yup.number()
        .required('champs obligatoire'),
    temps: Yup.number()
        .required('champs obligatoire')
})
export function ConfigMail() {
    const [loading, setLoading] = useState(false)
    const formik = useFormik({
        initialValues,
        validationSchema: ConfigMailSchema,
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
                        <span className='card-label fw-bold fs-3 mb-1'>Configuration SMTP</span>
                    </h3>
                </div>
                {/* end::Header */}
                {/* begin::Body */}
                <div className="card-body">
                    <div className='row'>

                        {/* begin::Form group nom */}
                        <div className='fv-row mb-8'>
                            <label className='form-label fw-bolder text-dark fs-6'>Nom d'utilisateur</label>
                            <input
                                placeholder='nom utilisateur'
                                type='text'
                                autoComplete='off'
                                {...formik.getFieldProps('nom')}
                                className={clsx(
                                    'form-control bg-transparent',
                                    {
                                        'is-invalid': formik.touched.nom && formik.errors.nom,
                                    },
                                    {
                                        'is-valid': formik.touched.nom && !formik.errors.nom,
                                    }
                                )}
                            />
                            {formik.touched.nom && formik.errors.nom && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block'>
                                        <span role='alert'>{formik.errors.nom}</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* end::Form group */}
                        {/* begin::Form group password */}

                        <div className='fv-row mb-8'>
                            <label className='form-label fw-bolder text-dark fs-6'>Mot de passe</label>
                            <input
                                placeholder='password'
                                type='password'
                                autoComplete='off'
                                {...formik.getFieldProps('password')}
                                className={clsx(
                                    'form-control bg-transparent',
                                    {
                                        'is-invalid': formik.touched.password && formik.errors.password,
                                    },
                                    {
                                        'is-valid': formik.touched.password && !formik.errors.password,
                                    }
                                )}
                            />
                            {formik.touched.password && formik.errors.password && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block'>
                                        <span role='alert'>{formik.errors.password}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* end::Form group */}


                        {/* begin::Form group serveur */}
                        <div className='fv-row mb-8'>
                            <label className='form-label fw-bolder text-dark fs-6'>Serveur</label>
                            <input
                                placeholder=''
                                type='text'
                                autoComplete='off'
                                {...formik.getFieldProps('serveur')}
                                className={clsx(
                                    'form-control bg-transparent',
                                    {
                                        'is-invalid': formik.touched.serveur && formik.errors.serveur,
                                    },
                                    {
                                        'is-valid': formik.touched.serveur && !formik.errors.serveur,
                                    }
                                )}
                            />
                            {formik.touched.serveur && formik.errors.serveur && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block'>
                                        <span role='alert'>{formik.errors.serveur}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* end::Form group */}

                        {/* begin::Form group port */}

                        <div className='fv-row mb-8'>
                            <label className='form-label fw-bolder text-dark fs-6'>port</label>
                            <input
                                placeholder=''
                                type='text'
                                autoComplete='off'
                                {...formik.getFieldProps('port')}
                                className={clsx(
                                    'form-control bg-transparent',
                                    {
                                        'is-invalid': formik.touched.port && formik.errors.port,
                                    },
                                    {
                                        'is-valid': formik.touched.port && !formik.errors.port,
                                    }
                                )}
                            />
                            {formik.touched.port && formik.errors.port && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block'>
                                        <span role='alert'>{formik.errors.port}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* end::Form group */}

                        {/* begin::Form group temps */}

                        <div className='fv-row mb-8'>
                            <label className='form-label fw-bolder text-dark fs-6'>temps d'attente(s)</label>
                            <input
                                placeholder=''
                                type='text'
                                autoComplete='off'
                                {...formik.getFieldProps('temps')}
                                className={clsx(
                                    'form-control bg-transparent',
                                    {
                                        'is-invalid': formik.touched.temps && formik.errors.temps,
                                    },
                                    {
                                        'is-valid': formik.touched.temps && !formik.errors.temps,
                                    }
                                )}
                            />
                            {formik.touched.temps && formik.errors.temps && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block'>
                                        <span role='alert'>{formik.errors.temps}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* end::Form group */}

                        <div className='col-xl-6'>
                            <input
                                className=" bg-transparent"
                                type="checkbox"
                                style={{ marginLeft: '10px' }}
                            />
                            ce serveur necessite une connexion chiffree (SSl)
                        </div>
                        <br></br>
   <a
                        href='#'
                        className='btn btn-sm btn-light-primary'
                    >
                        <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                        Valider
                    </a>
                    </div>
                 
                    <a
                        href='#'
                        className='btn btn-sm btn-light-danger'
                        style={{ marginLeft: '10px' }}
                    >
                        <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                        Anuuler
                    </a>
                </div>
                {/* begin::Body */}
            </div>
        </>
    )
}