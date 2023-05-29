import clsx from 'clsx'
import { useFormik } from 'formik'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { KTSVG } from "../../../../../_metronic/helpers";

const initialValues = {
    code: '',
    Intitule: ''
}
const ConditionLivraisonSchema = Yup.object().shape({
    code: Yup.number()
        .required('champs obligatoire '),
    Intitule: Yup.string()
        .required('champs obligatoire ')
})
export function ConditionLivraison() {
    const [, setLoading] = useState(false)
    const formik = useFormik({
        initialValues,
        validationSchema: ConditionLivraisonSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            setLoading(true)
        },
    })
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className='card-toolbar'>
                        <div className='row g-5 g-xxl-8'>
                            <div className='col-xl-4'>
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
                            <div className='col-xl-4'>
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

                            <div className='col-xl-4'>
                                <br></br>

                                <Link
                                    className='btn btn-sm btn-light-primary' to='' >
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