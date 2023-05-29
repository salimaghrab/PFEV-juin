import axios from "axios";
import { ReactChild, ReactFragment, ReactPortal, useState, useEffect } from "react";
import { KTSVG } from "../../../../../../_metronic/helpers";
import { Alert, ToastContainer } from "react-bootstrap";
import { toast } from "react-toastify";

export function ProfileRow(props: {
    profile: {
        idProfile: number;
        codeProfile: string;
        name: string;
        description: string;
    };
}) 
{
    const [additionalData, setAdditionalData] = useState('');
    const [Profiles, setProfiles] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [ProfileData, setProfileData] = useState({
        codeProfile: '',
        name: '',
        type: '',
    });
    useEffect(() => {
        axios.get(`https://localhost:7074/api/profiles${props.profile.idProfile}/additional-data`)
            .then(response => {
                setAdditionalData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [props.profile.idProfile]);




    const [showAlert, setShowAlert] = useState(false);
    const [updatedName, setUpdatedName] = useState(props.profile.name);
    const [updatedDescription, setupdatedDescription] = useState(props.profile.description);
    const [updatedCode, setUpdatedCode] = useState(props.profile.codeProfile);
    const handleUpdate = () => {
        const updatedProfile = {
            ...props.profile,
            name: updatedName,
            description: updatedDescription,
            codeProfile: updatedCode,
        };

        axios.put(`https://localhost:7074/api/profiles/${props.profile.idProfile}`, updatedProfile)
            .then(response => {
                // handle the success response
                console.log(response.data);
                setProfiles(response.data);
            })
            .catch(error => {
                // handle the error response
                console.log(error);
            });
        toast.success('Updated Successfully', { autoClose: 2000 });
    };
    const deleteProfile = (idProfile: number) => {
        axios.delete(`https://localhost:7074/api/profiles/${idProfile}`)
          .then(response => {
            // Call the API again to get the updated list of profiles
            axios.get('https://localhost:7074/api/profiles')
              .then(response => {
                console.log(response.data);
                setProfiles(response.data);
              })
          })
          .catch(error => {
            console.log(error);
          });
      }
    
    return (
        <>
            <tr>
                <td>
                    <div className='d-flex align-items-center'>
                        <div className='symbol symbol-50px me-5'>

                        </div>
                        <div className='d-flex justify-content-start flex-column  text-hover-primary'>
                            {props.profile.codeProfile}
                        </div>
                    </div>
                </td>
                <td>
                    <div className='d-flex align-items-center'>
                        <div className='symbol symbol-50px me-5'>

                        </div>
                        <div className='d-flex justify-content-start flex-column  text-hover-primary'>
                            {props.profile.name}
                        </div>
                    </div>
                </td>
                <td>
                    <div className='d-flex align-items-center'>
                        <div className='symbol symbol-50px me-5'>

                        </div>
                        <label className='d-flex justify-content-start flex-column  text-hover-primary'>
                            {props.profile.description}
                        </label>
                        {/**<input onChange={(e) => setUpdatedType(e.target.value)}></input>**/}
                    </div>
                </td>
                <td className='text-end'>
                    <button className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1' onClick={() => setShowAlert(true)} >
                        <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </button>
                    <button className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1' onClick={() => deleteProfile(props.profile.idProfile)}>
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
                                    <label htmlFor='description' className='form-label fw-bold text-dark'>Description</label>
                                    <input
                                        type='text'
                                        id='description'
                                        className='form-control'
                                        value={updatedDescription}
                                        onChange={e => setupdatedDescription(e.target.value)}
                                    />
                                </div>
                                <div className='fv-row mb-8'>
                                    <label htmlFor='code' className='form-label fw-bold text-dark'>Code</label>
                                    <input
                                        type='text'
                                        id='code'
                                        className='form-control'
                                        value={updatedCode}
                                        onChange={e => setUpdatedCode(e.target.value)}
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
