import axios from "axios";
import { useState, useEffect } from "react";
import { KTSVG } from "../../../../../../_metronic/helpers";
import { ToastContainer, toast } from "react-toastify";
import { Alert } from "react-bootstrap";

export function UserRow(props: {
    user: {
        idUser: number;
        name: string;
        email: string;
        password: string;
        profile: {
            idProfile: number;
            name: string;
        };
        groupeId: Number;
        idEmployee:Number;
    };
    
}) {

    const [additionalData, setAdditionalData] = useState('');
    useEffect(() => {
        axios.get(`https://localhost:7074/api/users`)
            .then(response => {
                setAdditionalData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [props.user.idUser]);
    const [users, setUsers] = useState([]);


    const [showAlert, setShowAlert] = useState(false);
    const [updatedName, setUpdatedName] = useState(props.user.name);
    const [updatedEmail, setupdatedEmail] = useState(props.user.email);
    const [updatedidEmployee, setUpdatedidEmployee] = useState(props.user.idEmployee);
    const [updatedidProfile, setUpdatedidProfile] = useState(props.user.profile.idProfile);
    const [updatedidGroupe, setUpdatedidGroupe] = useState(props.user.groupeId);
    const [updatedPassword, setUpdatedPassword] = useState(props.user.password);
    const handleUpdate = () => {
        const updatedUser = {
            ...props.user,
            name: updatedName,
            email: updatedEmail,
            password:updatedPassword,
            idEmployee: updatedidEmployee,
            idProfile: updatedidProfile,
            idGroupe:updatedidGroupe,
        };

        axios.put(`https://localhost:7074/api/users/${props.user.idUser}`, updatedUser)
            .then(response => {
                // handle the success response
                console.log(response.data);
                setUsers(response.data);
                toast.success('Updated Successfully', { autoClose: 2000 });
            })
            .catch(error => {
                // handle the error response
                console.log(error);
                toast.error('Error while Updating', { autoClose: 2000 });

            });
       
    };



    const deleteUser = (idUser: number) => {
        axios.delete(`https://localhost:7074/api/users/${idUser}`)
          .then(response => {
            // Call the API again to get the updated list of profiles
            axios.get('https://localhost:7074/api/users')
              .then(response => {
                console.log(response.data);
                setUsers(response.data);
              })
          })
          .catch(error => {
            console.log(error);
          });
      }
    
    return(
        <>
         <tr>
         <td>
                <div className='d-flex align-items-center'>
          <div className='symbol symbol-50px me-5'>

          </div>
          <div className='d-flex justify-content-start flex-column  text-hover-primary'>
                            {props.user.name}
                        </div>
                    </div>
                </td>
                <td>
                <div className='d-flex align-items-center'>
          <div className='symbol symbol-50px me-5'>

          </div>
          <div className='d-flex justify-content-start flex-column  text-hover-primary'>
                            {props.user.email}
                        </div>
                    </div>
                </td>
                <td>
                    <div className='d-flex align-items-center'>
                        <div className='symbol symbol-50px me-5'>

                        </div>
                        <label className='d-flex justify-content-start flex-column  text-hover-primary'>
                        {props.user.profile.name}
                        </label>
                        {/**<input onChange={(e) => setUpdatedType(e.target.value)}></input>**/}
                    </div>
                </td>
                <td className='text-end'>
                    <button className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'  onClick={() => setShowAlert(true)} >
                        <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </button>
                    <button className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1' onClick={() => deleteUser(props.user.idUser)}>
                        <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                    </button>
                </td>
            </tr>
            {showAlert && (
                <div className="d-flex justify-content-center align-items-center fixed-top" style={{ zIndex: 999 }}>
                    <Alert className="w-50" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        show={showAlert} onClose={() => setShowAlert(false)} dismissible  >
                        <div className="card">
                            <div className='card-header border-0 pt-5'>
                               
                            </div>
                            <div className="card-body">
                            <div className='row g-5 g-xxl-8'>
                <div className='col-xl-6'>
                                <div className='fv-row mb-8'>
                                    <label htmlFor='name' className='form-label fw-bold text-dark'>Name</label>
                                    <input
                                        type='text'
                                        id='name'
                                        className='form-control'
                                        value={updatedName}
                                        onChange={e => setUpdatedName(e.target.value)}
                                    />
                                </div>
                                <div className='fv-row mb-8'>
                                    <label htmlFor='Email' className='form-label fw-bold text-dark'>Email</label>
                                    <input
                                        type='text'
                                        id='Email'
                                        className='form-control'
                                        value={updatedEmail}
                                        onChange={e => setupdatedEmail(e.target.value)}
                                    />
                                </div>
                                <div className='fv-row mb-8'>
                                    <label htmlFor='pwd' className='form-label fw-bold text-dark'>password</label>
                                    <input
                                        type='password'
                                        id='pwd'
                                        className='form-control'
                                        value={updatedPassword}
                                        onChange={e => setUpdatedPassword(e.target.value)}
                                    />
                                </div>
                                <div className='fv-row mb-8'>
                                    <label htmlFor='empl' className='form-label fw-bold text-dark'>Employee</label>
                                    <input
                                        type='number'
                                        id='empl'
                                        className='form-control'
                                   
                                        onChange={(e) => setUpdatedidEmployee(Number(e.target.value))}
                                    />
                                </div>
                                <div className='fv-row mb-8'>
                                    <label htmlFor='grp' className='form-label fw-bold text-dark'>groupe</label>
                                    <input
                                        type='number'
                                        id='grp'
                                        className='form-control'
                                        onChange={(e) => setUpdatedidGroupe(Number(e.target.value))}
                                    />
                                </div>
                                <div className='fv-row mb-8'>
                                    <label htmlFor='prf' className='form-label fw-bold text-dark'>profile</label>
                                    <input
                                        type='number'
                                        id='prf'
                                        className='form-control'
                                        onChange={(e) => setUpdatedidProfile(Number(e.target.value))}
                                    />
                                </div>
                                <div className='fv-row mb-8'>
                                    <button className='btn btn-primary'onClick={() => {
                      handleUpdate();
                      setShowAlert(false);
                    }}>Update</button>

                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </Alert>
                </div>

            )}
            <ToastContainer />
        </>
    )
}