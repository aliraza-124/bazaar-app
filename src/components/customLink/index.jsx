import React from 'react'
import { Link } from 'react-router-dom'

function CustomLink({ pathName, children }) {
  return (
    <Link to={ pathName } style={{ textDecoration: 'none', color:'black', }}>
        {children}
    </Link>
  )
}

export default CustomLink