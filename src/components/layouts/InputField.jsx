import React from 'react'

const InputField = ({className, labelClassName, label, type, id, value, placeholder, inputClassName, children}) => {
  return (
    <div className={className}>
        <label htmlFor="" className={`block ${labelClassName}`}>{label}</label>
        <input type={type} id={id} value={value} placeholder={placeholder} className={`border-none outline-none ${inputClassName}`} />
        {children}
    </div>
  )
}

export default InputField