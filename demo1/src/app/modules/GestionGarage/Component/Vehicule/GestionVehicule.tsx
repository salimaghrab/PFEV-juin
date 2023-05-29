import { SetStateAction, useEffect, useRef, useState } from "react";
import { KTSVG } from "../../../../../_metronic/helpers";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import axios from "axios";
import { VehiculeRow } from "../../Fetch/VehiculeRow";
import { toast } from "react-toastify";

export function GestionVehicule() {
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        setSelectedFiles(files);
    };

    const handleUploadClick = () => {
        if (selectedFiles) {
            // upload the selected files here
            console.log(selectedFiles);
        }
    };
    {/**Alert   */ }

    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };
    {/**color  */ }
    const [color, setColor] = useState('#000000'); // initial color is black

 const handleColorChange=(e: { target: { value: SetStateAction<string>; }; }) => {
        const selectedColor = e.target.value;
  setColor(selectedColor);
  setColorInt(selectedColor);
    }

    const [color1, setColor1] = useState('#000000');
    const handleColorChange1=(e: { target: { value: SetStateAction<string>; }; }) => {
        const selectedColor1 = e.target.value;
        setColor1(selectedColor1);
        setColorEx(selectedColor1);
    }
    {/** View Button  */ }
    const [activeView, setActiveView] = useState('CarteGrise');

    const handleCarteGriseClick = () => {
        setActiveView('CarteGrise');
    };


    const handleDiversClick = () => {
        setActiveView('Divers');
    };

    const handleDocumentClick = () => {
        setActiveView('Document');
    };
    {/**Date input  */ }
    const [selectedDate0, setSelectedDate0] = useState('');

    const handleDateChange0 = (e: { target: { value: SetStateAction<string>; }; }) => {
            const selectedDate0 = e.target.value;
        setSelectedDate0(selectedDate0);
        setDateCarteGrise(selectedDate0);
    };
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (e: { target: { value: SetStateAction<string>; }; }) => {
            const selectedDate = e.target.value;
        setSelectedDate(selectedDate);
        setDateMEC(selectedDate);
    };
    const [selectedDate1, setSelectedDate1] = useState("");

    const handleDateChange1 = (e: { target: { value: SetStateAction<string>; }; }) => {
        const selectedDate1 = e.target.value;
        setSelectedDate1(e.target.value);
        setGarantieDebut(selectedDate1);


        setDateMEC(selectedDate);
    };
    const [selectedDate2, setSelectedDate2] = useState("");

    const handleDateChange2 = (e: { target: { value: SetStateAction<string>; }; }) => {
        const selectedDate2 = e.target.value;
        setSelectedDate2(e.target.value);
        setGarantieFin(selectedDate2);
    };
    const [selectedDate3, setSelectedDate3] = useState("");

    const handleDateChange3 = (e: { target: { value: SetStateAction<string>; }; }) => {
        const selectedDate3 = e.target.value;
        setSelectedDate3(e.target.value);
        setRelance(selectedDate3);
    };
    const [selectedDate4, setSelectedDate4] = useState("");

    const handleDateChange4 = (e: { target: { value: SetStateAction<string>; }; }) => {
        const selectedDate4= e.target.value;
        setSelectedDate4(selectedDate4);
        setDateProchaineT(selectedDate4);
    };
    const [selectedDate5, setSelectedDate5] = useState("");

    const handleDateChange5 = (e: { target: { value: SetStateAction<string>; }; }) => {
        const selectedDate5= e.target.value;
        setSelectedDate5(selectedDate5);
        setDateProchaineR(selectedDate5);
    };
    const [selectedDate6, setSelectedDate6] = useState("");

    const handleDateChange6 = (e: { target: { value: SetStateAction<string>; }; }) => {
        const selectedDate6= e.target.value;
        setSelectedDate6(selectedDate6);
        setDateProchaineV(selectedDate6);
    };
    const [selectedDate7, setSelectedDate7] = useState("");

    const handleDateChange7 = (e: { target: { value: SetStateAction<string>; }; }) => {
        const selectedDate7= e.target.value;
        setSelectedDate7(selectedDate7);
        setDateProchaineInt(selectedDate7);
    };
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };



    const [vehicules, setvehicules] = useState([]);
    const [vehiculeImmat, setVehiculeImmat] = useState<string>("");
    const [modele, setModele] = useState<string>("");
    const [marque, setMarque] = useState<string>("");
    const [clientId, setClientId] = useState<number>(0);
    const [version, setVersion] = useState<string>("");
    const [numCarteGrise, setNumCarteGrise] = useState<string>("");
    const [poidsV, setPoidsV] = useState<number>(0);
    const [poid, setPoid] = useState<number>(0);
    const [dateCarteGrise, setDateCarteGrise] = useState<string>("");
    const [numChaise, setNumChaise] = useState<number>(0);
    const [dateMEC, setDateMEC] = useState<string>("");
    const [numMoteur, setNumMoteur] = useState<string>("");
    const [genre, setGenre] = useState<string>("");
    const [kilomettrage, setKilomettrage] = useState<number>(0);
    const [numrSerie, setNumrSerie] = useState<string>("");
    const [kmAn, setKmAn] = useState<number>(0);
    const [puissanceR, setPuissanceR] = useState<number>(0);
    const [puissanceF, setPuissanceF] = useState<number>(0);
    const [anneModel, setAnneModel] = useState<number>(0);
    const [places, setPlaces] = useState<number>(0);
    const [permierMain, setPremierMain] = useState<boolean>(true);
    const [premierMainValue, setPremierMainValue] = useState<boolean>(false);
    const [categorie, setCategorie] = useState<string>("");
    const [assurance, setAssurance] = useState<string>("");
    const [typeAssurance, setTypeAssurance] = useState<string>("");
    const [dureeAssurance, setDureeAssurance] = useState<string>("");
    const [carrosserie, setCarrosserie] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [colorEx, setColorEx] = useState<string>("");
    const [colorInt, setColorInt] = useState<string>("");
    const [codePint, setCodePint] = useState<string>("");
    const [garantieDebut, setGarantieDebut] = useState<string>("");
    const [garantieFin, setGarantieFin] = useState<string>("");
    const [relance, setRelance] = useState<string>("");
    const [garantieType, setGarantieType] = useState<string>("");
    const [garnantieSuite, setGarnantieSuite] = useState<string>("");
    const [kmGarantie, setKmGarantie] = useState<number>(0);
    const [dateProchaineT, setDateProchaineT] = useState<string>("");
    const [dateProchaineR, setDateProchaineR] = useState<string>("");
    const [dateProchaineV, setDateProchaineV] = useState<string>("");
    const [dateProchaineInt, setDateProchaineInt] = useState<string>("");
    
    useEffect(() => {
      axios.get('https://localhost:7074/api/vehicules')
        .then(response => {
          setvehicules(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    const [codeProfile, setCodeProfile] = useState<string>("");
  const [name, setname] = useState<string>("");
  const [description, setdescription] = useState<string>("");
  
const addVehicule = () => {
    const vehiculeData = {
      vehiculeImmat: vehiculeImmat,
      modele: modele,
      marque: marque,
      clientId: clientId,
      version: version,
      numCarteGrise: numCarteGrise,
      poidsV: poidsV,
      poid: poid,
      dateCarteGrise: dateCarteGrise,
      numChaise: numChaise,
      dateMEC: dateMEC,
      numMoteur: numMoteur,
      genre: genre,
      kilomettrage: kilomettrage,
      numrSerie: numrSerie,
      kmAn: kmAn,
      puissanceR: puissanceR,
      puissanceF: puissanceF,
      anneModel: anneModel,
      places: places,
      permierMain: permierMain,
      premierMainValue: premierMainValue,
      categorie: categorie,
      assurance: assurance,
      typeAssurance: typeAssurance,
      dureeAssurance: dureeAssurance,
      carrosserie: carrosserie,
      type: type,
      colorEx: colorEx,
      colorInt: colorInt,
      codePint: codePint,
      garantieDebut: garantieDebut,
      garantieFin: garantieFin,
      relance: relance,
      garantieType: garantieType,
      garnantieSuite: garnantieSuite,
      kmGarantie: kmGarantie,
      dateProchaineT: dateProchaineT,
      dateProchaineR: dateProchaineR,
      dateProchaineV: dateProchaineV,
      dateProchaineInt: dateProchaineInt
    };
    axios.post('https://localhost:7074/api/vehicules', vehiculeData)
      .then(response => {
        setvehicules(vehicules.concat(response.data));
        toast.success('Success!', { autoClose: 2000 });
      })
      .catch(error => {
        console.log(error);
        toast.error('error while adding ',{autoClose:2000})
      });
      
  }
    return (
        <>

            <div className='card'>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5'>
                    <div className='card-toolbar'>
                        <Link
                            style={{ marginLeft: 1050 }}
                            className='btn btn-sm btn-light-primary' onClick={handleClick} to='' >
                            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                            Ajouter
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
                                    <th className='ps-4 min-w-150 rounded-start'>Code Interne</th>
                                    <th className='min-w-150'>Immatriculation</th>
                                    <th className='min-w-150'>Kilometrage</th>
                                    <th className='min-w-150'>annee modele</th>
                                    <th className='min-w-150'>prochaine Intervention</th>
                                    <th className='min-w-150'>Date Carte</th>
                                    <th className='min-w-150 text-end rounded-end'> Actions</th>
                                </tr>
                            </thead>
                            {/* end::Table head */}
                            {/* begin::Table body */}
                            <tbody>
                            {vehicules.map((vehicule, index) => (
                  <VehiculeRow key={index} vehicule={vehicule} />
                  
                ))}  

                            </tbody>
                            {/* end::Table body */}
                        </table>
                        {/* end::Table */}
                    </div>
                    {/* end::Table container */}
                </div>
                {/* end::Body */}
            </div>
            <div className="d-flex justify-content-center align-items-center fixed-top" style={{ zIndex: 999 }}>
                <Alert className="w-50" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    show={showAlert} onClose={() => setShowAlert(false)} dismissible  >
                    <div className="card bg-light">
                        {step === 1 && (
                            <div className="card" >
                                <div className='card-header border-0 pt-5'>
                                    <h3 className='card-title align-items-start flex-column'>
                                        <span className='card-label fw-bold fs-3 mb-1'>Informations Vehicule</span>
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className='row'>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Code Interne </label>
                                                <input
                                                    readOnly
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    className='form-control bg-transparent'

                                                />

                                            </div>
                                        </div>
                                        <div className='col-xl-3'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Immatriculation </label>
                                                <input
                                                    placeholder=''
                                                    type='text'
                                                    
                                                    className="form-control" value={vehiculeImmat} onChange={e => setVehiculeImmat(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Code Client </label>
                                                <select className='form-select bg-transparent'>
                                                    <option selected disabled hidden value=""></option>
                                                    <option>fgj</option>
                                                    <option> fjf</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Modele </label>
                                                <input
                                                    readOnly
                                                    placeholder=''
                                                    type='text'
                                                    className="form-control" value={modele} onChange={e => setModele(e.target.value)}

                                                />

                                            </div>

                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Marque </label>
                                                <input
                                                    readOnly
                                                    placeholder=''
                                                    type='text'
                                                    
                                                    className="form-control" value={marque} onChange={e => setMarque(e.target.value)}

                                                />

                                            </div>
                                        </div>
                                        <div className='col-xl-6'>
                                            <div className='fv-row mb-8'>
                                                <label className='form-label fw-bolder text-dark fs-6'>Version </label>
                                                <input
                                                    readOnly
                                                    placeholder=''
                                                    type='text'
                                                    autoComplete='off'
                                                    className="form-control" value={version} onChange={e => setVersion(e.target.value)}

                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div className="card">
                                <div className="card-body">
                                <div className="overflow-auto" style={{ maxHeight: "400px" }}>
                                    <div >
                                        <button className='btn btn-light-primary' onClick={handleCarteGriseClick} >Carte Grise</button>
                                        <button className='btn  btn-light-primary' style={{ marginLeft: '10px' }} onClick={handleDiversClick}>Divers</button>
                                        <button className='btn  btn-light-primary' style={{ marginLeft: '10px' }} onClick={handleDocumentClick}>Document</button>
                                    </div>
                                    {activeView === 'CarteGrise' && (
                                        <div>

                                            <div className="card-body">
                                                <div className='row'>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>N Carte Grise </label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className="form-control" value={numCarteGrise} onChange={e => setNumCarteGrise(e.target.value)}

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Poids a Vide </label>
                                                            <input
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className="form-control" value={poidsV} onChange={(e) => setPoidsV(Number(e.target.value))}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Date Carte Grise </label>
                                                            <input
                                                                type="date" id="date" value={selectedDate0} onChange={handleDateChange0}
                                                                className='form-control bg-transparent'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>N chaissis </label>
                                                            <input
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                onChange={(e) => setNumChaise(Number(e.target.value))}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Date de M.E.C </label>
                                                            <input
                                                                type="date" id="date" value={selectedDate} onChange={handleDateChange}
                                                                className='form-control bg-transparent'
                                                            />

                                                        </div>

                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>N Moteur </label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                value={numMoteur} onChange={e => setNumMoteur(e.target.value)}

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Genre/Type </label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                value={genre} onChange={e => setGenre(e.target.value)}

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Kilometrage  </label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                onChange={(e) => setKilomettrage(Number(e.target.value))}

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>N Serie </label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                value={numrSerie}
                                                                onChange={(e) => setNumrSerie(e.target.value)}

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Km/An </label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                onChange={(e) => setKmAn(Number(e.target.value))}

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Energie</label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Puissance reelle </label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                onChange={(e) => setPuissanceR(Number(e.target.value))}
                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Puissance Fisc</label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                onChange={(e) => setPuissanceF(Number(e.target.value))}

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Annee Modele</label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                value={anneModel}
                                                                onChange={(e) => setAnneModel(Number(e.target.value))}

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Place</label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                onChange={(e) => setPlaces(Number(e.target.value))}
                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Premiere main </label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                onChange={(e) => setPremierMain(Boolean(e.target.value))}
                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Poids</label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                onChange={(e) => setPoid(Number(e.target.value))}

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Categorie </label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                value={categorie}
                                                                onChange={(e) => setCategorie(e.target.value)}

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Assurance</label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                value={assurance}
                                                                onChange={(e) => setAssurance(e.target.value)}

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Type Assurance </label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                value={typeAssurance}
                                                                onChange={(e) => setTypeAssurance(e.target.value)}

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Duree Assurance</label>

                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                value={dureeAssurance}
                                                                onChange={(e) => setDureeAssurance(e.target.value)}

                                                            />

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {activeView === 'Divers' && (
                                        <div>
                                            <div className="card-body">
                                                <div className='row'>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Carrosserie</label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                value={carrosserie}
                                                                onChange={(e) => setCarrosserie(e.target.value)}

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Type </label>
                                                            <input
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                value={type}
                                                                onChange={(e) => setType(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Coleur Exterieur </label>
                                                            <input
                                                                type="color"  value={color1}
                                                                onChange={handleColorChange1}
                                                                className='form-control bg-transparent'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Coleur Interieur </label>
                                                            <input
                                                                type="color" value={color} onChange={handleColorChange}
                                                                className='form-control bg-transparent'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Code Peinture </label>
                                                            <input
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                value={codePint}
                                                                onChange={(e) => setCodePint(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div >
                                                        <h3 className='card-title align-items-start flex-column'>
                                                            <span className='card-label fw-bold fs-3 mb-1'>Garantier</span>
                                                        </h3>
                                                    </div>
                                                    <br></br>
                                                    <div className='col-xl-3'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Garantie de  </label>
                                                            <input
                                                                type="date" id="date" value={selectedDate1} onChange={handleDateChange1}
                                                                className='form-control bg-transparent'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-3'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>a  </label>
                                                            <input
                                                                type="date" id="date" value={selectedDate2} onChange={handleDateChange2}
                                                                className='form-control bg-transparent'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Ralence le </label>
                                                            <input
                                                                type="date" id="date" value={selectedDate3} onChange={handleDateChange3}
                                                                className='form-control bg-transparent'
                                                            />

                                                        </div>

                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Type Garantie </label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                value={garantieType}
                                                                onChange={(e) => setGarantieType(e.target.value)}

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>suite garantie</label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                value={garnantieSuite}
                                                                onChange={(e) => setGarnantieSuite(e.target.value)}

                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Km garantis </label>
                                                            <input
                                                                readOnly
                                                                placeholder=''
                                                                type='text'
                                                                autoComplete='off'
                                                                className='form-control bg-transparent'
                                                                onChange={(e) => setKmGarantie(Number(e.target.value))}

                                                            />

                                                        </div>
                                                    </div>
                                                    <div >
                                                        <h3 className='card-title align-items-start flex-column'>
                                                            <span className='card-label fw-bold fs-3 mb-1'>Intervention</span>
                                                        </h3>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Date Prochain Controle Technique </label>
                                                            <input
                                                                type="date" id="date" value={selectedDate4} onChange={handleDateChange4}
                                                                className='form-control bg-transparent'
                                                            />


                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Date Prochain Revision</label>
                                                            <input
                                                                type="date" id="date" value={selectedDate5} onChange={handleDateChange5}
                                                                className='form-control bg-transparent'
                                                            />


                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Date Prochain Vidange</label>
                                                            <input
                                                                type="date" id="date" value={selectedDate6} onChange={handleDateChange6}
                                                                className='form-control bg-transparent'
                                                            />

                                                        </div>
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='fv-row mb-8'>
                                                            <label className='form-label fw-bolder text-dark fs-6'>Date Derniere Intervention </label>
                                                            <input
                                                                readOnly
                                                                type="date" id="date" value={selectedDate7} onChange={handleDateChange7}
                                                                className='form-control bg-transparent'
                                                            />


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {activeView === 'Document' && (
                                        <div>
                                            <div className="card-body">
                                                <div>
                                                    <input className='btn btn-light-primary' type="file" onChange={handleInputChange} />
                                                    <button style={{ marginLeft: 10 }} className='btn btn-light-primary' onClick={handleUploadClick}>Upload</button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    </div>
                                </div>
                            </div>
                            )}
                             <div className='card-toolbar'>
                        {step > 1 && (
                            <Link
                                className='btn btn-sm btn-light-secondary' to='' onClick={handleBack} >

                                back
                            </Link>
                        )}
                        {step < 2 && (
                            <Link
                                className='btn btn-sm btn-light-primary' to='' onClick={handleNext}>
                                Next
                            </Link>
                        )}
                        {step === 2 && (
                            <Link
                                className='btn btn-sm btn-light-success' to='' onClick={() => setShowAlert(false)}>
                                Done
                            </Link>
                        )}
                    </div>
                    </div>

                </Alert>
            </div>
        </>
    )
}