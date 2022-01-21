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
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ListItemIcon } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Link } from 'react-router-dom'

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
  const [open, setOpen] = React.useState(false);
  
    const handleClickk = () => {
     setOpen(!open);
    };

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
            <Typography variant="h6" display="block" gutterBottom>
            Con foco en el desarrollo de la ciencia, tecnología e innovación,
            Sergio Uñac se reunió con Fernando Peirano
              <Typography variant="subtitle1" display="block" gutterBottom>
              https://twitter.com/user/status
              /1483863563408183297
              <Typography variant="subtitle2" display="block" gutterBottom>
              
            </Typography>
            </Typography>
            </Typography>
        </ThemeProvider>
          } 
          secondary="#ciencia"   
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
            Desarrollo Humano continúa con las inscripciones al programa #Progresar
              <Typography variant="subtitle1" display="block" gutterBottom>
              http://t.co/8DAOAj1H1
              <Typography variant="subtitle2" display="block" gutterBottom>
              @sergiounac
            </Typography>
            </Typography>
            </Typography>
        </ThemeProvider>
          } 
          secondary="#Progresar"  />
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
            En la mañana del día miércoles, el gobernador @sergiounac recibió al campeón Nacional de Malambo, Sergio Zalazar, en Casa de Gobierno.
              <Typography variant="subtitle1" display="block" gutterBottom>
              https://twitter.com/user/status
              /1483839269215121409
              <Typography variant="subtitle2" display="block" gutterBottom>
              @sergiounac
            </Typography>
            </Typography>
            </Typography>
        </ThemeProvider>
          } 
          secondary="#Campeonato"  />
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
              "@diegodesanjuan Juan domingo Biden le llamó a Sergio para adelantarle la noticia y Uñac medio enojado le exigió que no lo den a conocer hasta que Alberto no viniera a la Provincia y así poderle contar de primera mano"
              <Typography variant="subtitle1" display="inline-block" gutterBottom>
              https://twitter.com/user/status
              /1483605376255737860
              <Typography variant="subtitle2" display="block" gutterBottom>
              @diegodesanjuan
            </Typography>
            </Typography>
            </Typography>
        </ThemeProvider>
          } 
          secondary="#Biden"  />
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
            @Gustavo84124185 @sergiounac @roberto_gattoni No me respondiste. Sos larretista ahora?
              <Typography variant="subtitle1" display="block" gutterBottom>
              https://twitter.com/user/status
              /1484314138536865799
              <Typography variant="subtitle2" display="block" gutterBottom>
              @Gustavo84124185
              @sergiounac
              @roberto_gattoni
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
              @Gustavo84124185 @sergiounac @roberto_gattoni Y porque no en el 2015. Se tomó dos años, porque lo hizo en noviembre.Pero vamos a lo importante. Votarias a Larreta en el 2023?
              <Typography variant="subtitle1" display="block" gutterBottom>
              https://twitter.com/user/status
              /1484283206215999488
              <Typography variant="subtitle2" display="block" gutterBottom>
              @Gustavo84124185
              @sergiounac
              @roberto_gattoni
            </Typography>
            </Typography>
            </Typography>
        </ThemeProvider>
          } 
          secondary="#Gattoni"  />

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
      
      </List>
      <ListItem style= {{width:'130px',float: 'right'}}>
      <ListItemButton onClick={handleClickk} >
        <ListItemIcon>
        </ListItemIcon>  
        <ListItemText />
        {/* Ver Mas */}
        {open ? <HorizontalRuleIcon /> : <AddIcon />}
      </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
      <ListItem sx={{marginTop:'10px'}} >
          <ListItemAvatar>
            <Avatar >
              <TwitterIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText      
          primary={
        <ThemeProvider theme={theme}>
            <Typography variant="h6" display="block" gutterBottom>
            @sergiounac @ferpeirano @agenciaidiar usted es un tipazo, no baje los brazos, estamos con usted
              <Typography variant="subtitle1" display="block" gutterBottom>
              https://twitter.com/user/status
              /1484224358495236107
              <Typography variant="subtitle2" display="block" gutterBottom>
              @sergiounac
              @ferpeirano
              @agenciaidiar
            </Typography>
            </Typography>
            </Typography>
        </ThemeProvider>
          } 
          secondary="#Uñac"  />

        </ListItem>
      </Collapse>
      <Collapse in={open} timeout="auto" unmountOnExit>
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
            @sergiounac ojala siga ocupandose de la provincia como hasta ahora
              <Typography variant="subtitle1" display="block" gutterBottom>
              https://twitter.com/user/
              status
              /1484223729412587522
              <Typography variant="subtitle2" display="block" gutterBottom>
              @sergiounac
            </Typography>
            </Typography>
            </Typography>
        </ThemeProvider>
          } 
          secondary="#Uñac"  />

        </ListItem>
      </Collapse>
      <Collapse in={open} timeout="auto" unmountOnExit>
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
            @sergiounac @ferpeirano @agenciaidiar lo felicito gobernador, la provincia merece esto y mucho mas.
              <Typography variant="subtitle1" display="block" gutterBottom>
              https://twitter.com/user
              /status
              /1484223048345694214
              <Typography variant="subtitle2" display="block" gutterBottom>
              @sergiounac
              @ferpeirano
              @agenciaidiar
            ],
            </Typography>
            </Typography>
            </Typography>
        </ThemeProvider>
          } 
          secondary="#Gobernador"  />

        </ListItem>
      </Collapse>
      <Collapse in={open} timeout="auto" unmountOnExit>
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
            @Gustavo84124185 @sergiounac @roberto_gattoni Eso fue un manotazo de ahogado cuando se estaba yendo (lo hizo en noviembre de 2017). Como EL IVA de los alimentos. Se objetivo. Queres baja de impuestos proba con el liberalismo.
              <Typography variant="subtitle1" display="block" gutterBottom>
              https://twitter.com/user
              /status
              /1484210845164916742
              <Typography variant="subtitle2" display="block" gutterBottom>
              @Gustavo84124185
              @sergiounac
              @roberto_gattoni
            </Typography>
            </Typography>
            </Typography>
        </ThemeProvider>
          } 
          secondary="#Ahogado"  />

        </ListItem>
      </Collapse>
      <ListItem sx={{marginTop:'10px'}} >
          <Button variant = "contained" href= "/" color = 'secondary'>Volver</Button>
        </ListItem>
      </Paper>
      </Container>
      </div>  
    )
}