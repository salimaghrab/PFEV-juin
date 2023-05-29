import { useState } from "react";
import { Link } from "react-router-dom";

export function ParametrageCreationTier() {
    const [showInformation, setShowInformation] = useState(true);
    const [showInformationLocalisation, setShowInformationLocalisation] = useState(false);

    const handleClick1 = () => {
        setShowInformation(true);
        setShowInformationLocalisation(false);
    }

    const handleClick2 = () => {
        setShowInformation(false);
        setShowInformationLocalisation(true);
    }

    return (
        <div>
            <button className='btn btn-light-primary' onClick={handleClick1}>Information</button>
            <button className='btn  btn-light-primary' style={{ marginLeft: '10px' }} onClick={handleClick2}>Information Localisation</button>
            {showInformation && <Information />}
            {showInformationLocalisation && <InformationLocalisation />}
        </div>
    );
}

function Information() {
    return <div className='card '>
        <div className="row">
            <div className="col-md-6">
                <div className="card bg-light">
                    <div className='card-header border-0 pt-5'>
                        <h3 className='card-title align-items-start text-white text-center'>
                            <span className='card-label fw-bold fs-3 mb-1'>Client</span>
                        </h3>
                    </div>
                    <div className="card-body">
                        <div className='card '>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Adresse</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row'>

                                    {/* begin::Form group Activite */}
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Obligatoire



                                        </div>
                                        {/* end::Form group */}


                                        {/* begin::Form group FormeJuridique */}

                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Optionnel

                                        </div>

                                    </div>
                                    {/* end::Form group */}

                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className='card '>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Telephone</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row'>

                                    {/* begin::Form group Activite */}
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Obligatoire



                                        </div>
                                        {/* end::Form group */}


                                        {/* begin::Form group FormeJuridique */}

                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Optionnel

                                        </div>

                                    </div>
                                    {/* end::Form group */}

                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className='card '>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>E-mail</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row'>

                                    {/* begin::Form group Activite */}
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Obligatoire



                                        </div>
                                        {/* end::Form group */}


                                        {/* begin::Form group FormeJuridique */}

                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Optionnel

                                        </div>

                                    </div>
                                    {/* end::Form group */}

                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className='card '>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>MAtricule fiscale</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row'>

                                    {/* begin::Form group Activite */}
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Obligatoire



                                        </div>
                                        {/* end::Form group */}


                                        {/* begin::Form group FormeJuridique */}

                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Optionnel

                                        </div>

                                    </div>
                                    {/* end::Form group */}

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/** other card for the f */}
            <div className="col-md-6">
                <div className="card bg-light">
                    <div className='card-header border-0 pt-5'>
                        <h3 className='card-title align-items-start flex-column'>
                            <span className='card-label fw-bold fs-3 mb-1'>Fournisseur</span>
                        </h3>
                    </div>
                    <div className="card-body">
                        <div className='card '>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Adresse</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row'>

                                    {/* begin::Form group Activite */}
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Obligatoire



                                        </div>
                                        {/* end::Form group */}


                                        {/* begin::Form group FormeJuridique */}

                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Optionnel

                                        </div>

                                    </div>
                                    {/* end::Form group */}

                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className='card '>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Telephone</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row'>

                                    {/* begin::Form group Activite */}
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Obligatoire



                                        </div>
                                        {/* end::Form group */}


                                        {/* begin::Form group FormeJuridique */}

                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Optionnel

                                        </div>

                                    </div>
                                    {/* end::Form group */}

                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className='card '>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>E-mail</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row'>

                                    {/* begin::Form group Activite */}
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Obligatoire



                                        </div>
                                        {/* end::Form group */}


                                        {/* begin::Form group FormeJuridique */}

                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Optionnel

                                        </div>

                                    </div>
                                    {/* end::Form group */}

                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className='card '>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>MAtricule fiscale</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row'>

                                    {/* begin::Form group Activite */}
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Obligatoire



                                        </div>
                                        {/* end::Form group */}


                                        {/* begin::Form group FormeJuridique */}

                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Optionnel

                                        </div>

                                    </div>
                                    {/* end::Form group */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='card-toolbar'>
            <Link
                className='btn btn-sm btn-light-primary float-right' to=''    >
                Confirmer
            </Link>

            <Link
                className='btn btn-sm btn-light-danger float-right' to='' style={{ marginLeft: '10px' }} >
                Fermer
            </Link>
        </div>
    </div>;
}

