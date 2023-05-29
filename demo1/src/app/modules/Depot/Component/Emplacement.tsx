import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import { KTSVG } from '../../../../_metronic/helpers'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

const initialValues = {
    code: '',
    Intitule: '',
    depot:''
}
const EmplacementSchema = Yup.object().shape({
    code: Yup.number()
        .required('champs obligatoire '),
    Intitule: Yup.string()
        .required('champs obligatoire '),
    depot: Yup.string()
    .required('chamos obligatoire')
})
export function Emplacement(){
    const [loading, setLoading] = useState(false)
    const formik = useFormik({
        initialValues,
        validationSchema: EmplacementSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            setLoading(true)
        },
    })
    return(
        <>
         <div className="card">
             {/* begin::Header */}
             <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Gestion des Emplacements </span>
                    </h3>
                </div>
                {/* end::Header */}
                <div className="card-body">
                    <div className='card-toolbar'>
                        <div className='row g-5 g-xxl-8'>
                            <div className='col-xl-3'>
                                {/* begin::Form group  */}
                                <div className='fv-row mb-8'>
                                    <label className='form-label fw-bolder text-dark fs-6'>Code </label>
                                    <input
                                        placeholder='code'
                                        type='text'
                                        autoComplete='off'
                                        {...formik.getFieldProps('code')}
                                        className={clsx(
                                            'form-control bg-transparent',
                                            {
                                                'is-invalid': formik.touched.code && formik.errors.code,
                                            },
                                            {
                                                'is-valid': formik.touched.code && !formik.errors.code,
                                            }
                                        )}
                                    />
                                    {formik.touched.code && formik.errors.code && (
                                        <div className='fv-plugins-message-container'>
                                            <div className='fv-help-block'>
                                                <span role='alert'>{formik.errors.code}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* end::Form group */}
                            </div>
                            <div className='col-xl-3'>
                                {/* begin::Form group Groupe */}
                                <div className='fv-row mb-8'>
                                    <label className='form-label fw-bolder text-dark fs-6'>Intitule</label>
                                    <input
                                        placeholder='Intitule'
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
                            <div className='col-xl-3'>
                                {/* begin::Form group Groupe */}
                                <div className='fv-row mb-8'>
                                    <label className='form-label fw-bolder text-dark fs-6'>depot</label>
                                    <input
                                        placeholder='depot'
                                        type='text'
                                        autoComplete='off'
                                        {...formik.getFieldProps('depot')}
                                        className={clsx(
                                            'form-control bg-transparent',
                                            {
                                                'is-invalid': formik.touched.depot && formik.errors.depot,
                                            },
                                            {
                                                'is-valid': formik.touched.depot && !formik.errors.depot,
                                            }
                                        )}
                                    />
                                    {formik.touched.depot && formik.errors.depot && (
                                        <div className='fv-plugins-message-container'>
                                            <div className='fv-help-block'>
                                                <span role='alert'>{formik.errors.depot}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* end::Form group */}
                            </div>
                            <div className='col-xl-3'>
                                <br></br>

                                <Link
                                    className='btn  btn-light-primary' to='' >
                                    <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-1' />
                                    Ajouter
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='card-body py-3'>
                    {/* begin::Table container */}
                    <div className='table-responsive'>
                        {/* begin::Table */}
                        <table className='table align-middle gs-0 gy-4'>
                            {/* begin::Table head */}
                            <thead>
                                <tr className='fw-bold text-muted bg-light'>
                                    <th className='ps-4 min-w-200px rounded-start'>Code</th>
                                    <th className='min-w-200px'>Intutile</th>
                                    <th className='min-w-200px'>Depot</th>
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
        </>
    )
}