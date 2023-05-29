import { Link } from "react-router-dom";
import { SetStateAction, useState } from "react";

export function ReceptionVehicule(){
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        setSelectedFiles(files);
    };

    const handleUploadClick = () => {
        if (selectedFiles) {
            // upload the selected files here
            console.log(selectedFiles);
        }
    };
    {/*View Button  */ }
    const [activeView, setActiveView] = useState('Client');
    const handleClientClick = () => {
        setActiveView('Client');
    };


    const handleVehiculeClick = () => {
        setActiveView('Vehicule');
    };

    const handleDocumentClick = () => {
        setActiveView('Document');
    };
    {/*Date input  */ }
    const [selectedDate0, setSelectedDate0] = useState("");
    const handleDateChange0 = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate0(e.target.value);
    };
    
    const [selectedDate1, setSelectedDate1] = useState("");
    const handleDateChange1 = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate1(e.target.value);
    };
    return (
        <>

<div className="card bg-light">
                        <div className="card" >
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Document Reception</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row'>
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>N Document </label>
                                            <input
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
                                            <label className='form-label fw-bolder text-dark fs-6'>Souche </label>
                                            <input
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
                                            <label className='form-label fw-bolder text-dark fs-6'>Collaborateur </label>
                                            <select className='form-select bg-transparent'>
                                                <option selected disabled hidden value=""></option>
                                                <option>fgj</option>
                                                <option> fjf</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-xl-3'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Date Reception Vehicule </label>
                                            <input
                                             type="date" id="date" value={selectedDate0} onChange={handleDateChange0}
                                                className='form-control bg-transparent'

                                            />

                                        </div>

                                    </div>
                                    <div className='col-xl-3'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Etat </label>
                                            <select className='form-select bg-transparent'>
                                                <option selected disabled hidden value=""></option>
                                                <option>Saisie</option>
                                                <option> Valide</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Atelier </label>
                                            <select className='form-select bg-transparent'>
                                                <option selected disabled hidden value=""></option>
                                                <option>fgj</option>
                                                <option> fjf</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Rendez-Vous </label>
                                            <input
                                                readOnly
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
                    <br></br>
                    <div className="card">
                        <div className="card-body">
                            <div >
                                <button className='btn btn-light-primary' onClick={handleClientClick} >Client</button>
                                <button className='btn  btn-light-primary' style={{ marginLeft: '10px' }} onClick={handleVehiculeClick}>Vehicule</button>
                                <button className='btn  btn-light-primary' style={{ marginLeft: '10px' }} onClick={handleDocumentClick}>Document</button>
                            </div>
                            {activeView === 'Client' && (
                                <div>

                                    <div className="card-body">
                                    <div className='row'>
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <label className='form-label fw-bolder text-dark fs-6'>Nom </label>
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
                                            <label className='form-label fw-bolder text-dark fs-6'>Portable </label>
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
                                            <label className='form-label fw-bolder text-dark fs-6'>code Postel </label>
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
                            {activeView === 'Vehicule' && (
                                <div>
                                    <div className="card-body">
                                        <div className='row'>
                                            <div className='col-xl-6'>
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>Immatriculation</label>
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Kilometrage </label>
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Annee Premier Circulation </label>
                                                    <input
                                                        type="date" id="date" value={selectedDate1} onChange={handleDateChange1}
                                                        className='form-control bg-transparent'
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className='col-xl-6'>
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>Model </label>
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
                                                    <label className='form-label fw-bolder text-dark fs-6'>Etat Vehicule </label>
                                                    <select className='form-select bg-transparent'>
                                                <option selected disabled hidden value=""></option>
                                                <option>Panne</option>
                                                <option> Panne2</option>
                                            </select>
                                                </div>
                                            </div>
                                            <div className='col-xl-6'>
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>Symptomes</label>
                                                    <input
                                                        type="text" 
                                                        className='form-control bg-transparent'
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-xl-6'>
                                                <div className='fv-row mb-8'>
                                                    <label className='form-label fw-bolder text-dark fs-6'>Description </label>
                                                    <input                                     
                                                        type="text"
                                                        className='form-control bg-transparent'
                                                    />


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeView === 'Document' && (
                                <div>
                                    <div className="card-body">
                                        <div>
                                            <input className='btn btn-light-primary' type="file" onChange={handleInputChange} />
                                            <button style={{ marginLeft: 10 }} className='btn btn-light-primary' onClick={handleUploadClick}>Upload</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='card-toolbar'>
                        <Link
                            className='btn btn-sm btn-light-primary' to='' >

                            Valider
                        </Link>
                    </div>
         
        </>
    )
}