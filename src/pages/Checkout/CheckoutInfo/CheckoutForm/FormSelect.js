import React, { useState, useEffect } from "react"
import Select from "react-select"
import { useField } from "formik"

import Colors from '../../../../constant/Colors'

const selectStyle = (error) => ({
  container: (provided) => ({
    ...provided,
    flex: 1,
  }),
  control: (provided) => ({
    ...provided,
    height: '45.81px',
    fontSize: "1.5rem",
    borderColor: error ? `${Colors.PRIMARY} !important` : "rgba(0, 0, 0, 0.23) !important",
    boxShadow: "none",
    cursor: "pointer",
    backgroundColor: 'transparent',
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 100,
    paddingTop: "5px",
    paddingBottom: "5px",
  }),
  option: (provided, state) => ({
    ...provided,
    padding: "15px 10px",
    fontSize: "1.5rem",
    color: state.isSelected ? '#fff' : Colors.TEXT_PRIMARY,
    backgroundColor: state.isSelected ? Colors.PRIMARY : '#fff',
    cursor: "pointer",

    "&:active": {
      backgroundColor: state.isSelected && Colors.PRIMARY,
    },

    "&:hover": {
      backgroundColor: !state.isSelected && "rgba(0, 0, 0, 0.05)",
    },
  }),
  noOptionsMessage: (provided) => ({
    ...provided,
    fontSize: "1.5rem",
  }),
  menuList: (provided) => ({
    ...provided,
    scrollbarWidth: "none",

    "::-webkit-scrollbar": {
      backgroundColor: 'transparent',
      width: '1rem'
    },
  })
})

const FormSelect = ({ label, name, options }) => {
  const [field, meta, helpers] = useField(name)
  const [isFocus, setIsFocus] = useState(false)

  const isError = meta.touched && !!meta.error

  // This is necessary after we reset form (bring the label to the initial position)
  useEffect(() => {
    if (!field.value) setIsFocus(false);
  }, [field.value]);

  return (
    <div className="form__input"
      onClick={() => setIsFocus(true)}
      onBlur={() => {
        if (!field.value) setIsFocus(false)
      }}
    >
      <p className={`form__label--select ${isError && 'error'} ${isFocus && 'focus'}`}>{label}</p>
      <Select
        name={name}
        styles={selectStyle(isError)}
        options={options}
        placeholder=''
        value={field.value ? options.find(option => option.value === field.value) : ''}
        onChange={(option) => helpers.setValue(option.value)}
        onBlur={() => helpers.setTouched(true)}
      />
      <p className="form__error">{meta.touched && meta.error}</p>
    </div>
  )
}

export default FormSelect
