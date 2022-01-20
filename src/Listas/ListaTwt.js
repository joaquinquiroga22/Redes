import React from 'react';

//Material-ui

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import TwitterIcon from '@mui/icons-material/Twitter';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { createTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import { Container, ThemeProvider } from 'react-bootstrap';
import { Paper } from '@material-ui/core';
 
// const Demo = styled('div')(({ theme }) => ({
//     backgroundColor: theme.palette.background.paper,
//   }));

const theme = createTheme({
    typography: {
      fontFamily: 'Raleway, Arial',
      fontSize:50,
    },
})

export default function ListaTwt(){

    return (
        <div style={{ padding: 16, margin: '80px auto', maxWidth: 1200 }}>
            
        
        <Container>
            <Paper>
            
        <List
        sx={{
            
            width: '100%',
            maxWidth: 1000,
            bgcolor: 'background.paper',
        }}
        theme={theme}
      >
        <h4 style = {{textAlign:'center'}} display= 'inline-block'>Busqueda Twits @Jose Luis Gioja</h4>
        <ListItem >
          <ListItemAvatar>
            <Avatar>
              <TwitterIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText     
          primary={
        <ThemeProvider theme={theme}>
            <Typography variant="h6" display="inline-block" gutterBottom>
              Gioja solicita que se declare emergencia Hídrica Nacional 
              <Typography variant="subtitle1" display="block" gutterBottom>
              http://t.co/8DAOAj1H1
              <Typography variant="subtitle2" display="block" gutterBottom>
              @joseluisgioja @tdosoSanJuan @Frente DeTodos @Diputados_Todos #SanJuan
            </Typography>
            </Typography>
            </Typography>
        </ThemeProvider>
          } 
          secondary="#EmergenciaHídrica"   
          />
          
          
        </ListItem>
        
        <ListItem sx={{marginTop:'10px'}}>
          <ListItemAvatar>
            <Avatar>
              <TwitterIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText      
          primary={
        <ThemeProvider theme={theme}>
            <Typography variant="h6" display="block" gutterBottom>
              Gioja solicita que se declare emergencia Hídrica Nacional
              <Typography variant="subtitle1" display="block" gutterBottom>
              http://t.co/8DAOAj1H1
              <Typography variant="subtitle2" display="block" gutterBottom>
              @joseluisgioja @tdosoSanJuan @Frente DeTodos @Diputados_Todos #SanJuan
            </Typography>
            </Typography>
            </Typography>
        </ThemeProvider>
          } 
          secondary="#EmergenciaHídrica"  />
        </ListItem>
        
        <ListItem sx={{marginTop:'10px', width:'100%'}}>
          <ListItemAvatar>
            <Avatar>
              <TwitterIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText  sx={{width:'100%'}}    
          primary={
        <ThemeProvider theme={theme}>
            <Typography variant="h6" display="block" gutterBottom>
              Diputados
              <Typography variant="subtitle1" display="block" gutterBottom>
              http://t.co/8DAOAj1H1
              <Typography variant="subtitle2" display="block" gutterBottom>
              @joseluisgioja presento un proyecto de Ley para declatar la emergencia
            </Typography>
            </Typography>
            </Typography>
        </ThemeProvider>
          } 
          secondary="Hidrica Nacional??"  />
        </ListItem>
        
        <ListItem sx={{marginTop:'10px'}}>
          <ListItemAvatar>
            <Avatar>
              <TwitterIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText      
          primary={
        <ThemeProvider theme={theme}>
            <Typography variant="h6" display="block" gutterBottom>
              "Hay echos que confirman que Argentina se va a poner de pie"
              <Typography variant="subtitle1" display="block" gutterBottom>
              http://t.co/8DAOAj1H1
              <Typography variant="subtitle2" display="block" gutterBottom>
              @joseluisgioja charlo con @luisavalmaggiail y @enboch em
            </Typography>
            </Typography>
            </Typography>
        </ThemeProvider>
          } 
          secondary="#encuentroNaciioln, ??"  />
        </ListItem>
        
        <ListItem sx={{marginTop:'10px'}} >
          <ListItemAvatar>
            <Avatar>
              <TwitterIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText      
          primary={
        <ThemeProvider theme={theme}>
            <Typography variant="h6" display="block" gutterBottom>
              @PatoBullrich @LuisGasulla @Joseluisgioja HDP
              <Typography variant="subtitle1" display="block" gutterBottom>
              http://t.co/8DAOAj1H1
              <Typography variant="subtitle2" display="block" gutterBottom>
              
            </Typography>
            </Typography>
            </Typography>
        </ThemeProvider>
          } 
          secondary=""  />
        </ListItem>
        <ListItem sx={{marginTop:'10px'}} >
          <ListItemAvatar>
            <Avatar>
              <TwitterIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText      
          primary={
        <ThemeProvider theme={theme}>
            <Typography variant="h6" display="block" gutterBottom>
              Gioja solicita que se declare emergencia Hídrica Nacional
              <Typography variant="subtitle1" display="block" gutterBottom>
              http://t.co/8DAOAj1H1
              <Typography variant="subtitle2" display="block" gutterBottom>
              @joseluisgioja @tdosoSanJuan @Frente DeTodos @Diputados_Todos #SanJuan
            </Typography>
            </Typography>
            </Typography>
        </ThemeProvider>
          } 
          secondary="#EmergenciaHídrica"  />
        </ListItem>
        {/* <ListItem sx={{marginTop:'10px'}} >
          <ListItemAvatar>
            <Avatar>
              <TwitterIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText      
          primary={
        <ThemeProvider theme={theme}>
            <Typography variant="h6" display="block" gutterBottom>
              Gioja solicita que se declare emergencia Hídrica Nacional
              <Typography variant="subtitle1" display="block" gutterBottom>
              http://t.co/8DAOAj1H1
              <Typography variant="subtitle2" display="block" gutterBottom>
              @joseluisgioja @tdosoSanJuan @Frente DeTodos @Diputados_Todos #SanJuan
            </Typography>
            </Typography>
            </Typography>
        </ThemeProvider>
          } 
          secondary="#EmergenciaHídrica"  />
        </ListItem> */}
        <ListItem sx={{marginTop:'10px'}} >
          <Button href= "/" color = 'secondary'>Volver</Button>
        </ListItem>
      </List>
      
      </Paper>
      </Container>
      </div>
    )
}