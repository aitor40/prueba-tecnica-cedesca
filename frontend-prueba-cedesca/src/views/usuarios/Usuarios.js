import React, { useState } from 'react'
import axios from 'axios'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

/*

Si véis el código, quiero recalcar que la lógica que he puesto aquí
la podría haber separado en otro fichero, creando por ejemplo un
custom hook para dejar el código muy limpio pero como he usado una
plantilla bastante grande, no he querido complicar la cosa a la
hora de revisar el código. Todo lo que he desarrollado yo se encuetra
aquí.

*/

const instance = axios.create({
  baseURL: 'http://localhost:8081',
  timeout: 1000,
  headers: {},
})

const Usuarios = () => {
  const [formData, setFormData] = useState({
    empresa: '',
    dni: '',
    email: '',
    nombre: '',
    apellidos: '',
  })
  const [usuarios, setUsuarios] = useState()
  const [serverError, setServerError] = useState({ msg: '', error: false })

  const handleSearch = () => {
    instance
      .get(
        `/api/usuarios?empresa=${formData.empresa}&dni=${formData.dni}&email=${formData.email}&nombre=${formData.nombre}&apellidos=${formData.apellidos}`,
      )
      .then((resp) => {
        // handle success
        setUsuarios(resp.data.usuarios)
        setServerError({ msg: '', error: false })
      })
      .catch((err) => {
        // handle error
        setServerError({ msg: err.code + ' - ' + err.message, error: true })
      })
  }

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Listado de usuarios</CCardHeader>
        <CCardBody>
          <CForm className="row g-3">
            <CRow className="mt-3">
              <CCol sm={5}>
                <CFormLabel htmlFor="empresa" className="visually-hidden">
                  Buscar por empresa
                </CFormLabel>
                <CFormInput
                  type="text"
                  id="empresa"
                  placeholder="Buscar por empresa"
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                />
              </CCol>
              <CCol sm={3}>
                <CFormLabel htmlFor="dni" className="visually-hidden">
                  Buscar por DNI
                </CFormLabel>
                <CFormInput
                  type="text"
                  id="dni"
                  placeholder="Buscar por DNI"
                  onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
                />
              </CCol>
              <CCol sm={4}>
                <CFormLabel htmlFor="email" className="visually-hidden">
                  Buscar por email
                </CFormLabel>
                <CFormInput
                  type="email"
                  id="email"
                  placeholder="Buscar por email"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </CCol>
            </CRow>
            <CRow className="mt-3">
              <CCol sm={5}>
                <CFormLabel htmlFor="name" className="visually-hidden">
                  Buscar por nombre
                </CFormLabel>
                <CFormInput
                  type="text"
                  id="name"
                  placeholder="Buscar por nombre"
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                />
              </CCol>
              <CCol sm={5}>
                <CFormLabel htmlFor="surname" className="visually-hidden">
                  Buscar por apellidos
                </CFormLabel>
                <CFormInput
                  type="text"
                  id="surname"
                  placeholder="Buscar por apellidos"
                  onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                />
              </CCol>
              <CCol sm={2} className="d-grid gap-2 col-2 mx-auto">
                <CButton color="primary" onClick={handleSearch}>
                  Buscar
                </CButton>
              </CCol>
            </CRow>
          </CForm>
        </CCardBody>
      </CCard>
      {usuarios ? (
        usuarios.length > 0 ? (
          <CTable className="mb-3" striped hover responsive>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell>ID</CTableHeaderCell>
                <CTableHeaderCell>Empresa</CTableHeaderCell>
                <CTableHeaderCell>Nombre</CTableHeaderCell>
                <CTableHeaderCell>Apellidos</CTableHeaderCell>
                <CTableHeaderCell>Email</CTableHeaderCell>
                <CTableHeaderCell>DNI</CTableHeaderCell>
                <CTableHeaderCell></CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {usuarios.map((item, index) => (
                <CTableRow v-for="item in tableItems" key={index}>
                  <CTableDataCell>{item.id}</CTableDataCell>
                  <CTableDataCell>{item.empresa}</CTableDataCell>
                  <CTableDataCell>{item.nombre}</CTableDataCell>
                  <CTableDataCell>{item.apellidos}</CTableDataCell>
                  <CTableDataCell>{item.email}</CTableDataCell>
                  <CTableDataCell>{item.dni}</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary">Detalles</CButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        ) : (
          <CAlert color="warning">No se han encontrado resultados</CAlert>
        )
      ) : (
        <p>Realiza una búsqueda para empezar</p>
      )}
      {serverError.error && (
        <CAlert color="danger">
          Se ha producido un error con el servidor: <b>{serverError.msg}</b>
        </CAlert>
      )}
    </>
  )
}

export default Usuarios
