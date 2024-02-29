import { Box, Typography } from '@mui/material'
import React from 'react'

import ViewListIcon from '@mui/icons-material/ViewList';
import AppsIcon from '@mui/icons-material/Apps';

const styles = () => ({
  styledMainBox: {
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '16px',
  },

  styledSearchingProduct: {
    fontSize: '16px', 
    lineHeight: 1, 
    fontWeight: 600, 
    color: '#2B3445',
  },

  styledResultFound: {
    fontSize: '14px', 
    fontWeight: 400, 
    color: '#7D879C', 
  },

  styledView: {
    fontSize: '14px', 
    fontWeight: 400, 
    color: '#7D879C', 
    marginRight: '16px',
  },

  styledIcons: {
    fontSize: '1.25rem', 
    marginRight: '16px',
  },

})

function UpperBar() {
  const classess = styles();

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={2} mt={2} bgcolor="white"  sx={ classess.styledMainBox }>
      <Box>
        <Typography sx={ classess.styledSearchingProduct }>Searching for “ mobile phone ”</Typography>
        <Typography sx={ classess.styledResultFound }>48 results found</Typography>
      </Box>

      <Box display="flex" >
        <Typography sx={ classess.styledView }>View:</Typography> 
        <AppsIcon sx={ classess.styledIcons } />
        <ViewListIcon sx={ classess.styledIcons } />
      </Box>
    </Box>
  )
}

export default UpperBar