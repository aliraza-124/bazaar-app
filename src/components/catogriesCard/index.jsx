import { Box, Button, Card, CardActions, CardMedia } from '@mui/material'
import React from 'react'


const styles = () => ({
    card: {
        position: 'relative',

        '&:hover img': {
            transform: 'scale(1.1)',
        },

        '&:hover button': {
            backgroundColor: "#1F2937", 
            color: 'white',
        },
    },
      
    image: {
        transition: 'transform 0.3s ease',
        objectFit: 'fill',
    },
      
    button: {
        position: 'absolute', 
        bottom: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        color: 'black',
        width: '96%',
        transition: 'background-color 0.3s',
        fontSize: '17px',
        fontWeight: 530,
        textTransform: 'capitalize',
    },
    
});

function CategoriesCard({ btnTitle, imageUrl }) {
    const classess = styles();

  return (
    <Card sx={ classess.card }>
        <CardMedia
            component="img"
            image={imageUrl}
            alt="Placeholder"
            // height={{ lg: "320px" }}
            height="100%"
            sx={ classess.image }
        />
    
        <Box position="relative">
            <CardActions sx={{ marginBottom: '0 !important' }}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    sx={{ ...classess.button, }}
                >
                    {btnTitle}
                </Button>
            </CardActions>
        </Box>
</Card>

  )
}

export default CategoriesCard