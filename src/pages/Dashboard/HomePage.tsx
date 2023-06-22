import * as React from 'react'
import Grid from '@mui/material/Grid/Grid'
import SearchBar from 'common/components/SearchBar'
import HomePageHead from 'common/components/HomePageHead'
import { Typography } from '@mui/material'

interface ImageProp {
  src: string
  alt: string
  className: string
  width: string
}

const ImageComponent = ({ src, alt, className, width }: ImageProp) => {
  return <img src={src} alt={alt} className={className} style={{ width }} />
}

export default function HomePage() {
  return (
    <Grid container style={{}}>
      <Grid item xs={12} height='100vh' sx={{ backgroundImage: 'url(recipe-background.jpg)', backgroundSize: 'cover' }}>
        {/* <ImageComponent src='recipe-background.jpg' alt='recipe' className='className' width='100%' /> */}
        {/* <div style={{ position: 'relative' }}> */}
        <HomePageHead />
        <SearchBar />
        {/* </div> */}
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ textAlign: 'center', fontSize: 50, fontWeight: 'bold' }}>Trending Picks</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ ml: 10, mr: 10 }}>
        <Grid item xs={12 } sm={4}>
          <img src='burger.jpg' alt='burgers' style={{ width: '100%', height: '550px', borderRadius: '10px' }} />
          <Typography variant='h4' sx={{ mt: 2, textAlign: 'center', fontWeight: 'bold' }}>
            Burgers
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <img src='salad.jpg' alt='burgers' style={{ width: '100%', height: '550px', borderRadius: '10px' }} />
          <Typography variant='h4' sx={{ mt: 2, textAlign: 'center', fontWeight: 'bold' }}>
            Salads
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <img src='milkshake.jpg' alt='burgers' style={{ width: '100%', height: '550px', borderRadius: '10px' }} />
          <Typography variant='h4' sx={{ mt: 2, textAlign: 'center', fontWeight: 'bold' }}>
            Milkshakes
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
