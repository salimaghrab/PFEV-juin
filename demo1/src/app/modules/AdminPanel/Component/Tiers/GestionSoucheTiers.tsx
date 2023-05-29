import { useFormik } from "formik";
import * as Yup from 'yup'
import { useState } from "react";
import { KTSVG } from "../../../../../_metronic/helpers";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import clsx from "clsx";

const initialValues = {
    souche: '',
    compteur: '',
    prefixe: '',
    nsuivant: '',
}
const GSoucheTierSchema = Yup.object().shape({
    souche: Yup.string()
        .required('chamos obligatoire'),
    compteur: Yup.string()
        .required('champs obligatoire '),
    prefixe: Yup.string()
        .required('champs obligatoire'),
    nsuivant: Yup.string()
        .required('champs obligatoire ')

})

export function GestionSoucheClient() {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };
    const [, setLoading] = useState(false)
    const formik = useFormik({
        initialValues,
        validationSchema: GSoucheTierSchema,
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
                        <span className='card-label fw-bold fs-3 mb-1'>Liste Souche Tiers </span>
                    </h3>
                    <div className='card-toolbar'>
                        <Link
                            className='btn btn-sm btn-light-primary' onClick={handleClick} to='' >
                            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                            Ajouter
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
                                    <th className='ps-4 min-w-150px rounded-start'>Souche</th>
                                    <th className='min-w-150px'>Nombre</th>
                                    <th className='min-w-150px'>Prifixe</th>
                                    <th className='min-w-150px'>Type</th>
                                    <th className='min-w-150px'>N SUivant</th>
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
                                                    kjksv
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <div className='symbol symbol-50px me-5'>

                                            </div>
                                            <div className='d-flex justify-content-start flex-column'>
                                                
                                                    1159
                                               
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <div className='symbol symbol-50px me-5'>

                                            </div>
                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    11
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                            kbb 1
                                        </a>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <div className='d-flex justify-content-start flex-column'>
                                                
                                            xgfd
                                               
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
                {/* begin::Body */}
            </div>
            <div className="d-flex justify-content-center align-items-center fixed-top" style={{ zIndex: 999 }}>
                <Alert className="w-50"
                    show={showAlert} onClose={() => setShowAlert(false)} dismissible  >
                    <div className="card">
                        <div className='card-header border-0 pt-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bold fs-3 mb-1'>Gestion Souche Client </span>
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className='row g-5 g-xxl-8'>
                                <div className='col'>
                                    {/* begin::Form group souche */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Souche</label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            {...formik.getFieldProps('souche')}
                                            className={clsx(
                                                'form-control bg-transparent',
                                                {
                                                    'is-invalid': formik.touched.souche && formik.errors.souche,
                                                },
                                                {
                                                    'is-valid': formik.touched.souche && !formik.errors.souche,
                                                }
                                            )}
                                        />
                                        {formik.touched.souche && formik.errors.souche && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.souche}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {/* end::Form group */}
                                    {/* begin::Form group compteur */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Compteur</label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            {...formik.getFieldProps('compteur')}
                                            className={clsx(
                                                'form-control bg-transparent',
                                                {
                                                    'is-invalid': formik.touched.compteur && formik.errors.compteur,
                                                },
                                                {
                                                    'is-valid': formik.touched.compteur && !formik.errors.compteur,
                                                }
                                            )}
                                        />
                                        {formik.touched.compteur && formik.errors.compteur && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.compteur}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {/* end::Form group */}
                                    {/* begin::Form group prefixe */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Prefixe</label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            {...formik.getFieldProps('prefixe')}
                                            className={clsx(
                                                'form-control bg-transparent',
                                                {
                                                    'is-invalid': formik.touched.prefixe && formik.errors.prefixe,
                                                },
                                                {
                                                    'is-valid': formik.touched.prefixe && !formik.errors.prefixe,
                                                }
                                            )}
                                        />
                                        {formik.touched.prefixe && formik.errors.prefixe && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.prefixe}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {/* begin::Form group nsuivant */}
                                    <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>Type</label>
                                        <select className="form-select bg-transparent">
                                            <option>Client </option>
                                            <option>Fournisseur</option>
                                            <option>Prospect</option>
                                        </select>
                                    </div>
                                     {/* begin::Form group nsuivant */}
                                     <div className='fv-row mb-8'>
                                        <label className='form-label fw-bolder text-dark fs-6'>N suivant</label>
                                        <input
                                            placeholder=''
                                            type='text'
                                            autoComplete='off'
                                            {...formik.getFieldProps('nsuivant')}
                                            className={clsx(
                                                'form-control bg-transparent',
                                                {
                                                    'is-invalid': formik.touched.nsuivant && formik.errors.nsuivant,
                                                },
                                                {
                                                    'is-valid': formik.touched.nsuivant && !formik.errors.nsuivant,
                                                }
                                            )}
                                        />
                                        {formik.touched.nsuivant && formik.errors.nsuivant && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>
                                                    <span role='alert'>{formik.errors.nsuivant}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
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
                                    {/* end::Form group */}
                                </div>
                            </div>
                        </div>
                    </div>
                </Alert>
            </div>
        </>
    )
}