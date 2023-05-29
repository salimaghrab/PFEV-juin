import { Link } from "react-router-dom";
import { KTSVG } from "../../../../_metronic/helpers";
import { useState } from "react";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { Alert } from "react-bootstrap";
import clsx from "clsx";
const initialValues={
    intituleM:''
}
const ModelSchema = Yup.object().shape({
    initutleM: Yup.string()
    .required('chmaps obligatoire')
})
export function ModelReglement() {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };
    const [, setLoading] = useState(false)
    const formik = useFormik({
        initialValues,
        validationSchema: ModelSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            setLoading(true)
        },
    })
    return (
        <>
            <div className='card'>
                <div className='card-header border-0 pt-5'>
                    <div className='card-toolbar'>
                        <Link
                            style={{ marginLeft: 1000 }}
                            className='btn btn-sm btn-light-primary' onClick={handleClick} to='' >
                            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                            Ajouter Model
                        </Link>
                    </div>
                </div>
                {/* begin::Body */}
                <div className='card-body py-3'>
                    {/* begin::Table container */}
                    <div className='table-responsive'>
                        {/* begin::Table */}
                        <table className='table align-middle gs-0 gy-4'>
                            {/* begin::Table head */}
                            <thead>
                                <tr className='fw-bold text-muted bg-light'>
                                    <th className='ps-4 min-w-200px rounded-start'>Intitule modele de reglement</th>
                                    <th className='p-0 min-w-50px'></th>
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
                                                    agytl
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-end'>
                                        <a
                                            href='#'
                                            className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                                        >
                                            <KTSVG
                                                path='/media/icons/duotune/arrows/arr064.svg'
                                                className='svg-icon-2'
                                            />
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
                <Alert className="w-50" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    show={showAlert} onClose={() => setShowAlert(false)} dismissible  >
                    <div className="card">
                    <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Ajouter Modele</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row'>
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Intitule modele </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'
                                                {...formik.getFieldProps('intituleM')}
                                                className={clsx(
                                                    'form-control bg-transparent',
                                                    {
                                                        'is-invalid': formik.touched.intituleM && formik.errors.intituleM,
                                                    },
                                                    {
                                                        'is-valid': formik.touched.intituleM && !formik.errors.intituleM,
                                                    }
                                                )}
                                            />
                                            {formik.touched.intituleM && formik.errors.intituleM && (
                                                <div className='fv-plugins-message-container'>
                                                    <div className='fv-help-block'>
                                                        <span role='alert'>{formik.errors.intituleM}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-toolbar'>
                        <Link
                            className='btn btn-sm btn-light-primary' to='' >

                            Valider
                        </Link>
                        <Link
                            className='btn btn-sm btn-light-danger' to='' style={{ marginLeft: 10 }}
                            onClick={() => setShowAlert(false)}>

                            fermer
                        </Link>
                    </div>
                        </Alert>
                        </div>
        </>
    )
}