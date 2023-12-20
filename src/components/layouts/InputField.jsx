import React from 'react'

const InputField = ({className, labelClassName, label, type, placeholder, inputClassName, children}) => {
  return (
    <form action="" className={className}>
        <label htmlFor="" className={`block ${labelClassName}`}>{label}</label>
        <input type={type} placeholder={placeholder} className={`border-none outline-none ${inputClassName}`} />
        {children}
    </form>
  )
}

export default InputField