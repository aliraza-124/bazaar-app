import { Button } from '@mui/material'
import React from 'react'

const styles = () => ({
    styledButton: {
        bgcolor: '#D8DBDD', 
        color: 'rgb(43, 52, 69)',
        textTransform: 'none',
        height: '30px',
        marginRight: '10px',
        fontSize: '12px',

    }
})

function CustomButton({ btnTitle }) {
    const classess = styles();
    return (
        <Button variant='contained' size='small' sx={ classess.styledButton }>{ btnTitle }</Button>
    )
}

export default CustomButton