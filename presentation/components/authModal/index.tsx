import { register, setAuthToggle } from '@/redux/slices/auth';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { formikValidate, validationMessage, wordRegex } from '@/utils/utils';
import { useFormik } from 'formik';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as Yup from "yup"
const AuthModal = () => {
  const authToggle = useAppSelector((state) => state.auth?.authToggle)
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      password: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required(validationMessage.required),
      surname: Yup.string().required(validationMessage.required),
      password: Yup.string().min(6, validationMessage.minPassword).required(validationMessage.required)
    }),
    onSubmit: (values) => {
      dispatch(register(values))
      handleClose()
    }
  })
  const handleClose = () => dispatch(setAuthToggle(false));
  const wordControl = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!wordRegex.test(e.key)) {
      e.preventDefault()
    }
  }
  return (
    <>
      <Modal show={authToggle} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Üyelik Paneli</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex flex-column gap-3'>
            <div>
              <label>Ad</label>
              <input className='form-control' type='text' name='name' onChange={formik.handleChange} onKeyPress={(e) => wordControl(e)} />
              <span> {formikValidate(formik, "name")}</span>
            </div>
            <div>
              <label>Soyad</label>
              <input className='form-control' type='text' name='surname' onChange={formik.handleChange} onKeyPress={(e) => wordControl(e)} />
              <span> {formikValidate(formik, "surname")}</span>
            </div>
            <div>
              <label>Şifre</label>
              <input className='form-control' type='password' name='password' onChange={formik.handleChange} />
              <span> {formikValidate(formik, "password")}</span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => formik.handleSubmit()}>
            Giriş Yap
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AuthModal