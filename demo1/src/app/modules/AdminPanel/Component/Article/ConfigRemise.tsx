import { useFormik } from "formik"
import { useState } from "react"
import * as Yup from 'yup'
import { KTSVG } from "../../../../../_metronic/helpers"

const initialValues={

}
const RemiseSchema = Yup.object().shape({
})
const options = [
  { id: 1, name: "Option 1", value: "option1" },
  { id: 2, name: "Option 2", value: "option2" },
  { id: 3, name: "Option 3", value: "option3" },
  { id: 4, name: "Option 4", value: "option4" },
];

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};










export function ConfigRemise(){
    const [loading, setLoading] = useState(false)
    const formik = useFormik({
      initialValues,
      validationSchema: RemiseSchema,
      onSubmit: async (values, { setStatus, setSubmitting }) => {
        setLoading(true)
      },
    })

    
    return (
        <>
         <div className="card">
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Parametrage remise</span>
              </h3>
            </div>
            <div className="card-body">
             
                <div className='card-header border-0 pt-5'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Choix Remise</span>
                  </h3>
                </div>
                  <div className='row'>
                    <div className='col-xl-8'>
                      {/* begin::Form group Choix Remise */}
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>Choix Remise</label>
                        <select className='form-select bg-transparent'  >
                        <option selected disabled hidden value=""></option>
                            <option>cumulée</option>
                            <option>Cascade</option>      
                            </select>                 
                      </div>
                    </div>
                    {/* end::Form group */}
                    
               
              </div>
              
                <div className='card-header border-0 pt-5'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Remise Par Prix</span>
                  </h3>
                </div>
              
                  <div className='row'>
                    <div className='col-xl-8'>
                      {/* begin::Form group CodeISO */}
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>Article de remise</label>
                        <select className='form-select bg-transparent'  >
                        <option selected disabled hidden value=""></option>
                            <option>1</option>
                            <option>2</option>      
                            </select>  
                      </div>
                    </div>
                    {/* end::Form group */}
                  
              </div>
             
                <div className='card-header border-0 pt-5'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Avoir</span>
                  </h3>
                </div>
              
                  <div className='row'>
                    <div className='col-xl-8'>
                      {/* begin::Form group Avoir */}
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>Article d'avoir</label>
                        <select className='form-select bg-transparent'  >
                        <option selected disabled hidden value=""></option>
                            <option>1</option>
                            <option>2</option>      
                            </select>  
                      </div>
                    </div>
                    {/* end::Form group */}
                  </div>
               
              
                <div className='card-header border-0 pt-5'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Timbre</span>
                  </h3>
                </div>
              
                  <div className='row'>
                    <div className='col-xl-8'>
                      {/* begin::Form group cPeriode */}
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>Article de Timbre </label>
                        <select className='form-select bg-transparent'  >
                        <option selected disabled hidden value=""></option>
                            <option>1</option>
                            <option>2</option>      
                            </select>  
                      </div>
                    </div>
                    {/* end::Form group */}
              </div>
             
                <div className='card-header border-0 pt-5'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Avoir</span>
                  </h3>
                </div>
               
                  <div className='row'>
                    <div className='col-xl-8'>
                      {/* begin::Form group Avoir */}
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>Article d'avoir</label>
                        <select className='form-select bg-transparent'  >
                        <option selected disabled hidden value=""></option>
                            <option>1</option>
                            <option>2</option>      
                            </select>  
                      </div>
                    </div>
                    {/* end::Form group */}
                  </div>
           
                <div className='card-header border-0 pt-5'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Timbre</span>
                  </h3>
                </div>
               
                  <div className='row'>
                    <div className='col-xl-8'>
                      {/* begin::Form group cPeriode */}
                      <div className='fv-row mb-8'>
                        <label className='form-label fw-bolder text-dark fs-6'>Article de Timbre </label>
                        <select className='form-select bg-transparent'  >
                        <option selected disabled hidden value=""></option>
                            <option>1</option>
                            <option>2</option>      
                            </select>  
                      </div>
                    </div>
                    {/* end::Form group */}
                  </div>
              
              <a
                href='#'
                className='btn btn-sm btn-light-primary'
              >
                <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                Valider
              </a>
              <a
                    href='#'
                    className='btn btn-sm btn-light-danger'
                    style={{ marginLeft: '10px' }}
                  >
                    <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                    Anuuler
                  </a>
            </div>
          </div>
        </>
    )
}