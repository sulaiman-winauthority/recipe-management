import React, { useState, useEffect } from 'react'
import { Typography, Grid, Divider, Button, Paper } from '@mui/material'
import SearchButton from 'common/components/SearchButton'
import FormModal from 'common/components/FormModal'
import axios from 'axios'
import { RecipeFormValues } from 'common/components/RecipeForm'

export default function HomePage() {
  const [recipes, setRecipes] = useState<RecipeFormValues[]>([])
  useEffect(() => {
    const fetchRecipeData = async () => {
      const response = await axios.get('http://127.0.0.1:3001/recipes')
      console.log(response)
      setRecipes(response.data)
    }

    fetchRecipeData()
  }, [])

  const [open, setOpen] = React.useState(false)
  const [mode, setMode] = React.useState('')
  const [selectedRecipe, setSelectedRecipe] = React.useState<RecipeFormValues | null>(null)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleEditRecipe = (recipe: RecipeFormValues) => {
    handleOpen()
    setMode('edit')
    setSelectedRecipe(recipe)
  }

  const handleViewRecipe = (recipe: RecipeFormValues) => {
    console.log('Check Handle')
    handleOpen()
    setMode('view')
    setSelectedRecipe(recipe)
  }
  return (
    <Grid container>
      <Grid item xs={12} sx={{ backgroundImage: 'url(recipe-background.jpg)', backgroundSize: '100% 100%' }} height='100vh'>
        <Grid item xs={12}>
          <Typography variant='h1' fontSize={75} fontFamily={'Roboto'} sx={{ mt: 10, textAlign: 'center', mr: 10, ml: 10, color: 'white' }}>
            Tantalize Your Taste Buds: Explore an Array of Irresistible Recipes
          </Typography>
        </Grid>
        <Grid sx={{ mt: '10px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <input
            name='searchRecipes'
            placeholder='Search Recipes'
            style={{
              backgroundColor: '#f2f2f2',
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '8px 12px',
              fontSize: '16px',
              width: '600px',
            }}
          />
          <SearchButton />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ textAlign: 'center', fontSize: 50, fontWeight: 'bold', mt: 5 }}>Trending Picks</Typography>
        <Divider variant='middle' />
      </Grid>
      <Grid container spacing={12} sx={{ mt: 2, m: 5 }}>
        {recipes.length > 0 &&
          recipes.map((recipe, index) => {
            return (
              <Grid item xs={12} sm={4} key={recipe.id} sx={{ textAlign: 'center' }}>
                <Paper elevation={3}>
                  <img
                    src={recipe.recipeImage ? recipe.recipeImage : 'burger.jpg'}
                    alt='burgers'
                    style={{ width: '100%', height: '450px', borderRadius: '5px' }}
                  />

                  <Typography variant='h4' sx={{ mt: 2, textAlign: 'center', fontWeight: 'bold' }}>
                    {recipe.recipeName}
                  </Typography>

                  <Button sx={{ m: 1 }} variant='contained'>
                    Update
                  </Button>
                  <Button
                    sx={{ m: 1 }}
                    onClick={() => {
                      // setMode('view')
                      handleViewRecipe(recipe)
                      console.log('Find Error', recipe)
                      // setSelectedRecipe(recipe)
                    }}
                    variant='contained'
                  >
                    View
                  </Button>
                </Paper>
              </Grid>
            )
          })}
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ textAlign: 'center', fontSize: 50, fontWeight: 'bold', mt: 5 }}>Add, Update and View Your Recipes Here...</Typography>
        <Divider />
        <FormModal open={open} mode={mode} setOpen={setOpen} setMode={setMode} />
      </Grid>
    </Grid>
  )
}
