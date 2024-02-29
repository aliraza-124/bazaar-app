import { Box, Card, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import React from 'react'

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

function Products({ imageUrl, productTitle, ratingValue, productPrice }) {
  return (
    <Card>
      <Box p={2}>
        <CardMedia 
          component="img"
          src={imageUrl}
          alt=""
          sx={{ width: "100%", height: { xs:"250px", lg:"350px"}, objectFit: 'contain', }}
        />
      </Box>
      
        <CardContent>
          <Typography sx={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: '#373F50', }}>{productTitle}</Typography>
          <Rating value={ratingValue} size="small" readOnly />
          
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#D23F57' }}>${productPrice}</Typography>
            <AddBoxOutlinedIcon color="error" />
          </Box>
        </CardContent>
    </Card>
  )
}

export default Products