import * as Yup from 'yup'
import { useState } from "react";
import { useFormik } from "formik";
import clsx from "clsx";
import { KTSVG } from "../../../../../_metronic/helpers";
import { Link } from 'react-router-dom';

const initialValues = {
    code: '',
    Mode: ''
}
const ModeExpeditionSchema = Yup.object().shape({
    code: Yup.string()
        .min(3, 'min 3 '),
    Mode: Yup.string()
        .min(3, 'min 3 '),
})
export function ModeExpedition() {
    const [, setLoading] = useState(false)
    const formik = useFormik({
        initialValues,
        validationSchema: ModeExpeditionSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            setLoading(true)
        },
    })
    return (
        <>
            <div className="card">
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Gestion des Modes d'expedition</span>
                    </h3>
                    <div className='card-toolbar'>

                        {/* begin::Search */}
                        <div className="input-group mb-3">
                            <label className='form-label fw-bolder text-dark fs-6' style={{ marginLeft: '80px' }} >code</label>
                            <input
                                placeholder=''
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
                                style={{ marginLeft: '10px' }}
                            />
                            {formik.touched.code && formik.errors.code && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block'>
                                        <span role='alert'>{formik.errors.code}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='card-toolbar'>
                        {/* begin::Search */}
                        <div className="input-group mb-3">
                            <label className='form-label fw-bolder text-dark fs-6 mb-3'>Mode</label>
                            <input
                                placeholder=''
                                type='text'
                                autoComplete='off'
                                {...formik.getFieldProps('Mode')}
                                className={clsx(
                                    'form-control bg-transparent',
                                    {
                                        'is-invalid': formik.touched.Mode && formik.errors.Mode,
                                    },
                                    {
                                        'is-valid': formik.touched.Mode && !formik.errors.Mode,
                                    }
                                )}
                                style={{ marginLeft: '10px' }}
                            />
                            {formik.touched.Mode && formik.errors.Mode && (
                                <div className='fv-plugins-message-container'>
                                    <div className='fv-help-block'>
                                        <span role='alert'>{formik.errors.Mode}</span>
                                    </div>
                                </div>
                            )}
                            <div className="input-group-append">

                                <Link
                                    className='btn  btn-light-primary' to=''
                                    style={{ marginLeft: '10px' }}>
                                    <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-4' />
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>
                {/* end::Header */}
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