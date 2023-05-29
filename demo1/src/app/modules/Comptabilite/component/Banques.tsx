import { useState } from "react";
import { Link } from "react-router-dom";
import { KTSVG } from "../../../../_metronic/helpers";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { Alert } from "react-bootstrap";
import clsx from "clsx";
const initialValues={abrege:'',}
const BanqueSchema =Yup.object().shape({
    abrege:Yup.string()
    .required('champs obligatoire'),
})
export function Banques(){
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };
    const [, setLoading] = useState(false)
    const formik = useFormik({
        initialValues,
        validationSchema: BanqueSchema,
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
    return(
        <>
        <div className='card'>
                <div className='card-header border-0 pt-5'>
                    <div className='card-toolbar'>
                        <Link
                            style={{ marginLeft: 1050 }}
                            className='btn btn-sm btn-light-primary' onClick={handleClick} to='' >
                            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                            Ajouter
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
                                    <th className='ps-4 min-w-150px rounded-start'>Abregé</th>
                                    <th className='min-w-150px'>Intitulé</th>
                                    <th className='min-w-150px'>Code Postale</th>
                                    <th className='min-w-100px'>Ville</th>
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
                                                    Avoir
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
                                                    Avoir
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
                                                    Avoir
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
                                                    Avoir
                                                </a>
                                            </div>
                                        </div>
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
            <div className="d-flex justify-content-center align-items-center fixed-top" style={{ zIndex: 999 }}>
            <Alert className="w-50" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    show={showAlert} onClose={() => setShowAlert(false)} dismissible  >
                    <div className="card bg-light">
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
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Abrege </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'
                                                {...formik.getFieldProps('abrege')}
                                                className={clsx(
                                                    'form-control bg-transparent',
                                                    {
                                                        'is-invalid': formik.touched.abrege && formik.errors.abrege,
                                                    },
                                                    {
                                                        'is-valid': formik.touched.abrege && !formik.errors.abrege,
                                                    }
                                                )}
                                            />
                                            {formik.touched.abrege && formik.errors.abrege && (
                                                <div className='fv-plugins-message-container'>
                                                    <div className='fv-help-block'>
                                                        <span role='alert'>{formik.errors.abrege}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Code BIC </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'                                               
                                                className='form-control bg-transparent'              
                                            />
                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Intitule </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'                                             
                                                className='form-control bg-transparent'
                                            />
                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Interlocuteur </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'                                             
                                                className='form-control bg-transparent'
                                            />
                                        </div>
                                    </div>                                   
                                    </div>
                            </div>
                        </div>
                        
                    )}
                        {step === 2 && (
                        <div className='card '>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Coordonnes</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row'>

                                    {/* begin::Form group Activite */}
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Adresse </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'                                             
                                                className='form-control bg-transparent'
                                            />
                                        </div>
                                    </div>     
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Complement </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'                                             
                                                className='form-control bg-transparent'
                                            />
                                        </div>
                                    </div>     
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>code Postale </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'                                             
                                                className='form-control bg-transparent'
                                            />
                                        </div>
                                    </div>     
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Ville </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'                                             
                                                className='form-control bg-transparent'
                                            />
                                        </div>
                                    </div>     
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Region </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'                                             
                                                className='form-control bg-transparent'
                                            />
                                        </div>
                                    </div>     
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Pays </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'                                             
                                                className='form-control bg-transparent'
                                            />
                                        </div>
                                    </div>     
                                    {/* end::Form group */}
                                </div>
                            </div>
                        </div>
                        )}
                         {step === 3 && (
                        <div className='card '>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Telecommunication</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row'>

                                    {/* begin::Form group Activite */}
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Telephone </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'                                             
                                                className='form-control bg-transparent'
                                            />
                                        </div>
                                    </div>     
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Telecopie </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'                                             
                                                className='form-control bg-transparent'
                                            />
                                        </div>
                                    </div>     
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>E-mail </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'                                             
                                                className='form-control bg-transparent'
                                            />
                                        </div>
                                    </div>     
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Site internet </label>
                                            <input
                                                placeholder=''
                                                type='text'
                                                autoComplete='off'                                             
                                                className='form-control bg-transparent'
                                            />
                                        </div>
                                    </div>     
                                    
                                    {/* end::Form group */}
                                </div>
                            </div>
                        </div>
                         )}
                          <div className='card-toolbar'>
                        {step > 1 && (
                            <Link
                                className='btn btn-sm btn-light-secondary' to='' onClick={handleBack} >

                                back
                            </Link>
                        )}
                        {step < 3 && (
                            <Link
                                className='btn btn-sm btn-light-primary' to='' onClick={handleNext}>
                                Next
                            </Link>
                        )}
                        {step === 3 && (
                            <Link
                                className='btn btn-sm btn-light-success' to='' onClick={() => setShowAlert(false)}>
                                Done
                            </Link>
                        )}
                    </div>
                         </div>
                  
                </Alert>
            </div>
        </>
    )
}