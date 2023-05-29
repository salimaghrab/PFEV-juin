import { Link } from "react-router-dom";

export function ConfigComptabilite(){
    return(
        <>
            <div className='card '>
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Configuration comptable</span>
                    </h3>

                </div>
                <div className="card-body">
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Ecriture Comptable</span>
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
                               Générer écritures comptables par facture.
                            </div>
                           
                            <br></br>
                            <div className='col-xl-6'>
                                <input
                                    className=" bg-transparent"
                                    type="checkbox"
                                    style={{ marginLeft: '10px' }}
                                />
                                Générer écritures comptables par échéance.
                            </div>
                        </div>
                        
                    </div>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Mode Comptabilisation</span>
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
                            Comptabilisation des factures et des réglements simultanément
                            </div>
                            
                        </div>
                    </div>
                    <div className='card-toolbar'>
                            <Link
                                className='btn btn-sm btn-light-primary float-right' to=''    >
                                Valider
                            </Link>
                            <Link
                                className='btn btn-sm btn-light-danger float-right' to=''   style={{ marginLeft: '10px' }}  >
                                Fermer
                            </Link>
                        </div>
                </div>
            </div>
        </>
    )
}