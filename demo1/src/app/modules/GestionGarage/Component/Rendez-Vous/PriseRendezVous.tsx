import { SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';
import { KTSVG } from '../../../../../_metronic/helpers';

export function PriseRendezVous() {
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // Set default date to today
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })); // Set default time to current time

    const handleDateChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setDate(event.target.value);
    }

    const handleTimeChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setTime(event.target.value);
    }
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event: { target: { value: SetStateAction<string>; style: { height: string; }; scrollHeight: any; }; }) => {
        setInputValue(event.target.value);
        event.target.style.height = "auto";
        event.target.style.height = `${event.target.scrollHeight}px`;
    };

    return (
        <div className='card'>
            {/* begin::Header */}
            <div className="card Image" style={{
                backgroundImage: `url(${require("./RDV.jpg")})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
            }}>

                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold text-light-warning fs-3 mb-1'>Rendez-Vous</span>
                    </h3>
                </div>
                {/* end::Header */}
                {/* begin::Body */}
                <div className='card-body py-3'>
                    <div className='row'>
                        <div className='col-xl-12'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-warning fs-6'>Numero Document</label>
                                <input
                                    readOnly
                                    placeholder='13457'
                                    type='text'
                                    autoComplete='off'
                                    className='form-control bg-transparent'

                                />

                            </div>
                        </div>
                        <div className='col-xl-12'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-warning fs-6'>Souche</label>
                                <input
                                    readOnly
                                    placeholder='Garage'
                                    type='text'
                                    autoComplete='off'
                                    className='form-control bg-transparent'

                                />
                            </div>
                        </div>
                        <div className='col-xl-12'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-warning fs-6'> Salarie</label>
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
                                <label className='form-label fw-bolder text-warning fs-6'> date souhaite</label>
                                <input
                                    type="date" id="date" value={date} onChange={handleDateChange}
                                    className='form-control bg-transparent'

                                />
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-warning fs-6'> Heure Arrivee</label>
                                <input
                                    type="time" id="time" value={time} onChange={handleTimeChange}
                                    className='form-control bg-transparent'

                                />
                            </div>
                        </div>
                        <div className='col-xl-4'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-warning fs-6'> Nom Client</label>
                                <input
                                    type='text'
                                    className='form-control bg-transparent'

                                />
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card-toolbar'>
                                <Link
                                    style={{ marginTop: 30 }}
                                    className='btn btn-sm btn-light-warning' to='' >
                                    <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />

                                </Link>
                            </div>
                        </div>
                        <div className='col-xl-4'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-warning fs-6'>Immatricule Vehicule</label>
                                <input
                                    type='text'
                                    className='form-control bg-transparent'

                                />
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card-toolbar'>
                                <Link
                                    style={{ marginTop: 30 }}
                                    className='btn btn-sm btn-light-warning' to='' >
                                    <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />

                                </Link>
                            </div>
                        </div>
                        <div className='col-xl-12'>
                            <div className='fv-row mb-8'>
                                <label className='form-label fw-bolder text-warning fs-6'>Details</label>
                                <input
                                    type='text'
                                    className='form-control bg-transparent'
                                    value={inputValue}
                                    onChange={handleChange}
                                    style={{ minHeight: "100px" }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* end::Body */}
        </div>
    );
}