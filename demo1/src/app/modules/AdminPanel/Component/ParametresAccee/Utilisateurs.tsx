import clsx from 'clsx';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Yup from 'yup'
import { KTSVG } from "../../../../../_metronic/helpers";
import axios from 'axios';
import { UserRow } from './ComptFetch/UserRow';
import { toast } from 'react-toastify';

const initialValues = {
  UtilisateurName: '',
  UtilisateurPW: '',
  UtilisateurProfile: '',
  UtilisteurDepot: '',
  UtilisateurMail: '',
  UtilisteurGroup: ''
}
const UtilisateurSchema = Yup.object().shape({
  UtilisateurName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(20, 'Maximum 10 symbols')
    .required('USer Name is required'),
  UtilisateurMail: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),

  UtilisateurPW: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),

})


export function Utilisateurs() {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };

  const [, setLoading] = useState(false)
  const [profiles, setProfiles] = useState<{ profileId: string; name: string }[]>([]);

  useEffect(() => {
    axios
      .get("https://localhost:7074/api/profiles")
      .then(response => {
        setProfiles(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
 

  const [groupes, setGroupes] = useState<{ idGroupe: string; name: string }[]>([]);

  useEffect(() => {
    axios
      .get("https://localhost:7074/api/groups")
      .then(response => {
        setGroupes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [employees, setEmployees] = useState<{ idEmployee: string; nom: string }[]>([]);

  useEffect(() => {
    axios
      .get("https://localhost:7074/api/Employees")
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  const generateRandomPassword = () => {
    const length = 8;
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters.charAt(randomIndex);
    }
    setPassword(generatedPassword);
    formik.setFieldValue('UtilisateurPW', generatedPassword);
  };
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7074/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(users)
  const [profileId, setProfileId] = useState<number>(0);
  const [groupeId, setGroupeId] = useState<number>(0);
  const [idEmployee, setEmployeeId] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
 
  const addUser = () => {
    const userData = { name: name, email: email, password: password, profileId:profileId,groupeId:groupeId, idEmployee:idEmployee };
    axios.post('https://localhost:7074/api/users', userData)
      .then(response => {
        setUsers(users.concat(response.data));
        setName("");
        setEmail("");
        setPassword("");
        toast.success('added Successfully', { autoClose: 2000 });
      })
      .catch(error => {
        console.log(error);
        toast.error('error while adding', { autoClose: 2000 });

      });
  }
  const formik = useFormik({
    initialValues,
    validationSchema: UtilisateurSchema,
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
            <span className='card-label fw-bold fs-3 mb-1'>List des Utilisateurs</span>
          </h3>
          <div className='card-toolbar'>
            <Link
              className='btn btn-sm btn-light-primary' onClick={handleClick} to='' >
              <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
              Ajouter Utilisateur
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
                  <th className='ps-4 min-w-200px rounded-start'>Nom Utilisateur</th>
                  <th className='min-w-200px'>E-mail</th>
                  <th className='min-w-200px'>Profil</th>
                  <th className='min-w-200px text-end rounded-end'> Actions</th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>

                {users.map((user, index) => (
                  <UserRow key={index} user={user} />

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
        <Alert className="w-50" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          show={showAlert} onClose={() => setShowAlert(false)} dismissible  >
          <div className="card">
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Gestion des Utilisateurs</span>
              </h3>
            </div>
            <div className="card-body">
              <div className='row g-5 g-xxl-8'>
                <div className='col-xl-6'>
                  {/* begin::Form group UtilisateurName */}
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Nom d'Utilisateur</label>
                    <input
                      placeholder="Nom d'Utilisateur"
                      type='text'
                      autoComplete='off'
                      className="form-control"
                      value={name} onChange={e => setName(e.target.value)}
                    />
                    {formik.touched.UtilisateurName && formik.errors.UtilisateurName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          <span role='alert'>{formik.errors.UtilisateurName}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* end::Form group */}
                  {/* begin::Form group UtilisateurMail */}
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>E-mail</label>
                    <input
                      placeholder="mail"
                      type="email"
                      className="form-control"
                      value={email} onChange={e => setEmail(e.target.value)}
                    />
                    {formik.touched.UtilisateurMail && formik.errors.UtilisateurMail && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          <span role='alert'>{formik.errors.UtilisateurMail}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* end::Form group */}
                  {/* begin::Form group UtilisateurPW */}
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Mot de Passe</label>
                    <div className='input-group'>
                      <input
                        placeholder='********'
                        type='password'
                        autoComplete='off'
                        className="form-control"
                        value={password} onChange={e => setPassword(e.target.value)}
                      />
                      <button type='button' className='btn btn-outline-secondary' onClick={generateRandomPassword}>
                        Generate
                      </button>
                    </div>
                    {formik.touched.UtilisateurPW && formik.errors.UtilisateurPW && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          <span role='alert'>{formik.errors.UtilisateurPW}</span>
                        </div>
                      </div>
                    )}
                  </div>


                  {/* end::Form group */}
                </div>
                <div className='col-xl-6'>
                  {/* begin::Form group UtilisateurName */}
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Profile</label>
                    <select className='form-select bg-transparent' onChange={(e) => setProfileId(Number(e.target.value))}>
                      <option className='text-dark fw-bold text-hover-primary mb-1 fs-6' selected disabled hidden value=" "></option>

                      {profiles.map((profile, index) => (

                        <option className='text-black fw-bold text-hover-primary mb-1 fs-6' key={index} value={profile.profileId}>{profile.name}</option>

                      ))}
                    </select>
                  </div>
                  {/* end::Form group */}
                  {/* begin::Form group UtilisateurDescription */}
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Groupe</label>
                    <select className='form-select bg-transparent' onChange={(e) => setGroupeId(Number(e.target.value))}>
                      <option className='text-dark fw-bold text-hover-primary mb-1 fs-6' selected disabled hidden value=" "></option>

                      {groupes.map((groupe, index) => (

                        <option className='text-black fw-bold text-hover-primary mb-1 fs-6' key={index} value={groupe.idGroupe}>{groupe.name}</option>

                      ))}


                    </select>
                  </div>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Employee</label>
                    <select className='form-select bg-transparent' onChange={(e) => setEmployeeId(Number(e.target.value))}>
                      <option className='text-dark fw-bold text-hover-primary mb-1 fs-6' selected disabled hidden value=" "></option>
                      {employees.map((employee, index) => (

                        <option className='text-black fw-bold text-hover-primary mb-1 fs-6' key={index} value={employee.idEmployee}>{employee.nom}</option>

                      ))}
                    </select>
                  </div>
                </div>

              </div>
              <button

className='btn btn-sm btn-light-primary' type="submit" onClick={() => {
  addUser()
}}
>
<KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
Confirmer
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
            </div>
          </div>
        </Alert>
      </div>
    </>
  )
}