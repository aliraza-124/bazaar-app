import { Typography } from '@mui/material';
import React from 'react'

const styles = () => ({
    styledTypograpghy: {
        fontSize: '14px', 
        fontWeight: 400, 
        lineHeight: 1.5, 
        color: '#92879C',
    }
})

function muiTypography({ typographyText }) {
    const classess = styles();

    return (
        <Typography sx={ classess.styledTypograpghy }>{ typographyText } hello</Typography>
    )
}

export default muiTypography