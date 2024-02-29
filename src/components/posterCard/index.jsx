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
        color: 'white',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

    styledButton: {
        color: 'white',
        padding: 0, 
        border: 'none',
        textAlign: 'flex-start',
        position: 'relative',
        overflow: 'hidden',
    
        '&::before': {
          content: "''",
          position: 'absolute',
          width: '100%',
          height: '3px',
          bottom: 0,
          left: '0',
          backgroundColor: 'white',
          transform: 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out',
        },
    
        '&:hover::before': {
          transform: 'translateX(0)',
        },
      },
});

function PosterCrd({ imageUrl, posterTitle, posterDescription }) {
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
                <Typography sx={{ fontSize: '25px', fontWeight: 700 }}>{posterTitle}</Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: 400 }}>{posterDescription}</Typography>

                <Box sx={{ margin: 0,
                    flexShrink: 0,
                    borderStyle: 'solid',
                    borderColor: '#F3F5F9',
                    borderBottomWidth: 'thik',
                    borderWidth: '2px',
                    marginTop: '12px',
                    marginBottom: '12px',
                    width: '50px', 
                    }}
                >
                </Box>
                
                <Button sx={ classess.styledButton }>Shop Now</Button>
            </Box>
        </Card>
    );
}


export default PosterCrd