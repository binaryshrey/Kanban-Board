import { CssBaseline } from '@mui/material'
import React from 'react'
import Category from '../components/Category'
import Content from '../components/Content'
import data from './db'

const CategoryContainer = () => {
    return(
        <div style={{marginTop:'48px', height:'100vh'}}>
            <CssBaseline/>
            <div style={{display:'flex','justifyContent':'space-evenly'}}>
                {data.map((item, index) => {
                    return (<Category key={index} name={item.name} count={item.data.length} contents = {item.data}/>)
                })}
            </div>
        </div>
    )
}

export default CategoryContainer


