import { useState } from "react";
import * as Yup from 'yup'
import { Alert } from "react-bootstrap";
import clsx from "clsx";
import { useFormik } from "formik";
import { KTSVG } from "../../../../../_metronic/helpers";

const initialValues = {
    Intitled: '',
}

const GammeSchema = Yup.object().shape({
    Intitled: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(10, 'Maximum 10 symbols')
})
export function Gammes() {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };
    const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues,
    validationSchema: GammeSchema,
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
                        <span className='card-label fw-bold fs-3 mb-1'>Listes des Gammes</span>
                    </h3>

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
                                    <th className='ps-4 min-w-200px rounded-start'>Intitule</th>

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
                <Alert className="w-50"
                    style={{ maxHeight: "800px", overflowY: "auto" }}
                    show={showAlert} onClose={() => setShowAlert(false)} dismissible  >

                    <div className="card">
                        <div className='card-header border-0 pt-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bold fs-3 mb-1'>Ajouter sous Gammes</span>
                            </h3>
                        </div>
                        <div className="card-body">
                  <div className='row'>
                    <div className='col-xl-6'>
                      {/* begin::Form group Intitled */}
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>Intitled</label>
                        <input
                          placeholder='intitled'
                          type='text'
                          autoComplete='off'
                          {...formik.getFieldProps('Intitled')}
                          className={clsx(
                            'form-control bg-transparent',
                            {
                              'is-invalid': formik.touched.Intitled && formik.errors.Intitled,
                            },
                            {
                              'is-valid': formik.touched.Intitled && !formik.errors.Intitled,
                            }
                          )}
                        />
                        {formik.touched.Intitled && formik.errors.Intitled && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                              <span role='alert'>{formik.errors.Intitled}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* end::Form group */}
                    </div>
                    </div>
                    </div>
                </Alert>
            </div>
        </>
    )
}