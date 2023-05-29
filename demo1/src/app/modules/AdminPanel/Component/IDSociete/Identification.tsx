/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import clsx from 'clsx';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup'
import { KTSVG } from '../../../../../_metronic/helpers';

const initialValues = {
  Rsociale: '',
  Activite: '',
  FormeJuridique: '',
  capitale: '',
  commantaire: '',
  Adresse: '',
  complement: '',
  codePostal: '',
  Ville: '',
  Region: '',
  Pays: '',
  Telephone: '',
  Telecopie: '',
  email: '',
  siteInternet: '',
  siret: '',
  idTVA: '',
  codeNAF: '',
  Retenue: '',
}
const IdentificationSchema = Yup.object().shape({
  Rsociale: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(35, 'Maximum 10 symbols')
    .required('raison sociale obligatoire'),
  Activite: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(15, 'Maximum 15 symbols')
    .required('activite obligatoire'),
  FormeJuridique: Yup.string()
    .min(5, 'Minimum 5 symbols')
    .max(20, 'Maximum 20 symbols')
    .required('forme juridique est obligatoire'),
  capitale: Yup.number()
    .required('capitale est oblgatoire'),
  commantaire: Yup.string()
    .min(5, 'Minimum 5 symbols'),
  Adresse: Yup.string()
    .min(6, 'minimum 4 symbols')
    .max(20, 'max 20 symbols')
    .required('adresse est obligatoire'),
  complement: Yup.string()
    .min(6, 'minimum 4 symbols')
    .max(20, 'max 20 symbols')
    .required('co,plement est obligatoire'),
  codePostal: Yup.string()
    .min(6, 'minimum 4 symbols')
    .max(20, 'max 20 symbols')
    .required('code Postal est obligatoire'),
  Ville: Yup.string()
    .min(6, 'minimum 4 symbols')
    .max(20, 'max 20 symbols')
    .required('ville est obligatoire'),
  Region: Yup.string()
    .min(6, 'minimum 4 symbols')
    .max(20, 'max 20 symbols')
    .required('Region est obligatoire'),
  Pays: Yup.string()
    .min(6, 'minimum 4 symbols')
    .max(20, 'max 20 symbols')
    .required('pays est obligatoire'),
  Telephone: Yup.string()
    .min(6, 'minimum 4 symbols')
    .max(20, 'max 20 symbols')
    .required('telephone est obligatoire'),
  Telecopie: Yup.string()
    .min(6, 'minimum 4 symbols')
    .max(20, 'max 20 symbols')
    .required('telecopie est obligatoire'),
  email: Yup.string()
    .email('Wrong email format')
    .min(6, 'minimum 4 symbols')
    .max(20, 'max 20 symbols')
    .required('email est obligatoire'),
  siteInternet: Yup.string()
    .min(6, 'minimum 4 symbols')
    .max(20, 'max 20 symbols'),

  siret: Yup.string()
    .min(6, 'minimum 4 symbols')
    .max(20, 'max 20 symbols')
    .required('siret est obligatoire'),
  idTVA: Yup.string()
    .min(6, 'minimum 4 symbols')
    .max(20, 'max 20 symbols')
    .required('identifiant TVa est obligatoire'),
  codeNAF: Yup.string()
    .min(6, 'minimum 4 symbols')
    .max(20, 'max 20 symbols')
    .required('Code NAF est obligatoire'),
  Retenue: Yup.number()
    .required('Rtenue est obligatoire'),




})
interface Banque {
  BanqueId: number;
}
export function Identification() {

  const [, setLoading] = useState(false)
  const formik = useFormik({
    initialValues,
    validationSchema: IdentificationSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true)
    },
  })
  const [banques, setBanques] = useState<{ banqueId: string; nomBanque: string }[]>([]);

  useEffect(() => {
    axios
      .get("https://localhost:7074/api/Banques")
      .then(response => {
        setBanques(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(banques);

  useEffect(() => {
    console.log(banques); // Log the banques array whenever it changes
  }, [banques]);


  const [IdentiteSocietes, setIdentiteSocietes] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7074/api/IdentiteSocietes')
      .then(response => {
        setIdentiteSocietes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const [idSociete]= useState<number>(0);
  const [raisonsociale, setraisonsociale] = useState<string>("");
  const [activite, setactivite] = useState<string>("");
  const [capitale, setcapitale] = useState<number>(0);
  const [formejuridique, setformejuridique] = useState<string>("");
  const [adresse, setadresse] = useState<string>("");
  const [complement, setcomplement] = useState<string>("");
  const [codepostale, setcodepostale] = useState<string>("");
  const [ville, setville] = useState<string>("");
  const [region, setregion] = useState<string>("");
  const [pays, setpays] = useState<string>("");
  const [telephone, settelephone] = useState<string>("");
  const [telecopie, settelecopie] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [siteinternet, setsiteinternet] = useState<string>("");
  const [siret, setsiret] = useState<string>("");
  const [idTVA, setIdTVA] = useState<string>("");
  const [codeNAF, setcodeNAF] = useState<string>("");
  const [retenue, setretenue] = useState<number>(0);
  const [banqueId, setBanqueId] = useState<number>(0);
  const addIdentiteSociete = () => {
    const IdentiteSocieteData = {
      raisonsociale: raisonsociale,
      activite: activite,
      capitale: capitale,
      formejuridique: formejuridique,
      adresse: adresse,
      complement: complement,
      codepostale: codepostale,
      ville: ville,
      region: region,
      pays: pays,
      telephone: telephone,
      telecopie: telecopie,
      email: email,
      siteinternet: siteinternet,
      siret: siret,
      idTVA: idTVA,
      codeNAF: codeNAF,
      retenue: retenue,
      banqueId: banqueId
    };

    axios.post('https://localhost:7074/api/IdentiteSocietes', IdentiteSocieteData)
      .then(response => {
        setIdentiteSocietes(IdentiteSocietes.concat(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  }
  const updateIdentiteSociete = (idSociete:number) => {
    const identiteSocieteData = {
      raisonsociale: raisonsociale,
      activite: activite,
      capitale: capitale,
      formejuridique: formejuridique,
      adresse: adresse,
      complement: complement,
      codepostale: codepostale,
      ville: ville,
      region: region,
      pays: pays,
      telephone: telephone,
      telecopie: telecopie,
      email: email,
      siteinternet: siteinternet,
      siret: siret,
      idTVA: idTVA,
      codeNAF: codeNAF,
      retenue: retenue,
      banqueId: banqueId // Include the selected BanqueId
    };
  
    axios
      .put(`https://localhost:7074/api/IdentiteSocietes/${idSociete}`, identiteSocieteData)
      .then(response => {
        // Handle the successful update
        console.log('IdentiteSociete updated:', response.data);
        // You can also update the IdentiteSocietes state if needed
      })
      .catch(error => {
        // Handle the error
        console.log(error);
      });
  };
  const handleUpdate = (idSociete:number) => {
    // Call the updateIdentiteSociete function with the idSociete
    updateIdentiteSociete(idSociete);
  };
  return (
    <>
      <div className='card '>
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Identification</span>
          </h3>
        </div>
        <div className="card-body">
          <div className='row'>
            <div className='col-xl-6'>
              {/* begin::Form group Rsociale */}
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Raison Sociale</label>
                <input
                  placeholder='Raison Sociale'
                  type='text'
                  className="form-control" value={raisonsociale} onChange={e => setraisonsociale(e.target.value)}
                />
                {formik.touched.Rsociale && formik.errors.Rsociale && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.Rsociale}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* end::Form group */}
            {/* begin::Form group Activite */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Activite</label>
                <input
                  placeholder='Activite'
                  type='text'
                  className="form-control" value={activite} onChange={e => setactivite(e.target.value)}
                />
                {formik.touched.Activite && formik.errors.Activite && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.Activite}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}

            </div>
            {/* begin::Form group FormeJuridique */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>FormemJuridique</label>
                <input
                  placeholder='Forme Juridique'
                  type='text'
                  className="form-control" value={formejuridique} onChange={e => setformejuridique(e.target.value)}
                />
                {formik.touched.FormeJuridique && formik.errors.FormeJuridique && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.FormeJuridique}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
            {/* begin::Form group capitale */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>capitale</label>
                <input
                  placeholder='capitale'
                  type='number'
                  className="form-control"
                  value={capitale}
                  onChange={(e) => setcapitale(Number(e.target.value))}

                />
                {formik.touched.capitale && formik.errors.capitale && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.capitale}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
            {/* begin::Form group commantaire */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>commantaire</label>
                <input
                  placeholder='commantaire'
                  type='text'
                  autoComplete='off'
                  {...formik.getFieldProps('commantaire')}
                  className={clsx(
                    'form-control bg-transparent',
                    {
                      'is-invalid': formik.touched.commantaire && formik.errors.commantaire,
                    },
                    {
                      'is-valid': formik.touched.commantaire && !formik.errors.commantaire,
                    }
                  )}
                />
                {formik.touched.commantaire && formik.errors.commantaire && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.commantaire}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className='card '>
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Coordonnees</span>
          </h3>
        </div>
        <div className="card-body">
          <div className='row'>
            <div className='col-xl-6'>
              {/* begin::Form group Adresse */}
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Adresse</label>
                <input
                  placeholder='Adresse'
                  type='text'
                  className="form-control"
                  value={adresse} onChange={e => setadresse(e.target.value)}
                />
                {formik.touched.Adresse && formik.errors.Adresse && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.Adresse}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* end::Form group */}
            {/* begin::Form group complement */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>complement</label>
                <input
                  placeholder='complement'
                  type='text'
                  className="form-control"
                  value={complement} onChange={e => setcomplement(e.target.value)}
                />
                {formik.touched.complement && formik.errors.complement && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.complement}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}

            </div>
            {/* begin::Form group codePostal */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Code Postal</label>
                <input
                  placeholder='Code Postal'
                  type='text'
                  className="form-control"
                  value={codepostale} onChange={e => setcodepostale(e.target.value)}
                />
                {formik.touched.codePostal && formik.errors.codePostal && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.codePostal}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
            {/* begin::Form group Ville */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Ville</label>
                <input
                  placeholder='Ville'
                  type='text'
                  className="form-control"
                  value={ville} onChange={e => setville(e.target.value)}
                />
                {formik.touched.Ville && formik.errors.Ville && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.Ville}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
            {/* begin::Form group Region */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Region</label>
                <input
                  placeholder='Region'
                  type='text'
                  className="form-control"
                  value={region} onChange={e => setregion(e.target.value)}
                />
                {formik.touched.Region && formik.errors.Region && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.Region}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
            {/* begin::Form group Pays */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Pays</label>
                <input
                  placeholder='Pays'
                  type='text'
                  className="form-control"
                  value={pays} onChange={e => setpays(e.target.value)}
                />
                {formik.touched.Pays && formik.errors.Pays && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.Pays}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
          </div>
        </div>
      </div><br></br>
      <div className='card '>
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Telecommunication</span>
          </h3>
        </div>
        <div className="card-body">
          <div className='row'>
            <div className='col-xl-6'>
              {/* begin::Form group Telephone */}
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Telephone</label>
                <input
                  placeholder='Telepone'
                  type='text'
                  className="form-control"
                  value={telephone} onChange={e => settelephone(e.target.value)}
                />
                {formik.touched.Telephone && formik.errors.Telephone && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.Telephone}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* end::Form group */}
            {/* begin::Form group Telecopie */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Telecopie</label>
                <input
                  placeholder='Telecopie'
                  type='text'
                  className="form-control"
                  value={telecopie} onChange={e => settelecopie(e.target.value)}
                />
                {formik.touched.Telecopie && formik.errors.Telecopie && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.Telecopie}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}

            </div>
            {/* begin::Form group email */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>E-mail</label>
                <input
                  placeholder='Forme Juridique'
                  type='text'
                  className="form-control"
                  value={email} onChange={e => setEmail(e.target.value)}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.email}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
            {/* begin::Form group siteInternet */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Site Internet</label>
                <input
                  placeholder='site Internet'
                  type='text'
                  className="form-control"
                  value={siteinternet} onChange={e => setsiteinternet(e.target.value)}
                />
                {formik.touched.siteInternet && formik.errors.siteInternet && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.siteInternet}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
          </div>
        </div>
      </div><br></br>
      <div className='card '>
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Immatriculation</span>
          </h3>
        </div>
        <div className="card-body">
          <div className='row'>
            <div className='col-xl-6'>
              {/* begin::Form group siret */}
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>siret</label>
                <input
                  placeholder='Siret'
                  type='text'
                  className="form-control"
                  value={siret} onChange={e => setsiret(e.target.value)}
                />
                {formik.touched.siret && formik.errors.siret && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.siret}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* end::Form group */}
            {/* begin::Form group idTVA */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Identifiant TVA</label>
                <input
                  placeholder='identifiant TVA'
                  type='text'
                  className="form-control"
                  value={idTVA} onChange={e => setIdTVA(e.target.value)}
                />
                {formik.touched.idTVA && formik.errors.idTVA && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.idTVA}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}

            </div>
            {/* begin::Form group codeNAF */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Code NAF</label>
                <input
                  placeholder='code NAF'
                  type='text'
                  className="form-control"
                  value={codeNAF} onChange={e => setcodeNAF(e.target.value)}
                />
                {formik.touched.codeNAF && formik.errors.codeNAF && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.codeNAF}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
            {/* begin::Form group Retenue */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Retenue</label>
                <input
                  placeholder='Retenue'
                  type='number'
                  autoComplete='off'
                  className="form-control"
                  value={retenue} onChange={e => setretenue(Number(e.target.value))}
                />
                {formik.touched.Retenue && formik.errors.Retenue && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.Retenue}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
          </div>
        </div>
      </div><br></br>
      <div className='card '>
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Compte Bancaire par defaut</span>
          </h3>
        </div>
        <div className="card-body">
          <div className='row'>
            <div className='col-xl-6'>
              {/* begin::Form group Banque */}
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Banque</label>
                <select className='form-select bg-transparent' onChange={(e) => setBanqueId(Number(e.target.value))}>
                  <option className='text-dark fw-bold text-hover-primary mb-1 fs-6' selected disabled hidden value=" "></option>
                  {banques.map((banque, index) => (

                    <option className='text-dark fw-bold text-hover-primary mb-1 fs-6' key={index} value={banque.banqueId}>{banque.nomBanque}</option>

                  ))}
                </select>
              </div>
            </div>
            {/* end::Form group */}
            {/* begin::Form group cmptBancaire */}
            <div className='col-xl-6'>

              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>compte Bancaire</label>
                <select className='custom-select custom-select-lg'>

                </select>
              </div>
              {/* end::Form group */}
            </div>
          </div>
        </div>
      </div><br></br>
      <button

        className='btn btn-sm btn-light-primary' type="submit" onClick={() => {
          addIdentiteSociete()
        }}
      >
        <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
        Confirmer
      </button>
      <button

        className='btn btn-sm btn-light-secondary' type="submit" onClick={() =>handleUpdate(idSociete)}
      >
        <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
        Update
      </button>
    </>
  )
}
