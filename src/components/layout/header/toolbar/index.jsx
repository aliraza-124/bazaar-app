import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Hidden, IconButton, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'

import AddIcon from '@mui/icons-material/Add';

const styles = () => ({
  heading: {
    fontSize: '12px', 
    fontWeight: 700, 
    borderRadius: '200px',
  },

  languageSelector: {
    mr: 1, 
    fontSize: '12px', 
    color: 'white', 
    '& .MuiSelect-icon': { color: 'white' }, 
    fontWeight: 700
  },

  bigFontSize: {
    fontSize: '16px',
  },

  smallFontSize: {
    fontSize: '12px',
  },

  iconMargins: {
    marginRight: 1.5,
  },
  
});

function Toolbar() {
  const classess = styles();

  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [isBarVisible, setIsBarVisible] = useState(false);

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const toggleBarVisibility = () => {
    setIsBarVisible(!isBarVisible);
  };


  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" bgcolor="#2B3445" color="white" py={ 0.5 } px={3}>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" py={0.5} px={1.5} bgcolor="#D23F57" sx={ classess.heading }>HOT</Typography>
          <Typography sx={ classess.smallFontSize } marginLeft={1}>Free Express Shipping</Typography>
        </Box>

        <Box>
          <Hidden smDown>
            <Select
              labelId="language-chnage"
              id="language-chnage"
              size="small"
              value={selectedLanguage}
              onChange={handleChange}
              outline= 'none'
              sx={ classess.languageSelector }
            >
              <MenuItem value="EN" sx={ classess.smallFontSize }>EN</MenuItem>
              <MenuItem value="DE" sx={ classess.smallFontSize }>DE</MenuItem>
            </Select>

            <Twitter fontSize="small" sx={{ ...classess.bigFontSize, ...classess.iconMargins }} />
            <Facebook fontSize="small" sx={{ ...classess.bigFontSize, ...classess.iconMargins }} />
            <Instagram fontSize="small" sx={ classess.bigFontSize } />
          </Hidden>

          <Hidden smUp>
            <IconButton onClick={toggleBarVisibility} >
              <AddIcon sx={{ color: 'white' }}/>
            </IconButton>
          </Hidden>
        </Box>
      </Box>

      <Hidden smUp>
      <Box sx={{ visibility: isBarVisible ? 'visible' : 'hidden', transition: 'visibility 0.3s linear'}}>
      <Box display="flex" justifyContent="space-between" alignItems="center" bgcolor="#2B3445" color="white" py={ 0.5 } px={3}>
        <Box>
            <Select
              labelId="language-chnage"
              id="language-chnage"
              size="small"
              value={selectedLanguage}
              onChange={handleChange}
              outline= 'none'
              sx={ classess.languageSelector }
            >
              <MenuItem value="EN" sx={ classess.smallFontSize }>EN</MenuItem>
              <MenuItem value="DE" sx={ classess.smallFontSize }>DE</MenuItem>
            </Select>

            <Twitter fontSize="small" sx={{ ...classess.bigFontSize, ...classess.iconMargins }} />
            <Facebook fontSize="small" sx={{ ...classess.bigFontSize, ...classess.iconMargins }} />
            <Instagram fontSize="small" sx={ classess.bigFontSize } />
        </Box>
      </Box>
      </Box>
      </Hidden>
    </>
  )
}

export default Toolbar