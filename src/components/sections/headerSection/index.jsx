import { Box, Button, Typography } from '@mui/material'
import React from 'react'

import CoverPhoto from '../../../imges/bag.png'

const styles = () => ({
    leftSideHeading: {
        marginTop: 0,
        fontSize: { xs: "34px", sm: "50px"}, 
        fontWeight: 'bold',
        lineHeight: 1.2,
        marginBottom: '1.35rem', 
    },

    leftSideSubHeading: {
        fontSize: '14px',
        fontWeight: 400,
        color: '#0F3460',
        marginBottom: '21.6px',
    },

    styledButton: {
        bgcolor: "#1F2937",
    },

    styledImage: {
        width: '400px',
    },
})

function HeaderSection() {
    const classess = styles();

    return (
        <Box display="flex" alignItems="center" flexDirection={{ xs: "column", sm: "row" }} px={3} py={{ xs: 5, sm: 8 }} bgcolor="#F6F9FC">
            <Box width={{ xs: "100%", sm: "50%"}}>
                <Typography variant="h3" color="#2B3445" sx={ classess.leftSideHeading } >Fashionable Collection</Typography>
                <Typography variant="body2" color="#4A6688" sx={ classess.leftSideSubHeading } >Get Free Shipping on all orders over $99.00</Typography>
                <Button variant="contained" sx={ classess.styledButton } >Shop Now</Button>
            </Box>

            <Box width="50%" display="flex" justifyContent="center">
                <img src={ CoverPhoto } alt="" style={ classess.styledImage } />
            </Box>
        </Box>
    )
}

export default HeaderSection