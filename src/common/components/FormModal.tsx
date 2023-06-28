import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Grid, IconButton } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import RecipeForm, { RecipeFormValues } from './RecipeForm'

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  outline: 'none',
  backgroundColor: 'transparent',
  boxShadow: 'none',
  height: '100%',
  overflow: 'auto',
}

interface IProps {
  open: boolean
  mode: string
  setOpen: (open: boolean) => void
  setMode: (mode: string) => void
}

export default function FormModal({ open, mode, setOpen, setMode }: IProps) {
  console.log('Check Modal', mode)
  //const [open, setOpen] = React.useState(false);
  //const [mode, setMode] = React.useState('');
  const [selectedRecipe, setSelectedRecipe] = React.useState<RecipeFormValues | null>(null)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Grid container m={5} xs={12} justifyContent='center'>
      <Grid item>
        <Button
          variant='contained'
          onClick={() => {
            handleOpen()
            setMode('add')
            setSelectedRecipe(null)
          }}
        >
          Add your Recipe
        </Button>
        <Button
          sx={{ m: 5 }}
          variant='contained'
          onClick={() => {
            handleOpen()
            //setMode('edit')
            setSelectedRecipe(null)
          }}
        >
          Edit your Recipe
        </Button>
        <Button
          variant='outlined'
          onClick={() => {
            handleOpen()
            //setMode('view')
            setSelectedRecipe(null)
          }}
        >
          View Recipes
        </Button>
      </Grid>
      <Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
        <Box style={style}>
          <IconButton sx={{ position: 'absolute', top: 0, right: 0 }} size='large' onClick={handleClose}>
            <HighlightOffIcon />
          </IconButton>
          <RecipeForm mode={mode} selectedRecipe={selectedRecipe} />
        </Box>
      </Modal>
    </Grid>
  )
}
