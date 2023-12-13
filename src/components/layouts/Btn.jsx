import React from 'react'
import { Link } from 'react-router-dom'

const Btn = ({btnClassName, className, btnName, link}) => {
  return (
    <Link to={link}><button className={btnClassName}><h5 className={className}>{btnName}</h5></button></Link>
  )
}

export default Btn