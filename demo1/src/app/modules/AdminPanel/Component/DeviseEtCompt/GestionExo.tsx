import { Link } from "react-router-dom";

export function GestionExo() {
    return (
        <>
            <div className='card '>
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Paramétrage Exonération</span>
                    </h3>

                </div>
                <div className="card-body">
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Champs Obligatoire:</span>
                    </h3>
                    <br></br>
                    <div className='row g-5 g-xxl-8'>
                        <div className='fv-row mb-8'>
                            <div className='col-xl-6'>
                                <input
                                    className=" bg-transparent"
                                    type="checkbox"
                                    style={{ marginLeft: '10px' }}

                                />
                                N Exonération
                            </div>
                            <br></br>
                            <div className='col-xl-6'>
                                <input
                                    className=" bg-transparent"
                                    type="checkbox"
                                    style={{ marginLeft: '10px' }}
                                />
                                Date Exonération
                            </div>
                            <br></br>
                            <div className='col-xl-6'>
                                <input
                                    className=" bg-transparent"
                                    type="checkbox"
                                    style={{ marginLeft: '10px' }}
                                />
                                Validé Exonération
                            </div>


                        </div>
                        <div className='card-toolbar'>
                            <Link
                                className='btn btn-sm btn-light-primary float-right' to=''    >
                                Valider
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}