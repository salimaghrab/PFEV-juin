import clsx from 'clsx'
import * as Yup from 'yup'
import { useFormik } from 'formik';
import { SetStateAction, useState } from 'react';
import { KTSVG } from '../../../../../_metronic/helpers';


const initialValues = {
    encaise: '',
    decaise: '',
    ecart: '',
}
const IdentificationSchema = Yup.object().shape({
    encaise: Yup.number()
        .required('cet champs est obligatoire'),
    decaise: Yup.number()
        .required('champs obligatoire'),
    ecart: Yup.number()
        .required('champs obligatoire'),
})

export function SuiviEcart() {
    const [isChecked, setIsChecked] = useState(false);
    const [, setTextInput] = useState('');

    const handleCheckboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setIsChecked(event.target.checked);
        setTextInput(''); // Reset text input when checkbox is unchecked
    }

    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues,
        validationSchema: IdentificationSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            setLoading(true)
        },
    })
    return (
        <>
            <div className='card '>
            <div className='card-header border-0 pt-5'>
                <label>
                    <input
                        className=" bg-transparent"
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    Activation Suivi Ecart
                </label>
                </div>
                {isChecked &&
                    <div className='card '>
                        <div className='card-header border-0 pt-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bold fs-3 mb-1'>Suivi Ecart</span>
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-xl-6'>
                                    {/* begin::Form group Rsociale */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Jouranl encaisement</label>
                                        <select className="form-select bg-transparent">
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                </div>
                                {/* end::Form group */}
                                {/* begin::Form group encaise */}
                                <div className='col-xl-6'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>encaise</label>
                                        <input
                                            placeholder='encaise'
                                            type='text'
                                            autoComplete='off'
                                            {...formik.getFieldProps('encaise')}
                                            className={clsx(
                                                'form-control bg-transparent',
                                                {
                                                    'is-invalid': formik.touched.encaise && formik.errors.encaise,
                                                },
                                                {
                                                    'is-valid': formik.touched.encaise && !formik.errors.encaise,
                                                }
                                            )}
                                        />
                                        {formik.touched.encaise && formik.errors.encaise && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.encaise}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {/* end::Form group */}

                                </div>
                                {/* begin::Form group decaise */}
                                <div className='col-xl-6'>
                                    {/* begin::Form group Rsociale */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Jouranl decaisement</label>
                                        <select className="form-select bg-transparent">
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-xl-6'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>decaisement</label>
                                        <input
                                            placeholder='Forme Juridique'
                                            type='text'
                                            autoComplete='off'
                                            {...formik.getFieldProps('decaise')}
                                            className={clsx(
                                                'form-control bg-transparent',
                                                {
                                                    'is-invalid': formik.touched.decaise && formik.errors.decaise,
                                                },
                                                {
                                                    'is-valid': formik.touched.decaise && !formik.errors.decaise,
                                                }
                                            )}
                                        />
                                        {formik.touched.decaise && formik.errors.decaise && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.decaise}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {/* end::Form group */}
                                </div>
                                {/* begin::Form group ecart */}
                                <div className='col-xl-6'>
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'> Max Ecart</label>
                                        <input
                                            placeholder='ecart'
                                            type='text'
                                            autoComplete='off'
                                            {...formik.getFieldProps('ecart')}
                                            className={clsx(
                                                'form-control bg-transparent',
                                                {
                                                    'is-invalid': formik.touched.ecart && formik.errors.ecart,
                                                },
                                                {
                                                    'is-valid': formik.touched.ecart && !formik.errors.ecart,
                                                }
                                            )}
                                        />
                                        {formik.touched.ecart && formik.errors.ecart && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.ecart}</span>
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
                                        Valider
                                    </a>
                                    <a
                                        href='#'
                                        className='btn btn-sm btn-light-danger'
                                        style={{ marginLeft: '10px' }}

                                    >
                                        <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                                        fermer
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>
                }

            </div>
        </>
    )
}