import axios from "axios";
import { useState, useEffect } from "react";
import { KTSVG } from "../../../../_metronic/helpers";

export function VehiculeRow(props: {
    vehicule: {
      
    vehiculeId: number,
    vehiculeImmat: string,
    modele: string,
    marque: string,
    clientId: number,
    
    version: string,
    numCarteGrise: string,
    poidsV: number,
    poid: number,
    dateCarteGrise: string,
    numChaise: number,
    dateMEC: string,
    numMoteur: string,
    genre: string,
    kilomettrage: number,
    numrSerie:string,
    kmAn: number,
    puissanceR: number,
    puissanceF: number,
    anneModel: number,
    places: number,
    permierMain: true,
    premierMainValue: boolean,
    categorie:string,
    assurance:string,
    typeAssurance:string,
    dureeAssurance:string,
    carrosserie:string,
    type:string,
    colorEx:string,
    colorInt:string,
    codePint:string,
    garantieDebut:string,
    garantieFin:string,
    relance:string,
    garantieType:string,
    garnantieSuite:string,
    kmGarantie: number,
    dateProchaineT:string,
    dateProchaineR:string,
    dateProchaineV:string,
    dateProchaineInt:string
    };
}) {

    const [additionalData, setAdditionalData] = useState('');
    useEffect(() => {
        axios.get(`https://localhost:7074/api/vehicules`)
            .then(response => {
                setAdditionalData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [props.vehicule.vehiculeId]);
    return(
        <>
        <tr>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    {props.vehicule.codePint}
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    {props.vehicule.vehiculeImmat}
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                   {props.vehicule.kilomettrage}
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    {props.vehicule.anneModel}
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    {props.vehicule.dateProchaineInt}
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>

                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                                    {props.vehicule.dateCarteGrise}
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
        
        
        </>
    )
}