import { TextField, IconButton, InputAdornment, Container } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = () => (
  <TextField
    variant='filled'
    id='search'
    type='search'
    label='Search'
    sx={{
      mt: 0,
      width: '50vw',
      zIndex: 1,
      backgroundColor: '#dedcdc',
      padding: '10px',
      borderRadius: '10px',
      
    }}
    InputProps={{
      endAdornment: (
        <InputAdornment position='end'>
          <SearchIcon />
        </InputAdornment>
      ),
    }}
  />
)

export default SearchBar
