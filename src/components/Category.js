import React from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Content from './Content';
import task from '../task.svg'
import ma from '../ma.svg'
import award from '../award.svg'

const Category = ({name, count, contents}) => {

    const displayEmptyIllustrations = () => {
        if(name === 'To Do'){
            return <img src={task} alt='task' width='400' height='210' style={{marginTop:'100px',marginBottom:'100px'}}/>   
        }
        if(name === 'Monthly Accomplishments'){
            return <img src={ma} alt='monthly' width='400' height='210' style={{marginTop:'100px',marginBottom:'100px'}}/>   
        }
        if(name === 'Awards'){
            return <img src={award} alt='award' width='400' height='210' style={{marginTop:'100px',marginBottom:'100px'}}/>   
        }
    }

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
                {
                    contents.length !==0 ? 
                    contents.map((item, index) => {
                        return(
                            <Content key={index} uid={item.id}  title={item.title} description={item.description} created_on={item.created_on} tag={item.tag}/>
                        )
                    }) : <>{displayEmptyIllustrations()}</>
                }             
            </Paper>
        </div>
    )
}

export default Category