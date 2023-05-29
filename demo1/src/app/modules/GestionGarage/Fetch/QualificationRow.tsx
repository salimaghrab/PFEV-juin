import axios from "axios";
import { useState, useEffect } from "react";

export function QualificationRow() {
    const [qualifications, setQualifications] = useState<{ idQualification: number; qualificationName: string }[]>([]);

    useEffect(() => {
        axios.get('https://localhost:7074/api/Qualifications')
            .then(response => {
                setQualifications(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <>
           
                <option className='text-dark fw-bold text-hover-primary mb-1 fs-6' selected disabled hidden value=" "></option>
                {qualifications.map(qualification => (
                    <option className='text-dark fw-bold text-hover-primary mb-1 fs-6' key={qualification.idQualification} value={qualification.idQualification}>{qualification.qualificationName}</option>
                ))}

        </>
    )
}