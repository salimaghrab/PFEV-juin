import { Link } from "react-router-dom";
import { KTSVG } from "../../../../_metronic/helpers";
import { FaSearch } from "react-icons/fa";
import { SetStateAction, useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import * as Yup from 'yup'
import { useFormik } from "formik";
import clsx from "clsx";

const initialValues =
{
    codex: '',
    nom: '',
    prenom: '',
    CIN: '',
    telephone: '',
    Commentaire: '',
    cout: '',
    adresse: '',
}
const CollabSchema = Yup.object().shape({
    nom: Yup.string()
        .required('champs obligatoire'),
    prenom: Yup.string()
        .required('champs obligatoire'),
    CIN: Yup.number()
        .required('champs obligatoire'),
    telephone: Yup.number()
        .required('chamos obligatoire'),
    cout: Yup.number()
        .required('champs obligatoire'),
    adresse: Yup.string()
        .required('champs obligatoire')
})
export function Collaborateur() {
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate(e.target.value);
    };

    const [view, setView] = useState('');

    const handleViewChange = (newView: SetStateAction<string>) => {
        setView(newView);
    }
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };
    const [, setLoading] = useState(false)
    const formik = useFormik({
        initialValues,
        validationSchema: CollabSchema,
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
                        <span className='card-label fw-bold fs-3 mb-1'>Liste Collaborateur </span>
                    </h3>
                    <div className='card-toolbar'>
                        {/* begin::Search */}
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="search ..."
                                style={{ marginLeft: '550px' }}
                            />
                        </div>
                    </div>
                    <div className='card-toolbar'>
                        {/* begin::Search */}
                        <div className="input-group mb-3">

                            <div className="input-group-append">
                                <button className="btn  btn-light-primary" type="button">
                                    <FaSearch />
                                </button>
                            </div>
                            <div className="input-group-append">

                                <Link
                                    className='btn  btn-light-primary' to=''
                                    onClick={handleClick}
                                    style={{ marginLeft: '10px' }}>
                                    <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-4' />
                                </Link>

                            </div>
                        </div>
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
                                    <th className='ps-4 min-w-150px rounded-start'>Collaborateur</th>
                                    <th className='min-w-150px'>Code</th>
                                    <th className='min-w-150px'>Nom</th>
                                    <th className='min-w-150px'>Prenom</th>
                                    <th className='min-w-150px'>Ville</th>
                                    <th className='min-w-150px'>Telephone</th>
                                    <th className='min-w-150px text-end rounded-end'> Actions</th>
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
            </div>
            <div className="d-flex justify-content-center align-items-center fixed-top" style={{ zIndex: 999 }}>
                <Alert className="w-50"
                    style={{ maxHeight: "800px", overflowY: "auto" }}
                    show={showAlert} onClose={() => setShowAlert(false)} dismissible  >

                    <div className='card-header border-0 pt-5'>
                        <button className='btn btn-light-primary' onClick={() => handleViewChange('Identification')}>Identification</button>
                        <button className='btn btn-light-primary' onClick={() => handleViewChange('Adresse')}>Adresse</button>
                        <button className='btn btn-light-primary' onClick={() => handleViewChange('Caisse')}>Caisse</button>
                        <button className='btn btn-light-primary' onClick={() => handleViewChange('Qualification')}>Qualification</button>
                    </div>
                    {view === 'Identification' && (
                        <div className="card bg-light">
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
                                                <label className='form-label fw-bolder text-dark fs-6'>code </label>
                                                <input
                                                    readOnly
                                                    type='text'
                                                    autoComplete='off'

                                                    className='form-control bg-transparent'
                                                />
                                            </div>
                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>cod externe </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('codex')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.codex && formik.errors.codex,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.codex && !formik.errors.codex,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.codex && formik.errors.codex && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.codex}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>nom </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('nom')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.nom && formik.errors.nom,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.nom && !formik.errors.nom,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.nom && formik.errors.nom && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.nom}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>prenom </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('prenom')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.prenom && formik.errors.prenom,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.prenom && !formik.errors.prenom,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.prenom && formik.errors.prenom && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.prenom}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>telephone </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('telephone')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.telephone && formik.errors.telephone,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.telephone && !formik.errors.telephone,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.telephone && formik.errors.telephone && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.telephone}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className='col-xl-6'>
                                            {/* begin::Form group */}
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Fonction</label>
                                                <select className='form-select bg-transparent'  >
                                                    <option selected disabled hidden value=""></option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-xl-6'>
                                            {/* begin::Form group */}
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Qualification</label>
                                                <select className='form-select bg-transparent'  >
                                                    <option selected disabled hidden value=""></option>
                                                    <option>jgd</option>
                                                    <option>dld</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-xl-6'>
                                            {/* begin::Form group */}
                                            <div className='fv-row mb-8'>
                                                <label htmlFor="date" className='form-label fw-bolder text-dark fs-6'>Date Naissance</label>
                                                <input className='form-control bg-transparent'
                                                    type="date" id="date"
                                                    value={selectedDate}
                                                    onChange={handleDateChange} />
                                            </div>
                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Commentaire </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('Commentaire')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.Commentaire && formik.errors.Commentaire,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.Commentaire && !formik.errors.Commentaire,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.Commentaire && formik.errors.Commentaire && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.Commentaire}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className='card '>
                                <div className='card-header border-0 pt-5'>
                                    <h3 className='card-title align-items-start flex-column'>
                                        <span className='card-label fw-bold fs-3 mb-1'>Capacite et cout</span>
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className='row'>

                                        {/* begin::Form group Activite */}
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Unite d'expression</label>
                                                <select className='form-select bg-transparent'  >
                                                    <option selected disabled hidden value=""></option>
                                                    <option>jour</option>
                                                    <option>heure</option>
                                                    <option>Mois</option>
                                                    <option>Km</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>cout standard </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('cout')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.cout && formik.errors.cout,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.cout && !formik.errors.cout,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.cout && formik.errors.cout && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.cout}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {/* end::Form group */}

                                    </div>
                                </div>
                            </div>
                            <br></br>

                        </div>

                    )}
                    {view === 'Adresse' && (
                        <div className="card bg-light">
                            <div className='card '>
                                <div className='card-header border-0 pt-5'>
                                    <h3 className='card-title align-items-start flex-column'>
                                        <span className='card-label fw-bold fs-3 mb-1'>Coordonnees</span>
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className='row'>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>ville </label>
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
                                                <label className='form-label fw-bolder text-dark fs-6'>Code Postale </label>
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
                                                <label className='form-label fw-bolder text-dark fs-6'>adresse </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    {...formik.getFieldProps('adresse')}
                                                    className={clsx(
                                                        'form-control bg-transparent',
                                                        {
                                                            'is-invalid': formik.touched.adresse && formik.errors.adresse,
                                                        },
                                                        {
                                                            'is-valid': formik.touched.adresse && !formik.errors.adresse,
                                                        }
                                                    )}
                                                />
                                                {formik.touched.adresse && formik.errors.adresse && (
                                                    <div className='fv-plugins-message-container'>
                                                        <div className='fv-help-block'>
                                                            <span role='alert'>{formik.errors.adresse}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
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
                                                <label className='form-label fw-bolder text-dark fs-6'>Portable </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'

                                                    className='form-control bg-transparent'

                                                />
                                            </div>
                                        </div>
                                        <div className='col'>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {view === 'Caisse' && (
                        <div className="card">

                        </div>
                    )}
                    {view === 'Qualification' && (

                        <div className='card'>

                            {/* begin::Body */}
                            <div className='card-body py-3'>
                                {/* begin::Table container */}
                                <div className='table-responsive'>
                                    {/* begin::Table */}
                                    <table className='table align-middle gs-0 gy-4'>
                                        {/* begin::Table head */}
                                        <thead>
                                            <tr className='fw-bold text-muted bg-light'>
                                                <th className='ps-4 min-w-150px rounded-start'>check</th>
                                                <th className='min-w-150px'>Code</th>
                                                <th className='min-w-150px'>Intitule</th>
                                            </tr>
                                        </thead>
                                        {/* end::Table head */}
                                        {/* begin::Table body */}
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className='d-flex align-items-center'>

                                                        <div className='d-flex justify-content-start flex-column'>

                                                            <input
                                                                style={{ marginLeft: 20 }}
                                                                className='text-dark fw-bold text-hover-primary mb-1 fs-6'
                                                                type='checkbox' />

                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='symbol symbol-50px me-5'>

                                                        </div>
                                                        <div className='d-flex justify-content-start flex-column'>
                                                            <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                                Q1
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='d-flex justify-content-start flex-column'>
                                                            <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                                Q2
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
                    )}
                    <div className='card-toolbar'>
                        <Link
                            className='btn btn-sm btn-light-primary' to='' >

                            Valider
                        </Link>
                        <Link
                            className='btn btn-sm btn-light-danger' to='' style={{ marginLeft: 10 }}
                            onClick={() => setShowAlert(false)} >

                            fermer
                        </Link>
                    </div>
                </Alert>
            </div>
        </>
    )
}