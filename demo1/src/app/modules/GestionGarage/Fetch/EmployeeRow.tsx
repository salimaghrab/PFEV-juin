import axios from "axios";
import { useState, useEffect, ReactChild, ReactFragment, ReactPortal } from "react";
export function EmployeeRow(props: { Employee: { idEmployee: number; email: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }; }) {
    const [additionalData, setAdditionalData] = useState('');
    const [Employees, setEmployee] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [EmployeeData, setEmployeeData] = useState({
        email: '',
    });
    useEffect(() => {
        axios.get(`https://localhost:7074/api/Employees${props.Employee.idEmployee}/additional-data`)
            .then(response => {
                setAdditionalData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [props.Employee.idEmployee]);
    return (
        <>
                <td>
                    <div className='d-flex align-items-center'>
                        <div className='d-flex justify-content-start flex-column'>
                            <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                {props.Employee.email}
                            </a>
                        </div>
                    </div>
                </td>
                <td>
                    <div className='d-flex align-items-center'>
                        <div className='d-flex justify-content-start flex-column'>
                            <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                qsdryh
                            </a>
                        </div>
                    </div>
                </td>
                <td>
                    <div className='d-flex align-items-center'>
                        <div className='d-flex justify-content-start flex-column'>
                            <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                qsdryh
                            </a>
                        </div>
                    </div>
                </td>
        </>
    )
}