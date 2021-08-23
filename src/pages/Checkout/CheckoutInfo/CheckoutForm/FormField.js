import React from "react"
import { useField } from "formik"

import TextField from "@material-ui/core/TextField"

const FormField = ({ label, name }) => {
  const [field, meta] = useField(name)
  return (
    <TextField
      {...field}
      label={label}
      className="form__input"
      variant="outlined"
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
    />
  )
}

export default FormField
