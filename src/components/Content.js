import { CssBaseline, Paper } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import { connect } from 'react-redux'
import { updateContents } from '../redux/actions';

const Content = ({title, description, created_on, tag, contents,updateContents, uid}) => {
    
    const deleteContent = (uid) => {
        let raw_data = contents.db
        raw_data.map((item,index) => {
            item.data = item.data.filter(_item => _item.id != uid)
        })
        updateContents(raw_data)
    }

    return(
        <div style={{margin:'8px'}}>
            <Paper levation={2} style={{width:'100%',height:'200px'}}>
                <div style={{padding:'16px'}}>
                    <div style={{display:'flex', 'justifyContent':'space-between'}}>
                        <Typography variant="h8" noWrap component="div" color='text.secondary' sx={{paddingBottom:'16px'}}>{title}</Typography>
                        <DeleteIcon fontSize='small' onClick={() => deleteContent(uid)}/>
                    </div>
                    <Typography variant="h8" noWrap component="div" color='text.secondary' sx={{paddingBottom:'64px'}}>{description}</Typography>
                    <div style={{display:'flex', 'justifyContent':'space-between'}}>
                        <Typography variant="h8" noWrap component="div" color='text.secondary'>{created_on}</Typography>
                        <Chip label={tag} size="small"/>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

const mapStateToProps = (state) => ({
    contents  : state.contents
})

const mapDispatchToProps = (dispatch) => ({
    updateContents  : (payload) => dispatch(updateContents(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(Content)