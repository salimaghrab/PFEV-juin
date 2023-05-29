import { useEffect, useState } from "react";
import { Alert, ToastContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import axios from "axios";
import GroupeRow from "./ComptFetch/GroupeRow";
import GroupRow from "./ComptFetch/GroupeRow";
import { KTSVG } from "../../../../../_metronic/helpers";
import { toast } from "react-toastify";

const initialValues = {
  GroupeCode: '',
  GroupeName: '',
  GroupeType: '',
}

const GroupeSchema = Yup.object().shape({
  GroupeCode: Yup.string()
    .max(10, 'Maximum 10 symbols')
    .required('Groupe code is required'),
  GroupeName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(15, 'Maximum 15 symbols')
    .required('Groupe Name is required'),
  GroupeType: Yup.string()
    .min(4, 'Minimum 5 symbols')
    .max(20, 'Maximum 20 symbols')
    .required('Groupe Function is required'),

})
export function Groupe() {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };
  const [, setLoading] = useState(false)
  const formik = useFormik({
    initialValues,
    validationSchema: GroupeSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true)
    },
  })
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7074/api/groups')
      .then(response => {
        setGroups(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const [groupCode, setGroupCode] = useState<string>("");
  const [groupName, setGroupName] = useState<string>("");
  const [groupType, setGroupType] = useState<string>("");
  const addGroup = () => {
    const groupData = { code: groupCode, name: groupName, type: groupType };
    axios.post('https://localhost:7074/api/groups', groupData)
      .then(response => {
        setGroups(groups.concat(response.data));
        setGroupCode("");
        setGroupName("");
        setGroupType("");
      })
      .catch(error => {
        console.log(error);
      });
      toast.success('added Successfully', { autoClose: 2000 });
  }
  
  return (
    <>
      <div className='card'>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>List des Groupe</span>
          </h3>
          <div className='card-toolbar'>
            <Link
              className='btn btn-sm btn-light-primary' onClick={handleClick} to='' >
              <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
              Ajouter Group
            </Link>
          </div>
        </div>
        {/* end::Header */}
        {/* begin::Body */}
        <div className='card-body py-3'>
          {/* begin::Table container */}
          <div className='table-responsive'>
            {/* begin::Table */}
            <table className='table align-middle gs-0 gy-4'>
              {/* begin::Table head */}
              <thead>
                <tr className='fw-bold text-muted bg-light'>
                  <th className='ps-4 min-w-200px rounded-start'>code</th>
                  <th className='min-w-200px'>Intutile</th>
                  <th className='min-w-200px'>Type</th>
                  <th className='min-w-200px text-end rounded-end'> Actions</th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                {groups.map((group, index) => (
                  <GroupRow key={index} group={group} />
                  
                ))}
              </tbody>
              {/* end::Table body */}
            </table>
            {/* end::Table */}
          </div>
          {/* end::Table container */}
        </div>
        {/* begin::Body */}
      </div>

      <div className="d-flex justify-content-center align-items-center fixed-top " style={{ zIndex: 999 }}>
        <Alert className="w-50" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          show={showAlert} onClose={() => setShowAlert(false)} dismissible  >
          <div className="card" >
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Gestion des Groupes</span>
              </h3>
            </div>
            <div className="card-body">
              <div className='row g-5 g-xxl-8'>
                <div className='col-xl-6'>
                  {/* begin::Form group GroupeCode */}
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Groupe Code</label>
                    <input
                      placeholder='Groupe code'
                      className="form-control" value={groupCode} onChange={e => setGroupCode(e.target.value)}
                    />
                    {formik.touched.GroupeCode && formik.errors.GroupeCode && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          <span role='alert'>{formik.errors.GroupeCode}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* end::Form group */}
                  {/* begin::Form group GroupeName */}
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Groupe name</label>
                    <input
                      placeholder='Groupe name'
                      type="text"
                      className="form-control" value={groupName} onChange={e => setGroupName(e.target.value)}
                    />
                    {formik.touched.GroupeName && formik.errors.GroupeName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          <span role='alert'>{formik.errors.GroupeName}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* end::Form group */}
                  {/* begin::Form group GroupeType */}
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Groupe Type</label>
                    <input
                      type="text" placeholder="Groupe Type" className="form-control" value={groupType} onChange={e => setGroupType(e.target.value)}
                    />
                    {formik.touched.GroupeType && formik.errors.GroupeType && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          <span role='alert'>{formik.errors.GroupeType}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <button

                    className='btn btn-sm btn-light-primary' type="submit" onClick={() => {
                      addGroup();
                      setShowAlert(false);
                    }}
                  >
                    <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                    Ajouter
                  </button>
                  <a
                    href='#'
                    className='btn btn-sm btn-light-danger'
                    style={{ marginLeft: '10px' }}
                    onClick={() => setShowAlert(false)}
                  >
                    <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                    Anuuler
                  </a>
                  {/* end::Form group */}
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </Alert>
      </div>
    </>
  )
}
