import { useState } from "react";
import { Link } from "react-router-dom";
import { KTSVG } from '../../../../../_metronic/helpers';
import * as Yup from 'yup'
import { useFormik } from "formik";
import clsx from "clsx";
import { Alert } from "react-bootstrap";


const initialValues={
    domaine:'',
    intitule:''
}
const CategorieSchema = Yup.object().shape({
    domaine: Yup.string()
    .required('champs obligatoire'),
    intitule: Yup.string()
    .required('champs obligatoire')
})
export function CategorieComptable(){

    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
      setShowAlert(true);
    };

    const [loading, setLoading] = useState(false)
    const formik = useFormik({
      initialValues,
      validationSchema: CategorieSchema,
      onSubmit: async (values, { setStatus, setSubmitting }) => {
        setLoading(true)
      },
    })
    return(
        <>
        <div className="card">
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Gestion Categorie Comptable</span>
              </h3>
              <div className='card-toolbar'>
            <Link
              className='btn btn-sm btn-light-primary' onClick={handleClick} to='' >
              <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
              Ajouter 
            </Link>
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
                  <th className='ps-4 min-w-200px rounded-start'>Domaine</th>
                  <th className='min-w-250px'>Intitule</th>
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
                      bla bla
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
            </div>
            <div className="d-flex justify-content-center align-items-center fixed-top" style={{ zIndex: 999 }}>
        <Alert className="w-50" style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
          show={showAlert} onClose={() => setShowAlert(false)} dismissible  >

          <div className="card">
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Gestion de catégorie Comptable</span>
              </h3>
            </div>
            <div className="card-body">
                <div className="card-body">
                  <div className='row'>
                    <div className='col-xl-6'>
                      {/* begin::Form group domaine */}
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>Domaine</label>
                        <input
                          placeholder='domaine'
                          type='text'
                          autoComplete='off'
                          {...formik.getFieldProps('domaine')}
                          className={clsx(
                            'form-control bg-transparent',
                            {
                              'is-invalid': formik.touched.domaine && formik.errors.domaine,
                            },
                            {
                              'is-valid': formik.touched.domaine && !formik.errors.domaine,
                            }
                          )}
                        />
                        {formik.touched.domaine && formik.errors.domaine && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                              <span role='alert'>{formik.errors.domaine}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* end::Form group */}
                    {/* begin::Form group intitule */}
                    <div className='col-xl-6'>
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>Intitulé</label>
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
                  </div>
                  <input
                        className=" bg-transparent"
                        type="checkbox"
                    />
                    Exoneree
                </div>
            
              <a
                href='#'
                className='btn btn-sm btn-light-primary'
              >
                <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                Valider
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
        </Alert>
      </div>
        </>
    )
}