import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import InsertContent from '../components/InsertContent';
import { connect } from 'react-redux'
import * as XLSX from 'xlsx';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { updateColorMode } from '../redux/actions';


const Appbar = ({contents, colorMode, updateColorMode}) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openNewContentDialog, setOpenNewContentDialog] = React.useState(false);

  const downloadExcel = (type) => {
    let data
    if(type === 'To Do' ){
      data = contents.db[0]['data']
    }
    if(type === 'Monthly Accomplishments'){
      data = contents.db[1]['data']
    }
    if(type === 'Awards'){
      data = contents.db[2]['data']
    }

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "DataSheet.xlsx");
    handleClose()
  };

  const addNewContent = () => {
    setOpenNewContentDialog(true)
  }

  const updateMode = () => {
    if(colorMode.darkMode){
      updateColorMode(false)
      localStorage.setItem('darkMode', JSON.stringify(false));

    }
    if(!colorMode.darkMode){
      updateColorMode(true)
      localStorage.setItem('darkMode', JSON.stringify(true));
    }
  }

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1}} style={{ background: colorMode.darkMode ? '' :'#374554' }}>
        <Toolbar style={{ minHeight : '48px'}}>
            <div style={{ width:'100%', display:'flex', justifyContent:'space-between'}}>
                <Typography variant="h8" noWrap component="div">
                    Planner
                </Typography>
                <div style={{display:'flex'}}>
                  <div>
                    <DownloadForOfflineIcon
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                      fontSize='small'
                      sx={{marginLeft:'8px'}}
                    />
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={() => downloadExcel('To Do')}>Export - To Do</MenuItem>
                      <MenuItem onClick={() => downloadExcel('Monthly Accomplishments')}>Export - Monthly Accomplishments</MenuItem>
                      <MenuItem onClick={() => downloadExcel('Awards')}>Export - Awards</MenuItem>
                    </Menu>
                  </div>
                  <AddCircleIcon fontSize='small' sx={{marginLeft:'8px'}} onClick={addNewContent}/>
                  {colorMode.darkMode ? <Brightness4Icon fontSize='small' sx={{marginLeft:'8px'}} onClick={updateMode}/> :
                                        <Brightness7Icon fontSize='small' sx={{marginLeft:'8px'}} onClick={updateMode}/>}
                  <AccountCircleIcon fontSize='small' sx={{marginLeft:'8px'}} />
                </div>
            </div>
        </Toolbar>
        { openNewContentDialog && <InsertContent setOpenDialog={setOpenNewContentDialog} openDialog={openNewContentDialog}/>}
    </AppBar> 
  );
}

const mapStateToProps = (state) => ({
    contents  : state.contents,
    colorMode : state.colorMode
})

const mapDispatchToProps = (dispatch) => ({
    updateColorMode  : (payload) => dispatch(updateColorMode(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(Appbar)