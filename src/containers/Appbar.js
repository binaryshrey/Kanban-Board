import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import InsertContent from '../components/InsertContent';


const Appbar = () => {

  const [openNewContentDialog, setOpenNewContentDialog] = React.useState(false);

  const addNewContent = () => {
    setOpenNewContentDialog(true)
  }

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1}} >
        <Toolbar style={{ minHeight : '48px'}}>
            <div style={{ width:'100%', display:'flex', justifyContent:'space-between'}}>
                <Typography variant="h8" noWrap component="div">
                    Planner
                </Typography>
                <div style={{display:'flex'}}>
                  <DownloadForOfflineIcon fontSize='small' sx={{marginLeft:'8px'}}/>
                  <AddCircleIcon fontSize='small' sx={{marginLeft:'8px'}} onClick={addNewContent}/>
                  <AccountCircleIcon fontSize='small' sx={{marginLeft:'8px'}}/>
                </div>
            </div>
        </Toolbar>
        { openNewContentDialog && <InsertContent setOpenDialog={setOpenNewContentDialog} openDialog={openNewContentDialog}/>}
    </AppBar> 
  );
}

export default Appbar
