import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Appbar = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1}} >
        <Toolbar style={{ minHeight : '48px'}}>
            <div style={{ width:'100%', display:'flex', justifyContent:'space-between'}}>
                <Typography variant="h8" noWrap component="div">
                    Planner
                </Typography>
                <AccountCircleIcon/>
            </div>
        </Toolbar>
    </AppBar> 
  );
}

export default Appbar
