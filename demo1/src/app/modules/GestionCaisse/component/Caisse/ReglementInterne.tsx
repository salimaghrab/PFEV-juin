import { SetStateAction, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { KTSVG } from '../../../../../_metronic/helpers';
export function ReglementInterne() {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedDate(e.target.value);
  };

  const [selectedDate1, setSelectedDate1] = useState("");

  const handleDateChange1 = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedDate1(e.target.value);
  };
  const [selectedDate2, setSelectedDate2] = useState("");

  const handleDateChange2 = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedDate2(e.target.value);
  };

  const [showModal, setShowModal] = useState(false);
  const [TypeCaisse, setTypeCaisse] = useState('');
  const [showEntreeModal, setShowEntreeModal] = useState(false);
  const [showSortieModal, setShowSortieModal] = useState(false);
  const [showTransfertModal, setShowTransfertModal] = useState(false);


  const handleRadioChange = (event: { target: { value: string; }; }) => {
    setTypeCaisse(event.target.value);
    if (event.target.value === 'Entree') {
      setShowEntreeModal(true);
    } else if (event.target.value === 'Sortie') {
      setShowSortieModal(true);
    }
    else {
      setShowTransfertModal(true);
    }
  }

  const handleEntreeClose = () => setShowEntreeModal(false);
  const handleSortieClose = () => setShowSortieModal(false);
  const handleTransfertClose = () => setShowTransfertModal(false);
  const handleModalClose = () => setShowModal(false);

  const handleAddCash = () => {
    setShowModal(true);
  }

  return (
    <>
      <div className='card'>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <div className='col-xl-3'>
            <div className='fv-row mb-8'>
              <label className='form-label fw-bolder text-dark fs-6'>Du</label>
              <input
                type="date" id="date" value={selectedDate} onChange={handleDateChange}
                className='form-control bg-transparent'

              />

            </div>
          </div>
          <div className='col-xl-3'>
            <div className='fv-row mb-8'>
              <label className='form-label fw-bolder text-dark fs-6'>a </label>
              <input
                type="date" id="date" value={selectedDate1} onChange={handleDateChange1}
                className='form-control bg-transparent'

              />

            </div>
          </div>
          <div className='card-toolbar'>
            {/* begin::Search */}
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="search ..."

              />
            </div>
          </div>
          <div className='card-toolbar'>
            {/* begin::Search */}
            <div className="input-group mb-3">

              <div className="input-group-append">
                <button className="btn  btn-light-primary" type="button">
                  <FaSearch />
                </button>
              </div>
              <div className="input-group-append">

                <Link
                  className='btn  btn-light-primary' to=''
                  onClick={handleAddCash}
                  style={{ marginLeft: '10px' }}>
                  <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-4' />
                </Link>

              </div>
            </div>
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
                  <th className='ps-4 min-w-150 rounded-start'>N Reglement </th>
                  <th className='min-w-150'>Date </th>
                  <th className='min-w-150'>Entree</th>
                  <th className='min-w-150'>Sortie</th>
                  <th className='min-w-150'>Libelle</th>
                  <th className='min-w-150'>Nature Reglement</th>
                  <th className='min-w-150'>Mode Reglement</th>
                  <th className='min-w-150 text-end rounded-end'> Actions</th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-50px me-5'>

                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                          Avoir
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-50px me-5'>

                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                          Avoir
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-50px me-5'>

                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                          Avoir
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-50px me-5'>

                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                          Avoir
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-50px me-5'>

                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                          Avoir
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-50px me-5'>

                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                          Avoir
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-50px me-5'>

                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                          Avoir
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className='text-end'>

                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </a>
                    <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                      <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                    </a>
                  </td>
                </tr>

              </tbody>
              {/* end::Table body */}
            </table>
            {/* end::Table */}
          </div>
          {/* end::Table container */}
        </div>
        {/* end::Body */}
      </div>


      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Quel Type de reglement voulez-vous ajouter?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Check
              type="radio"
              label="Entree Caisse"
              name="TypeCaisse"
              value="Entree"
              checked={TypeCaisse === 'Entree'}
              onChange={handleRadioChange}
            />
            <Form.Check
              style={{ marginTop: 7 }}
              type="radio"
              label="Sortie Caisse"
              name="TypeCaisse"
              value="Sortie"
              checked={TypeCaisse === 'Sortie'}
              onChange={handleRadioChange}
            />
            <Form.Check
              style={{ marginTop: 7 }}
              type="radio"
              label="Transfert Caisse"
              name="TypeCaisse"
              value="Transfert"
              checked={TypeCaisse === 'Transfert'}
              onChange={handleRadioChange}
            />
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={showEntreeModal} onHide={handleEntreeClose}>
        <Modal.Header closeButton>
          <Modal.Title>Entree Caisse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Code for input cash form */}

          <div className='card'>
            {/* begin::Header */}
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Informations</span>
              </h3>
            </div>
            {/* end::Header */}
            {/* begin::Body */}
            <div className='card-body py-3'>
              <div className='row'>
                <div className='col-xl-6'>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>N document</label>
                    <input
                      placeholder=''
                      type='text'
                      autoComplete='off'
                      className='form-control bg-transparent'

                    />

                  </div>
                </div>
                <div className='col-xl-6'>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'></label>
                    <input
                      style={{ marginTop: 8 }}
                      placeholder=''
                      type='text'
                      autoComplete='off'
                      className='form-control bg-transparent'

                    />

                  </div>
                </div>
                <div className='col-xl-12'>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Date</label>
                    <input
                      type="date" id="date" value={selectedDate2} onChange={handleDateChange2}
                      className='form-control bg-transparent'
                    />
                  </div>
                </div>
                <div className='col-xl-6'>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Montant</label>
                    <input
                      placeholder=''
                      type='number'
                      autoComplete='off'
                      className='form-control bg-transparent'

                    />
                  </div>
                </div>
                <div className='col-xl-6'>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Mode Reglement</label>
                    <input
                      readOnly
                      placeholder='Espece'
                      type='text'
                      autoComplete='off'
                      className='form-control bg-transparent'

                    />

                  </div>
                </div>
                <div className='col-xl-12'>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Libelle</label>
                    <input
                      type="text"
                      className='form-control bg-transparent'
                    />
                  </div>
                </div>
                <div className='col'>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Commentaire</label>
                    <input
                      style={{ height: 70 }}
                      type="text"
                      className='form-control bg-transparent'
                    />
                  </div>
                </div>


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
                onClick={() => setShowEntreeModal(false)}
              >
                <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                Anuuler
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showSortieModal} onHide={handleSortieClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sortie Caisse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Code for output cash form */}
          <div className='card'>
            {/* begin::Header */}
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Informations</span>
              </h3>
            </div>
            {/* end::Header */}
            {/* begin::Body */}
            <div className='card-body py-3'>
              <div className='row'>
                <div className='col-xl-6'>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>N document</label>
                    <input
                      placeholder=''
                      type='text'
                      autoComplete='off'
                      className='form-control bg-transparent'

                    />

                  </div>
                </div>
                <div className='col-xl-6'>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'></label>
                    <input
                      style={{ marginTop: 8 }}
                      placeholder=''
                      type='text'
                      autoComplete='off'
                      className='form-control bg-transparent'

                    />

                  </div>
                </div>
                <div className='col-xl-12'>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Date</label>
                    <input
                      type="date" id="date" value={selectedDate2} onChange={handleDateChange2}
                      className='form-control bg-transparent'
                    />
                  </div>
                </div>
                <div className='col-xl-6'>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Montant</label>
                    <input
                      placeholder=''
                      type='number'
                      autoComplete='off'
                      className='form-control bg-transparent'

                    />
                  </div>
                </div>
                <div className='col-xl-6'>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Mode Reglement</label>
                    <input
                      readOnly
                      placeholder='Espece'
                      type='text'
                      autoComplete='off'
                      className='form-control bg-transparent'

                    />

                  </div>
                </div>
                <div className='col-xl-12'>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Libelle</label>
                    <input
                      type="text"
                      className='form-control bg-transparent'
                    />
                  </div>
                </div>
                <div className='col'>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Commentaire</label>
                    <input
                      style={{ height: 70 }}
                      type="text"
                      className='form-control bg-transparent'
                    />
                  </div>
                </div>


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
                onClick={() => setShowSortieModal(false)}
              >
                <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                Anuuler
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showTransfertModal} onHide={handleTransfertClose}>
        <Modal.Header closeButton>
          <Modal.Title>Transfert Caisse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Code for input cash form */}
          <div className='card'>
            {/* begin::Header */}
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Informations</span>
              </h3>
            </div>
            {/* end::Header */}
            {/* begin::Body */}
            <div className='card-body py-3'>
              <div className='row'>
                <div className='col-xl-6'>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>N document</label>
                    <input
                      placeholder=''
                      type='text'
                      autoComplete='off'
                      className='form-control bg-transparent'

                    />

                  </div>
                </div>
                <div className='col-xl-6'>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'></label>
                    <input
                      style={{ marginTop: 8 }}
                      placeholder=''
                      type='text'
                      autoComplete='off'
                      className='form-control bg-transparent'

                    />

                  </div>
                </div>
                <div className='col-xl-12'>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Date</label>
                    <input
                      type="date" id="date" value={selectedDate2} onChange={handleDateChange2}
                      className='form-control bg-transparent'
                    />
                  </div>
                </div>
                <div className='col-xl-6'>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Montant</label>
                    <input
                      placeholder=''
                      type='number'
                      autoComplete='off'
                      className='form-control bg-transparent'

                    />
                  </div>
                </div>
                <div className='col-xl-6'>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Mode Reglement</label>
                    <input
                      readOnly
                      placeholder='Espece'
                      type='text'
                      autoComplete='off'
                      className='form-control bg-transparent'

                    />

                  </div>
                </div>
                <div className='col-xl-12'>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Libelle</label>
                    <input
                      type="text"
                      className='form-control bg-transparent'
                    />
                  </div>
                </div>
                <div className='col'>
                  <div className='fv-row mb-8'>
                    <label className='form-label fw-bolder text-dark fs-6'>Commentaire</label>
                    <input
                      style={{ height: 70 }}
                      type="text"
                      className='form-control bg-transparent'
                    />
                  </div>
                </div>


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
                onClick={() => setShowTransfertModal(false)}
              >
                <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                Anuuler
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}