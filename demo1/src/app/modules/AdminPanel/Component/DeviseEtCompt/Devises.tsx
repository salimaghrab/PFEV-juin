import { useState } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { KTSVG } from '../../../../../_metronic/helpers';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'




const initialValues = {
  Devise: '',
  Unite: '',
  SousUnite: '',
  Format: '',
  Sigle: '',
  Round: '',
  CodeISO: '',
  ISONum: '',
  Cours: '',
  cPeriode: '',
  cColure: '',

}

const DevisesSchema = Yup.object().shape({
  Devise: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(10, 'Maximum 10 symbols')
    .required('Groupe code is required'),
  Unite: Yup.number()
    .required('Groupe Name is required'),
  SousUnite: Yup.number()
    .required('Groupe Function is required'),
  Format: Yup.string()
    .min(5, 'Minimum 5 symbols')
    .max(20, 'Maximum 20 symbols')
    .required('Groupe Function is required'),
  Sigle: Yup.string()
    .min(5, 'Minimum 5 symbols')
    .max(20, 'Maximum 20 symbols')
    .required('Groupe Function is required'),
  Round: Yup.string()
    .min(5, 'Minimum 5 symbols')
    .max(20, 'Maximum 20 symbols')
    .required('Groupe Function is required'),
  CodeISO: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(10, 'Maximum 10 symbols')
    .required('Groupe code is required'),
  ISONum: Yup.number()
    .required('Groupe Name is required'),
  Cours: Yup.number()
    .required('Groupe Name is required'),
  cPeriode: Yup.number()
    .required('Groupe Name is required'),
  cColure: Yup.number()
    .required('Groupe Name is required')

})



