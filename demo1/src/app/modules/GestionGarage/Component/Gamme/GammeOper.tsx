import { useState } from "react";
import { KTSVG } from "../../../../../_metronic/helpers";
import { Link } from "react-router-dom";

export function GammeOper() {

    const [isChecked, setIsChecked] = useState(false);
    const [, setTextInput] = useState('');

    const handleCheckboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setIsChecked(event.target.checked);
        setTextInput(''); // Reset text input when checkbox is unchecked
    }
    const [isChecked1, setIsChecked1] = useState(false);
    const [, setTextInput1] = useState('');

    const handleCheckboxChange1 = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setIsChecked1(event.target.checked);
        setTextInput1(''); // Reset text input when checkbox is unchecked
    }
    return (
        <>
            <div className='card'>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Gestion Gamme</span>
                    </h3>
                </div>
                {/* end::Header */}
                {/* begin::Body */}
                <div className='card-body py-3'>
                    <div className='row'>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Code Gamme</label>
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
                                <label className='form-label fw-bolder text-dark fs-6'>Intitule Gamme</label>
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
                                <label>
                                    <input
                                        className=" bg-transparent"
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    KM
                                </label>
                            </div>
                            {isChecked &&
                                <div className='col'>
                                    <div className='fv-row mb-8'>

                                        <input
                                            placeholder=''
                                            type='number'
                                            autoComplete='off'
                                            className='form-control bg-transparent'

                                        />

                                    </div>
                                </div>
                            }
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label>
                                    <input
                                        className=" bg-transparent"
                                        type="checkbox"
                                        checked={isChecked1}
                                        onChange={handleCheckboxChange1}
                                    />
                                    Date
                                </label>
                            </div>
                            {isChecked1 &&
                                <div>
                                    <div className='col'>
                                        <div className='fv-row mb-8'>

                                            <input
                                                placeholder=''
                                                type='number'
                                                autoComplete='off'
                                                className='form-control bg-transparent'

                                            />

                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='fv-row mb-8'>
                                            <select className='form-select bg-transparent'>
                                                <option selected disabled hidden value=""></option>
                                                <option>Jours</option>
                                                <option> Mois</option>
                                                <option>Annee</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                       
                    </div>
                    <Link
                    style={{marginLeft:1050}}
                        className='btn btn-sm btn-light-primary' to='' >
                        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                        Valider
                    </Link>

                </div>
                {/* begin::Table container */}
                <div className='table-responsive'>
                    {/* begin::Table */}
                    <table className='table align-middle gs-0 gy-4'>
                        {/* begin::Table head */}
                        <thead>
                            <tr className='fw-bold text-muted bg-light'>
                                <th className='ps-4 min-w-150 rounded-start'>Code </th>
                                <th className='min-w-150'>Intitule</th>
                                <th className='min-w-150'>CbMarque</th>
                                <th className='min-w-150'>Date</th>
                                <th className='min-w-150'>Type Date</th>
                                <th className='min-w-150'>Numero</th>
                                <th className='min-w-150 text-end rounded-end'> Actions</th>
                            </tr>
                        </thead>
                        {/* end::Table head */}
                        {/* begin::Table body */}
                        <tbody>
                            <tr>

                                <td>
                                    <div className='d-flex align-items-center'>

                                        <div className='d-flex justify-content-start flex-column'>
                                            <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                lkhgffc
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex align-items-center'>

                                        <div className='d-flex justify-content-start flex-column'>
                                            <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                qsdryh
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex align-items-center'>

                                        <div className='d-flex justify-content-start flex-column'>
                                            <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                lkhgffc
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex align-items-center'>

                                        <div className='d-flex justify-content-start flex-column'>
                                            <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                qsdryh
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex align-items-center'>

                                        <div className='d-flex justify-content-start flex-column'>
                                            <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                lkhgffc
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex align-items-center'>

                                        <div className='d-flex justify-content-start flex-column'>
                                            <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                qsdryh
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
            {/* end::Body */}
        </>
    )
}