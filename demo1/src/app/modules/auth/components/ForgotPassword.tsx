import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {requestPassword} from '../core/_requests'
import { toAbsoluteUrl } from '../../../../_metronic/helpers'

const initialValues = {
  email: 'admin@demo.com',
}

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
})

export function ForgotPassword() {
  const [loading, setLoading] = useState(false)
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setHasErrors(undefined)
      setTimeout(() => {
        requestPassword(values.email)
          .then(({data: {result}}) => {
            setHasErrors(false)
            setLoading(false)
          })
          .catch(() => {
            setHasErrors(true)
            setLoading(false)
            setSubmitting(false)
            setStatus('The login detail is incorrect')
          })
      }, 1000)
    },
  })

  return (
    <>
        <div className="card h-100">
      <div className="card-body">
        <div className="d-flex flex-column flex-lg-row flex-column-fluid h-100">
          {/* begin::Body */}
          <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
            {/* begin::Form */}
            <div className="d-flex flex-center flex-column flex-lg-row-fluid">
              {/* begin::Wrapper */}
              <div className="w-lg-500px p-10">
              <form
      className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
      noValidate
      id='kt_login_password_reset_form'
      onSubmit={formik.handleSubmit}
    >
      <div className='text-center mb-10'>
        {/* begin::Title */}
        <h1 className='text-dark fw-bolder mb-3'>Forgot Password ?</h1>
        {/* end::Title */}

        {/* begin::Link */}
        <div className='text-gray-500 fw-semibold fs-6'>
          Enter your email to reset your password.
        </div>
        {/* end::Link */}
      </div>

      {/* begin::Title */}
      {hasErrors === true && (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>
            Sorry, looks like there are some errors detected, please try again.
          </div>
        </div>
      )}

      {hasErrors === false && (
        <div className='mb-10 bg-light-info p-8 rounded'>
          <div className='text-info'>Sent password reset. Please check your email</div>
        </div>
      )}
      {/* end::Title */}

      {/* begin::Form group */}
      <div className='fv-row mb-8'>
        <label className='form-label fw-bolder text-gray-900 fs-6'>Email</label>
        <input
          type='email'
          placeholder=''
          autoComplete='off'
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control bg-transparent',
            {'is-invalid': formik.touched.email && formik.errors.email},
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

      {/* begin::Form group */}
      <div className='d-flex flex-wrap justify-content-center pb-lg-0'>
        <button type='submit' id='kt_password_reset_submit' className='btn btn-primary me-4'>
          <span className='indicator-label'>Submit</span>
          {loading && (
            <span className='indicator-progress'>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
        <Link to='/auth/login'>
          <button
            type='button'
            id='kt_login_password_reset_form_cancel_button'
            className='btn btn-light'
            disabled={formik.isSubmitting || !formik.isValid}
          >
            Cancel
          </button>
        </Link>{' '}
      </div>
      {/* end::Form group */}
    </form>
              </div>
              {/* end::Wrapper */}
            </div>
            {/* end::Form */}
          </div>
          {/* end::Body */}

          {/* begin::Aside */}
          <div
            className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2"
            style={{ backgroundImage: `url(${toAbsoluteUrl('/media/misc/garage.jpg')})` }}
          >
            {/* begin::Content */}
            <div className="d-flex flex-column flex-center py-15 px-5 px-md-15 w-100">

              {/* begin::Image */}
              <img
                className="mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20"
                src={toAbsoluteUrl('')}
                alt=""
              />
              {/* end::Image */}

              {/* begin::Title */}
              <h1 className="text-white fs-2qx fw-bolder text-warning text-center mb-7"style={{ fontFamily: 'Source Sans Pro', fontSize: '32px' }}>Ou l'opportunité de gagner du temps vous attende</h1>
              {/* end::Title */}

              {/* begin::Text */}
              <div className="text-white fs-base text-center">
                Dans cette Platforme ,{' '}
                <a href="#" className="opacity-75-hover text-warning fw-bold me-1">
                  AXIA GARAGE
                </a>
                Optimisez votre efficacité <br />   et boostez votre entreprise 
                <a href="#" className="opacity-75-hover text-warning fw-bold me-1">
                avec notre plateforme intuitive.
                </a>
                Suivi des rendez-vous, gestion des stocks, interactions client fluides... <br />  Tout est là pour faciliter votre quotidien
              </div>
              {/* end::Text */}
            </div>
            {/* end::Content */}
          </div>
          {/* end::Aside */}
        </div>
      </div>
    </div>
    </>
  
  )
}