export function Devises() {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };
  const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues,
    validationSchema: DevisesSchema,
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
            <span className='card-label fw-bold fs-3 mb-1'>Devises</span>
          </h3>
          <div className='card-toolbar'>
            <Link
              className='btn btn-sm btn-light-primary' onClick={handleClick} to='' >
              <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
              Ajouter Devise
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
                  <th className='ps-4 min-w-200px rounded-start'>Intitule</th>
                  <th className='min-w-250px'>Format Cours</th>
                  <th className='min-w-250px'>Monnaie</th>
                  <th className='min-w-250px'>Sous Monnaie</th>
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

          <div className="card">
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Gestion de Devise</span>
              </h3>
            </div>
            <div className="card-body">
            {step === 1 && (
              <div className='card '>
                <div className='card-header border-0 pt-5'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Identification</span>
                  </h3>
                </div>
                <div className="card-body">
                  <div className='row'>
                    <div className='col-xl-6'>
                      {/* begin::Form group Devise */}
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>Devise</label>
                        <input
                          placeholder='Raison Sociale'
                          type='text'
                          autoComplete='off'
                          {...formik.getFieldProps('Devise')}
                          className={clsx(
                            'form-control bg-transparent',
                            {
                              'is-invalid': formik.touched.Devise && formik.errors.Devise,
                            },
                            {
                              'is-valid': formik.touched.Devise && !formik.errors.Devise,
                            }
                          )}
                        />
                        {formik.touched.Devise && formik.errors.Devise && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                              <span role='alert'>{formik.errors.Devise}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* end::Form group */}
                    {/* begin::Form group Unite */}
                    <div className='col-xl-6'>
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>Unite</label>
                        <input
                          placeholder='Unite'
                          type='text'
                          autoComplete='off'
                          {...formik.getFieldProps('Unite')}
                          className={clsx(
                            'form-control bg-transparent',
                            {
                              'is-invalid': formik.touched.Unite && formik.errors.Unite,
                            },
                            {
                              'is-valid': formik.touched.Unite && !formik.errors.Unite,
                            }
                          )}
                        />
                        {formik.touched.Unite && formik.errors.Unite && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                              <span role='alert'>{formik.errors.Unite}</span>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* end::Form group */}

                    </div>
                    {/* begin::Form group SousUnite */}
                    <div className='col-xl-6'>
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>Sous Unite</label>
                        <input
                          placeholder='Forme Juridique'
                          type='text'
                          autoComplete='off'
                          {...formik.getFieldProps('SousUnite')}
                          className={clsx(
                            'form-control bg-transparent',
                            {
                              'is-invalid': formik.touched.SousUnite && formik.errors.SousUnite,
                            },
                            {
                              'is-valid': formik.touched.SousUnite && !formik.errors.SousUnite,
                            }
                          )}
                        />
                        {formik.touched.SousUnite && formik.errors.SousUnite && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                              <span role='alert'>{formik.errors.SousUnite}</span>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* end::Form group */}
                    </div>
                    {/* begin::Form group Format */}
                    <div className='col-xl-6'>
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>Format</label>
                        <input
                          placeholder='Format'
                          type='text'
                          autoComplete='off'
                          {...formik.getFieldProps('Format')}
                          className={clsx(
                            'form-control bg-transparent',
                            {
                              'is-invalid': formik.touched.Format && formik.errors.Format,
                            },
                            {
                              'is-valid': formik.touched.Format && !formik.errors.Format,
                            }
                          )}
                        />
                        {formik.touched.Format && formik.errors.Format && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                              <span role='alert'>{formik.errors.Format}</span>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* end::Form group */}
                    </div>
                    {/* begin::Form group Sigle */}
                    <div className='col-xl-6'>
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>Sigle</label>
                        <input
                          placeholder='Sigle'
                          type='text'
                          autoComplete='off'
                          {...formik.getFieldProps('Sigle')}
                          className={clsx(
                            'form-control bg-transparent',
                            {
                              'is-invalid': formik.touched.Sigle && formik.errors.Sigle,
                            },
                            {
                              'is-valid': formik.touched.Sigle && !formik.errors.Sigle,
                            }
                          )}
                        />
                        {formik.touched.Sigle && formik.errors.Sigle && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                              <span role='alert'>{formik.errors.Sigle}</span>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* end::Form group */}
                    </div>
                    {/* begin::Form group Round */}
                    <div className='col-xl-6'>
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>Round</label>
                        <input
                          placeholder='Round'
                          type='text'
                          autoComplete='off'
                          {...formik.getFieldProps('Round')}
                          className={clsx(
                            'form-control bg-transparent',
                            {
                              'is-invalid': formik.touched.Round && formik.errors.Round,
                            },
                            {
                              'is-valid': formik.touched.Round && !formik.errors.Round,
                            }
                          )}
                        />
                        {formik.touched.Round && formik.errors.Round && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                              <span role='alert'>{formik.errors.Round}</span>
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
                    <span className='card-label fw-bold fs-3 mb-1'>Norme</span>
                  </h3>
                </div>
                <div className="card-body">
                  <div className='row'>
                    <div className='col-xl-6'>
                      {/* begin::Form group CodeISO */}
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>Code ISO</label>
                        <input
                          placeholder='CodeISO'
                          type='text'
                          autoComplete='off'
                          {...formik.getFieldProps('CodeISO')}
                          className={clsx(
                            'form-control bg-transparent',
                            {
                              'is-invalid': formik.touched.CodeISO && formik.errors.CodeISO,
                            },
                            {
                              'is-valid': formik.touched.CodeISO && !formik.errors.CodeISO,
                            }
                          )}
                        />
                        {formik.touched.CodeISO && formik.errors.CodeISO && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                              <span role='alert'>{formik.errors.CodeISO}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* end::Form group */}
                    {/* begin::Form group ISONum */}
                    <div className='col-xl-6'>
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>ISO Num</label>
                        <input
                          placeholder='ISONum'
                          type='text'
                          autoComplete='off'
                          {...formik.getFieldProps('ISONum')}
                          className={clsx(
                            'form-control bg-transparent',
                            {
                              'is-invalid': formik.touched.ISONum && formik.errors.ISONum,
                            },
                            {
                              'is-valid': formik.touched.ISONum && !formik.errors.ISONum,
                            }
                          )}
                        />
                        {formik.touched.ISONum && formik.errors.ISONum && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                              <span role='alert'>{formik.errors.ISONum}</span>
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
                    <span className='card-label fw-bold fs-3 mb-1'>Cotation Actuelle</span>
                  </h3>
                </div>
                <div className="card-body">
                  <div className='row'>
                    <div className='col-xl-6'>
                      {/* begin::Form group Cours */}
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>Cours</label>
                        <input
                          placeholder='Telepone'
                          type='text'
                          autoComplete='off'
                          {...formik.getFieldProps('Cours')}
                          className={clsx(
                            'form-control bg-transparent',
                            {
                              'is-invalid': formik.touched.Cours && formik.errors.Cours,
                            },
                            {
                              'is-valid': formik.touched.Cours && !formik.errors.Cours,
                            }
                          )}
                        />
                        {formik.touched.Cours && formik.errors.Cours && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                              <span role='alert'>{formik.errors.Cours}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* end::Form group */}
                    {/* begin::Form group Devise de Cotation */}
                    <div className='col-xl-6'>
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>Devise de Cotation</label>
                        <select className="form-control bg-transparent">
                          <option>DINAR TUNISIEN</option>
                          <option>EURO</option>
                          <option>DOLLAR</option>
                        </select>
                      </div>
                      {/* end::Form group */}

                    </div>
                    {/* begin::Form group cotation */}
                    <div className='col-xl-6'>
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>Cotation</label>
                        <select className="form-control bg-transparent">
                          <option>Certain</option>
                          <option>Incertain</option>
                        </select>
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
                    <span className='card-label fw-bold fs-3 mb-1'>Cotation Moyenne</span>
                  </h3>
                  <span >Ces Cours seront proposes dans l'assistant de revalutation de lettres et creances en devise en comptabilite pour calculer et generer les gains et pertes de change en fin f'exercece</span>

                </div>
                <div className="card-body">
                  <div className='row'>
                    <div className='col-xl-6'>
                      {/* begin::Form group cPeriode */}
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>Cours periode </label>
                        <input
                          placeholder='cPeriode'
                          type='text'
                          autoComplete='off'
                          {...formik.getFieldProps('cPeriode')}
                          className={clsx(
                            'form-control bg-transparent',
                            {
                              'is-invalid': formik.touched.cPeriode && formik.errors.cPeriode,
                            },
                            {
                              'is-valid': formik.touched.cPeriode && !formik.errors.cPeriode,
                            }
                          )}
                        />
                        {formik.touched.cPeriode && formik.errors.cPeriode && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                              <span role='alert'>{formik.errors.cPeriode}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* end::Form group */}
                    {/* begin::Form group cColure */}
                    <div className='col-xl-6'>
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>Cours Colure</label>
                        <input
                          placeholder='cColure'
                          type='text'
                          autoComplete='off'
                          {...formik.getFieldProps('cColure')}
                          className={clsx(
                            'form-control bg-transparent',
                            {
                              'is-invalid': formik.touched.cColure && formik.errors.cColure,
                            },
                            {
                              'is-valid': formik.touched.cColure && !formik.errors.cColure,
                            }
                          )}
                        />
                        {formik.touched.cColure && formik.errors.cColure && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                              <span role='alert'>{formik.errors.cColure}</span>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* end::Form group */}
                    </div>
                  </div>
                </div>
              </div>)}
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
            </div>
          </div>
        </Alert>
      </div>
    </>
  )
}