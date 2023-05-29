import { Link } from "react-router-dom";

export function CalculeEcheance(){
    return(
        <>
         <div className='card '>
                <div className='card-header border-0 pt-5'>
                    <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>Calcule des Echeances</span>
                    </h3>
                </div>
                <div className="card-body">
                <div className='row'>
                        {/* begin::Form group Activite */}
                        <div className='col'>
                            <div className='fv-row'>
                                <input
                                    className=" bg-transparent"
                                    type="checkbox"
                                    style={{ marginLeft: '10px' }}
                                />
                                Bon Commande 
                            </div>
                        </div>
                        {/* end::Form group */}
                       
                            <div className='fv-row'>
                                <input
                                    className=" bg-transparent"
                                    type="checkbox"
                                    style={{ marginLeft: '10px' }}
                                />
                                Facture
                            </div>
    
                    </div>
                    <br></br>
                    <div className='row'>
                        {/* begin::Form group Activite */}
                        <div className='col'>
                            <div className='fv-row'>
                                <input
                                    className=" bg-transparent"
                                    type="radio"
                                    style={{ marginLeft: '10px' }}
                                />
                                Date document 
                            </div>
                        </div>
                        {/* end::Form group */}
                       
                            <div className='fv-row'>
                                <input
                                    className=" bg-transparent"
                                    type="radio"
                                    style={{ marginLeft: '10px' }}
                                />
                                Date Livraison prevue
                            </div>
    
                    </div>
                    <Link
                        className='btn btn-sm btn-light-primary float-right' to=''    >
                        Valider
                    </Link>
                </div>
                {/* end::Form group */}
            </div>
        </>
    )
}