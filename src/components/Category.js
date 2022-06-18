import { CssBaseline } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Content from './Content';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FileDownloadIcon from '@mui/icons-material/FileDownload';


const Category = ({name, count, contents}) => {
    return(
        <div style={{width:'100%',height:'100%', margin:'16px'}}>
            <Paper elevation={10} >
                <div style={{display :'flex', justifyContent:'space-between', padding:'12px'}}>
                    <div style={{display:'flex' ,paddingBottom:'24px'}}>
                        <Typography variant="h8" noWrap component="div"  color='text.secondary'>
                            {name} 
                        </Typography>
                        <Typography variant="h8" noWrap component="div" sx={{paddingLeft:'12px'}} color='text.secondary'>
                            {count}
                        </Typography>
                    </div>
                </div>
                {contents.map((item, index) => {
                    return(
                        <Content key={index} title={item.title} description={item.description} created_on={item.created_on} tag={item.tag}/>
                    )
                })}
               
            </Paper>
        </div>
        
    )
}

export default Category