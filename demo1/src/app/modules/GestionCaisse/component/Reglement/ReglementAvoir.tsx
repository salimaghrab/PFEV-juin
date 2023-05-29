import { SetStateAction, useState } from "react";
import { KTSVG } from "../../../../../_metronic/helpers";

export function ReglementAvoir() {
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate(e.target.value);
    };
    const [montant, setMontant] = useState("");
    const [devise, setDevise] = useState("");
    const [taux, setTaux] = useState(1);

    const handleMontantChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setMontant(e.target.value);
    };

    const handleDeviseChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setDevise(e.target.value);
        // set the taux based on the selected devise
        if (e.target.value === "euro") {
            setTaux(3.28);
        } else if (e.target.value === "dollar") {
            setTaux(2.75);
        } else {
            setTaux(1);
        }
    };
    const result = Number(montant) * taux;
    return (
        <>
            <div className='card'>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Informations</span>
                    </h3>
                </div>
                {/* end::Header */}
                {/* begin::Body */}
                <div className='card-body py-3'>
                    <div className='row'>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Client</label>
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
                                <label className='form-label fw-bolder text-dark fs-6'>CIN</label>
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
                                <label className='form-label fw-bolder text-dark fs-6'>N Document</label>
                                <select className='form-select bg-transparent'>
                                    <option selected disabled hidden value=""></option>
                                    <option>Jours</option>
                                    <option> Mois</option>
                                    <option>Annee</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <input
                                    style={{ marginTop: 27 }}
                                    readOnly
                                    placeholder=''
                                    type='text'
                                    autoComplete='off'
                                    className='form-control bg-transparent'

                                />

                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Date</label>
                                <input
                                    type="date" id="date" value={selectedDate} onChange={handleDateChange}
                                    className='form-control bg-transparent'
                                />
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Libelle</label>
                                <input
                                    type="text"
                                    className='form-control bg-transparent'
                                />
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Devis</label>
                                <select
                                    value={devise} onChange={handleDeviseChange}

                                    className='form-control bg-transparent'
                                >
                                    <option value="tunisien">TND</option>
                                    <option value="euro">Euro</option>
                                    <option value="dollar">Dollar</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Cours</label>
                                <input
                                    value={taux}
                                    type="text"
                                    className='form-control bg-transparent'
                                />
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Montant</label>
                                <input
                                    type="number" value={montant} onChange={handleMontantChange}
                                    className='form-control bg-transparent'
                                />
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Montant en devise</label>
                                <input
                                    type="text" value={result} readOnly
                                    className='form-control bg-transparent'
                                />
                            </div>
                        </div>
                        <div className='col-xl-12'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Mode Reglement</label>
                                <input
                                    type="text"
                                    className='form-control bg-transparent'
                                />
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Reference</label>
                                <input
                                    type="text"
                                    className='form-control bg-transparent'
                                />
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Nature</label>
                                <input
                                    readOnly
                                    type="text"
                                    className='form-control bg-transparent'
                                />
                            </div>
                        </div>
                        <div className='col'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-dark fs-6'>Commentaire</label>
                                <input
                                    style={{ height: 70 }}
                                    type="text"
                                    className='form-control bg-transparent'
                                />
                            </div>
                        </div>


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
                    >
                        <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                        Anuuler
                    </a>
                </div>
            </div>
        </>
    )
}