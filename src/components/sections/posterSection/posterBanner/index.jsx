import { Box, Button, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'

const styles = () => ({
    card: {
        boxShadow: 'none',
        height: '240px',
        position: 'relative',
        
        '&:hover img': {
            transform: 'scale(1.1)',
        },
    },
      
    image: {
        transition: 'transform 0.3s ease',
        backgroundColor: '#E3E9EF',
        height: '100%',
    }, 

    styledTextBox: {
        top: 0,
        bottom: 0,
        left: '32px',
        right: '32px',
        color: 'white',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    styledButton: {
        paddingLeft: '30px',
        paddingRight: '30px',
        textAlign: 'flex-start',
        position: 'relative',
        textTransform: 'none',
    },
});

function Banner({ imageUrl, posterTitle, posterDescription }) {
    const classess = styles();

    return (
        <Card sx={classess.card}>
            <CardMedia
                component="img"
                image={imageUrl}
                alt="Placeholder"
                sx={classess.image}
                
            />
           
            <Box
                sx={ classess.styledTextBox }
            >   
                <Box display="flex" justifyContent="space-between" flexDirection="column"> 
                    <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>{posterDescription}</Typography>
                    <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>{posterTitle}</Typography>
                    <Typography sx={{ fontSize: '52px', fontWeight: 700, lineHeight: 1, }}>Sale</Typography>
                </Box>
                
                <Box>
                    <Button variant='outlined' size='large' sx={ classess.styledButton }>Shop Now</Button>
                </Box>
            </Box>
        </Card>
    );
}

export default Banner