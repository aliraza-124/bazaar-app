import { Grid } from '@mui/material'
import React from 'react'

import PosterCrd from '../../posterCard'

import PosterImage1 from '../../../imges/mens-fashion.jpg'
import PosterImage2 from '../../../imges/banner2.jpg'
import PosterImage3 from '../../../imges/womens-fashion.jpg'
import Banner from './posterBanner'


function PosterSection() {
  return (
    <>
        <Grid container spacing={3} px={3} my={3}>
          <Grid item xs={12} sm={12} md={4}>
            <PosterCrd
              imageUrl= {PosterImage1}
              posterTitle="For Men's"
              posterDescription="Starting At $29"
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Banner
              imageUrl= {PosterImage2}
              posterTitle="Black Friday"
              posterDescription="Up to 20% Off"
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PosterCrd
              imageUrl= {PosterImage3}
              posterTitle="For Women's"
              posterDescription="25% off"
            />
          </Grid>
        </Grid>     
    </>
  )
}

export default PosterSection