function InformationLocalisation() {
    return <div className='card '>
        <div className="row">
            <div className="col-md-6">
                <div className="card bg-light">
                    <div className='card-header border-0 pt-5'>
                        <h3 className='card-title align-items-start text-white text-center'>
                            <span className='card-label fw-bold fs-3 mb-1'>Client</span>
                        </h3>
                    </div>
                    <div className="card-body">
                        <div className='card '>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Gouvernorat</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row'>

                                    {/* begin::Form group Activite */}
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Obligatoire



                                        </div>
                                        {/* end::Form group */}


                                        {/* begin::Form group FormeJuridique */}

                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Optionnel

                                        </div>

                                    </div>
                                    {/* end::Form group */}

                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className='card '>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Delegation</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row'>

                                    {/* begin::Form group Activite */}
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Obligatoire



                                        </div>
                                        {/* end::Form group */}


                                        {/* begin::Form group FormeJuridique */}

                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Optionnel

                                        </div>

                                    </div>
                                    {/* end::Form group */}

                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className='card '>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Localite</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row'>

                                    {/* begin::Form group Activite */}
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Obligatoire



                                        </div>
                                        {/* end::Form group */}


                                        {/* begin::Form group FormeJuridique */}

                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Optionnel

                                        </div>

                                    </div>
                                    {/* end::Form group */}

                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className='card '>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Zone</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row'>

                                    {/* begin::Form group Activite */}
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Obligatoire



                                        </div>
                                        {/* end::Form group */}


                                        {/* begin::Form group FormeJuridique */}

                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Optionnel

                                        </div>

                                    </div>
                                    {/* end::Form group */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/** other card for the f */}
            <div className="col-md-6">
                <div className="card  bg-light">
                    <div className='card-header border-0 pt-5'>
                        <h3 className='card-title align-items-start flex-column'>
                            <span className='card-label fw-bold fs-3 mb-1'>Fournisseur</span>
                        </h3>
                    </div>
                    <div className="card-body ">
                        <div className='card  '>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Gouvernorat</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row'>

                                    {/* begin::Form group Activite */}
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Obligatoire



                                        </div>
                                        {/* end::Form group */}


                                        {/* begin::Form group FormeJuridique */}

                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Optionnel

                                        </div>

                                    </div>
                                    {/* end::Form group */}

                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className='card '>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Delegation</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row'>

                                    {/* begin::Form group Activite */}
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Obligatoire



                                        </div>
                                        {/* end::Form group */}


                                        {/* begin::Form group FormeJuridique */}

                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Optionnel

                                        </div>

                                    </div>
                                    {/* end::Form group */}

                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className='card '>
                            <div className='card-header border-0 pt-5'>
                                <h3 className='card-title align-items-start flex-column'>
                                    <span className='card-label fw-bold fs-3 mb-1'>Localite</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className='row'>

                                    {/* begin::Form group Activite */}
                                    <div className='col-xl-6'>
                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Obligatoire



                                        </div>
                                        {/* end::Form group */}


                                        {/* begin::Form group FormeJuridique */}

                                        <div className='fv-row mb-8'>
                                            <input
                                                className=" bg-transparent"
                                                type="checkbox"
                                                style={{ marginLeft: '10px' }}

                                            />
                                            Optionnel

                                        </div>

                                    </div>
                                    {/* end::Form group */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='card-toolbar'>
            <Link
                className='btn btn-sm btn-light-primary float-right' to=''    >
                Confirmer
            </Link>

            <Link
                className='btn btn-sm btn-light-danger float-right' to='' style={{ marginLeft: '10px' }} >
                Fermer
            </Link>
        </div>
    </div>;
}