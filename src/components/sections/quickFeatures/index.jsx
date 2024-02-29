import { Box, Card, CardContent, CardMedia, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

function QuickFeatures() {
  return (
    <>
        <Box sx={{ padding: '50px 20px', marginBottom: '100px' }}>
            <Paper elevation={2}>
                <Grid container >
                    <Grid item xs={12} sm={6} md={3}>
                        {/* <Box display="flex" justifyContent="center" alignItems="center"> */}
                            <Card sx={{ display:"flex", justifyContent:"center", alignItems: "center"}}>
                                <CardMedia>
                                    <Typography>ICON</Typography>
                                </CardMedia>
                                <CardContent>
                                    <Typography>Fast Delivery</Typography>
                                    <Typography>Start from $10</Typography>
                                </CardContent>
                            </Card> 
                        {/* </Box> */}
                    </Grid>

                    <Divider />
                    
                    <Grid item xs={12} sm={6} md={3}>
                        <Card>
                            <CardMedia>
                                <Typography>ICON</Typography>
                            </CardMedia>
                            <CardContent>
                                <Typography>Fast Delivery</Typography>
                                <Typography>Start from $10</Typography>
                            </CardContent>
                        </Card> 
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Card>
                            <CardMedia>
                                <Typography>ICON</Typography>
                            </CardMedia>
                            <CardContent>
                                <Typography>Fast Delivery</Typography>
                                <Typography>Start from $10</Typography>
                            </CardContent>
                        </Card> 
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Card>
                            <CardMedia>
                                <Typography>ICON</Typography>
                            </CardMedia>
                            <CardContent>
                                <Typography>Fast Delivery</Typography>
                                <Typography>Start from $10</Typography>
                            </CardContent>
                        </Card> 
                    </Grid>
                </Grid>

               
            </Paper>
        </Box>
    </>
  )
}

export default QuickFeatures