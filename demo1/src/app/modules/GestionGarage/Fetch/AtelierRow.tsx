import axios from "axios";
import { useState, useEffect } from "react";

export function AtelierRow() {
    const [Ateliers, setAteliers] = useState<{ atelierId: number }[]>([]);

    useEffect(() => {
        axios.get('https://localhost:7074/api/Ateliers')
            .then(response => {
                setAteliers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <>
            {Ateliers.map(atelier => (
                <option className='text-dark fw-bold text-hover-primary mb-1 fs-6' key={atelier.atelierId} value={atelier.atelierId}>{atelier.atelierId}</option>
            ))}
        </>
    )
}