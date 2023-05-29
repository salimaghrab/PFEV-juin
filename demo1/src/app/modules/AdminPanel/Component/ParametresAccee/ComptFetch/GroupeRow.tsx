import axios from 'axios';
import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import { KTSVG } from '../../../../../../_metronic/helpers';
import { Alert, ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';

function GroupRow(props: {
  group: {
      idGroupe: number;
      name: string;
      type: string;
      code: string;
  };
}) 
{
  const [additionalData, setAdditionalData] = useState('');


  useEffect(() => {
    axios.get(`https://localhost:7074/api/groups${props.group.idGroupe}/additional-data`)
      .then(response => {
        setAdditionalData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.group.idGroupe]);
  const [showAlert, setShowAlert] = useState(false);
  const [updatedName, setUpdatedName] = useState(props.group.name);
  const [updatedType, setUpdatedType] = useState(props.group.type);
const[updatedCode, setUpdatedCode]= useState(props.group.code);
  const handleUpdate = () => {
    const updatedGroup = {
      ...props.group,
      name: updatedName,
      type: updatedType,
      code: updatedCode,
    };
    axios.put(`https://localhost:7074/api/groups/${props.group.idGroupe}`, updatedGroup)
      .then(response => {
        // handle the success response
        console.log(response.data);
      })
      .catch(error => {
        // handle the error response
        console.log(error);
      });
      toast.success('Updated Successfully', { autoClose: 2000 });
  };

  const deleteGroup = (idGroupe: number) => {
    axios.delete(`https://localhost:7074/api/groups/${idGroupe}`)
      .then(response => {
        // Call the API again to get the updated list of groups
        axios.get('https://localhost:7074/api/groups')
          .then(response => {
            console.log(response.data);
          })
      })
      .catch(error => {
        console.log(error);
      });
      toast.success('Deleted with success', { autoClose: 2000 });
  }

  return (
    <>
    <tr>
      <td>
        <div className='d-flex align-items-center'>
          <div className='symbol symbol-50px me-5'>

          </div>
          <div className='d-flex justify-content-start flex-column  text-hover-primary'>
            {props.group.code}
          </div>
        </div>
      </td>
      <td>
        <div className='d-flex align-items-center'>
          <div className='symbol symbol-50px me-5'>

          </div>
          <label className='d-flex justify-content-start flex-column  text-hover-primary'>
            {props.group.name}
          </label>
          {/**<input onChange={(e) => setUpdatedType(e.target.value)}></input>**/}
        </div>
      </td>
      <td>
        <div className='d-flex align-items-center'>
          <div className='symbol symbol-50px me-5'>
          </div>
          <div className='d-flex justify-content-start flex-column  text-hover-primary'>
            {props.group.type}
          </div>
        </div>
      </td>
      <td className='text-end'>
                    <button className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1' onClick={() => setShowAlert(true)} >
                        <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </button>
                    <button className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1' onClick={() => deleteGroup(props.group.idGroupe)}>
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
                                        value={updatedType}
                                        onChange={e => setUpdatedType(e.target.value)}
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

export default GroupRow;

