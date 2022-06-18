import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import uuid from 'react-uuid'
import { connect } from 'react-redux'
import { updateContents } from '../redux/actions';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const InsertContent = ({openDialog, setOpenDialog,contents,updateContents}) => {

  let data = contents.db

  const handleClose = () => {
    setOpenDialog(false);
  };

  const [category, setCategory] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [tag, setTag] = React.useState('');

  const handleTitleEntry = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionEntry = (event) => {
    setDescription(event.target.value);
  };

  const handleCategoryEntry = (event) => {
    setCategory(event.target.value);
  };
  const handleTagEntry = (event) => {
    setTag(event.target.value);
  };

  const saveEntry = () => {

    let category_data_index = getCategoryDataIndex(category)
    data[category_data_index]['data'].unshift({
        'title'         : title,
        'description'   : description,
        'created_on'    : new Date().toLocaleDateString().replaceAll('/','-'),
        'tag'           : tag,
        'category'      : category,
        'id'            : uuid()
    })
    updateContents(data)
    handleClose()
  }

  const getCategoryDataIndex = (val) => {
    let category_data_index
    data.map((item,index) => {
        if(item.name ===  val) {
            category_data_index = index
        }
    })
    return category_data_index
  }

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openDialog}
        fullWidth={true}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Entry Details
        </BootstrapDialogTitle>
        <DialogContent dividers>

            <form>
                <FormControl fullWidth sx={{marginBottom:'8px'}}>
                    <TextField fullWidth id="title" label="Title" variant="outlined" value={title} onChange={handleTitleEntry}/>
                </FormControl>

                <FormControl fullWidth sx={{marginBottom:'8px'}}>
                    <TextField fullWidth multiline maxRows={4} id="outlined-multiline-static" label="Description" variant="outlined" value={description} onChange={handleDescriptionEntry} />
                </FormControl>

                <FormControl fullWidth sx={{marginBottom:'8px'}}>
                    <TextField fullWidth id="tag" label="Tag" variant="outlined" value={tag} onChange={handleTagEntry}/>
                </FormControl>

                <FormControl fullWidth sx={{marginBottom:'8px'}}>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Category"
                            onChange={handleCategoryEntry}
                            >
                        <MenuItem value={'To Do'}>To Do</MenuItem>
                        <MenuItem value={'Monthly Accomplishments'}>Monthly Accomplishments</MenuItem>
                        <MenuItem value={'Awards'}>Awards</MenuItem>
                        </Select>
                </FormControl>
            </form>    
            
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={saveEntry}>Save</Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

const mapStateToProps = (state) => ({
    contents  : state.contents
})

const mapDispatchToProps = (dispatch) => ({
    updateContents  : (payload) => dispatch(updateContents(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(InsertContent)