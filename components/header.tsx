import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='inherit' elevation={0}>
        <Toolbar>
         <div style={{ flexGrow: 1 }}> 
         <Typography variant="h6" component="div" >
            LOGO 
          </Typography>
         </div>
         <div>
         <Button color="inherit">Add post</Button>
         <Button color="inherit"> Posts </Button>
         <Button color="inherit">Messages</Button>
         <Button color="inherit">Wachlist</Button>
         <Button color="inherit">Login</Button>
         </div>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}
