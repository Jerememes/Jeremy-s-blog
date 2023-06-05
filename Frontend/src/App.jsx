import './App.css';
import React from "react";
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6">
              Jerememes' Blog
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div>
            <Container maxWidth="sm">
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                Blog 
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                I will put my toughts here.
              </Typography>
            </Container>
          </div>
          <Container maxWidth="md">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    image="/img/nvd.png"
                    title="Image title"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      bla bla bla
                    </Typography>
                    <Typography>
                      bla bla bla ?
                    </Typography>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
