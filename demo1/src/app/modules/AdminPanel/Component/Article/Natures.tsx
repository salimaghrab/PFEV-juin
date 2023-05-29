import clsx from 'clsx'
import { useFormik } from 'formik'
import { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { KTSVG } from '../../../../../_metronic/helpers'
const initialValues = {
    Nature: '',
    TypeDonnee: '',
    TypeNature: '',
}
const NatureSchema = Yup.object().shape({
    Nature: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(10, 'Maximum 10 symbols')
        .required('champs obligatoire'),
})


export function Natures() {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
      setShowAlert(true);
    };
    const [showAlert2, setShowAlert2] = useState(false);

    const handleClick2 = () => {
        setShowAlert2(true);
    };

    const [loading, setLoading] = useState(false)
    const formik = useFormik({
        initialValues,
        validationSchema: NatureSchema,
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
                        <span className='card-label fw-bold fs-3 mb-1'>Listes des Natures</span>
                    </h3>
                    <div className='card-toolbar'>
                        <Link
                            className='btn btn-sm btn-light-primary' onClick={handleClick2} to='' >
                            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                            Ajouter Nature
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
                                    <th className='ps-4 min-w-200px rounded-start'>Nature</th>
                                    <th className='min-w-250px'>Type Donnee</th>
                                    <th className='min-w-250px'>Type Nature</th>
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
                                                    color
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
                                                    color
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
                                                    color
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-end'>
                                        <a
                                            href='#'
                                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                            onClick={handleClick}

                                        >
                                            <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                                        </a>
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


                    <div className='card '>
                        <div className='card-header border-0 pt-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bold fs-3 mb-1'>Gestion de Nature</span>
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-xl-6'>
                                    {/* begin::Form group Nature */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Nature</label>
                                        <input
                                            readOnly
                                            placeholder='Raison Sociale'
                                            type='text'
                                            autoComplete='off'
                                            className='form-control bg-transparent'

                                        />

                                    </div>
                                </div>
                                {/* end::Form group */}
                                {/* begin::Form group TypeDonnee */}
                                <div className='col-xl-6'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>TypeDonnee</label>
                                        <select className='form-select bg-transparent'>
                                            <option selected disabled hidden value=""></option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                        {formik.touched.TypeDonnee && formik.errors.TypeDonnee && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.TypeDonnee}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {/* end::Form group */}

                                </div>
                                {/* begin::Form group TypeNature */}
                                <div className='col-xl-6'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Type Nature</label>
                                        <select className='form-select bg-transparent'>
                                            <option selected disabled hidden value=""></option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                        {formik.touched.TypeNature && formik.errors.TypeNature && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.TypeNature}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {/* end::Form group */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <a
                        href='#'
                        className='btn btn-sm btn-light-primary'
                    >
                        <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                        Valider
                    </a>
                </Alert>
            </div>
            <div className="d-flex justify-content-center align-items-center fixed-top" style={{ zIndex: 999 }}>
                <Alert className="w-50"
                    style={{ maxHeight: "800px", overflowY: "auto" }}
                    show={showAlert2} onClose={() => setShowAlert2(false)} dismissible  >


                    <div className='card '>
                        <div className='card-header border-0 pt-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bold fs-3 mb-1'>Gestion de Nature</span>
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-xl-6'>
                                    {/* begin::Form group Nature */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Nature</label>
                                        <input

                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            {...formik.getFieldProps('Nature')}
                                            className={clsx(
                                              'form-control bg-transparent',
                                              {
                                                'is-invalid': formik.touched.Nature && formik.errors.Nature,
                                              },
                                              {
                                                'is-valid': formik.touched.Nature && !formik.errors.Nature,
                                              }
                                            )}
                                          />
                                          {formik.touched.Nature && formik.errors.Nature && (
                                            <div className='fv-plugins-message-container'>
                                              <div className='fv-help-block'>
                                                <span role='alert'>{formik.errors.Nature}</span>
                                              </div>
                                            </div>
                                          )}

                                    </div>
                                </div>
                                {/* end::Form group */}
                                {/* begin::Form group TypeDonnee */}
                                <div className='col-xl-6'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>TypeDonnee</label>
                                        <select className='form-select bg-transparent'>
                                            <option selected disabled hidden value=""></option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                        {formik.touched.TypeDonnee && formik.errors.TypeDonnee && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.TypeDonnee}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {/* end::Form group */}

                                </div>
                                {/* begin::Form group TypeNature */}
                                <div className='col-xl-6'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Type Nature</label>
                                        <select className='form-select bg-transparent'>
                                            <option selected disabled hidden value=""></option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                        {formik.touched.TypeNature && formik.errors.TypeNature && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.TypeNature}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {/* end::Form group */}
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
                                </div>
                            </div>
                        </div>
                    </div>
                </Alert>
            </div>
        </>
    )
}