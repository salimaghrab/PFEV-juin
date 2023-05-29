import { useEffect, useState} from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { KTSVG } from "../../../../../_metronic/helpers";
import { Link } from 'react-router-dom'
import { Alert} from 'react-bootstrap'
import axios from 'axios';
import { ProfileRow } from './ComptFetch/ProfileRow';



const initialValues = {
  ProfileCode: '',
  ProfileName: '',
  ProfileFunction: '',
}

const ProfileSchema = Yup.object().shape({
  ProfileCode: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(10, 'Maximum 10 symbols')
    .required('Profile code is required'),
  ProfileName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(15, 'Maximum 15 symbols')
    .required('Profile Name is required'),
  ProfileFunction: Yup.string()
    .min(5, 'Minimum 5 symbols')
    .max(20, 'Maximum 20 symbols')
    .required('PRofile Function is required'),

})

export function Profile() {

  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7074/api/profiles')
      .then(response => {
        setProfiles(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const [codeProfile, setCodeProfile] = useState<string>("");
  const [name, setname] = useState<string>("");
  const [description, setdescription] = useState<string>("");
  const addProfile = () => {
    const profileData = { codeProfile: codeProfile, name: name, description: description };
    axios.post('https://localhost:7074/api/profiles', profileData)
      .then(response => {
        setProfiles(profiles.concat(response.data));
        setCodeProfile("");
        setname("");
        setdescription("");
      })
      .catch(error => {
        console.log(error);
      });
      toast.success('Success!', { autoClose: 2000 });
  }
  const [, setLoading] = useState(false)
  const formik = useFormik({
    initialValues,
    validationSchema: ProfileSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true)
    },
  })
  return (
    <>
      <div className='card'>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>List des Profiles</span>
          </h3>
          <div className='card-toolbar'>
            <Link
              className='btn btn-sm btn-light-primary' onClick={handleClick} to='' >
              <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
              Ajouter Profile
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
                  <th className='ps-4 min-w-200px rounded-start'>Code Profile</th>
                  <th className='min-w-200px'>Intutile Pofile</th>
                  <th className='min-w-200px'>Fonction </th>
                  <th className='min-w-200px text-end rounded-end'> Actions</th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
              {profiles.map((profile, index) => (
                  <ProfileRow key={index} profile={profile} />
                  
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
      <div className="d-flex justify-content-center align-items-center fixed-top" style={{ zIndex: 999 }}>
        <Alert className="w-50" style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
          show={showAlert} onClose={() => setShowAlert(false)} dismissible  >
          <div className="card">
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Gestion des Profiles</span>
              </h3>
            </div>
            <div className="card-body">
              <div className='row g-5 g-xxl-8'>
                <div className='col-xl-6'>
                  {/* begin::Form group ProfileCode */}
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Profile Code</label>
                    <input
                      placeholder='Profile code'
                      type='text'
                      autoComplete='off'
                      className="form-control" value={codeProfile} onChange={e => setCodeProfile(e.target.value)}
                    />
                    {formik.touched.ProfileCode && formik.errors.ProfileCode && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          <span role='alert'>{formik.errors.ProfileCode}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* end::Form group */}
                  {/* begin::Form group ProfileName */}
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Profile name</label>
                    <input
                      placeholder='Profile name'
                      type='text'
                      autoComplete='off'
                      className="form-control" value={name} onChange={e => setname(e.target.value)}
                    />
                    {formik.touched.ProfileName && formik.errors.ProfileName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          <span role='alert'>{formik.errors.ProfileName}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* end::Form group */}
                  {/* begin::Form group ProfileFunction */}
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Profile Funtion</label>
                    <input
                      placeholder='Profile Function'
                      type='text'
                      autoComplete='off'
                      className="form-control" value={description} onChange={e => setdescription(e.target.value)}
                    />
                    {formik.touched.ProfileFunction && formik.errors.ProfileFunction && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          <span role='alert'>{formik.errors.ProfileFunction}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <button
                    type='submit'
                    className='btn btn-sm btn-light-primary'
                    onClick={() => {
                      addProfile();
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
                </div>
              </div>
            </div>
          </div>
        </Alert>
      </div>
      <ToastContainer />
    </>
  )
}
