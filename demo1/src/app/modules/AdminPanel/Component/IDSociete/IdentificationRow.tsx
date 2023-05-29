import { useState, useEffect } from "react";
import axios from "axios";


interface Identification {
  IdSociete: unknown;
  // Add other properties here
  raisonsociale: string;
  activite: string;
  capitale: number;
  formejuridique: string;
  adresse: string;
  complement: string;
  codepostale: string;
  ville: string;
  region: string;
  pays: string;
  telephone: string;
  telecopie: string;
  Email: string;
  siteinternet: string;
  siret: string;
  IdTVA: string;
  codeNAF: string;
  retenue: number;
  BanqueId: number;
}

const IdentificationRow = (props: { identification: Identification }) => {
  const [editable, setEditable] = useState(false);
  const [values, setValues] = useState<Identification>({
    IdSociete: props.identification.IdSociete,
    raisonsociale: props.identification.raisonsociale,
    activite: props.identification.activite,
    capitale: props.identification.capitale,
    formejuridique: props.identification.formejuridique,
    adresse: props.identification.adresse,
    complement: props.identification.complement,
    codepostale: props.identification.codepostale,
    ville: props.identification.ville,
    region: props.identification.region,
    pays: props.identification.pays,
    telephone: props.identification.telephone,
    telecopie: props.identification.telecopie,
    Email: props.identification.Email,
    siteinternet: props.identification.siteinternet,
    siret: props.identification.siret,
    IdTVA: props.identification.IdTVA,
    codeNAF: props.identification.codeNAF,
    retenue: props.identification.retenue,
    BanqueId: props.identification.BanqueId
  });
  const [Banques, setBanques]=useState([]);
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


  useEffect(() => {
    axios.get(`https://localhost:7074/api/IdentiteSocietes/${props.identification.IdSociete}`)
      .then(res => {
        setValues(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.identification.IdSociete]);
  
  return (
    <>
    <tr>
      <td>{props.identification.activite}</td>
      </tr></>
    
  )
}
export default IdentificationRow;