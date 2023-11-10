export const validationMessage = {
  required: "Bu alan zoruludur.",
  minPassword: "Şifre en az 6 karakter olabilir"
}
export const formikValidate = (formik: Object, key: string) => {
  return <span className='text-danger'> {formik.touched[key] && formik.errors[key] && formik.errors[key]}</span>
}

export const wordRegex = /^[A-Za-zÇçĞğİıÖöŞşÜü]+$/;