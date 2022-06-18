import { CssBaseline } from '@mui/material'
import React from 'react'
import Category from '../components/Category'
import { connect } from 'react-redux'

const CategoryContainer = ({contents}) => {
    return(
        <div style={{marginTop:'48px', height:'100vh'}}>
            <CssBaseline/>
            <div style={{display:'flex','justifyContent':'space-evenly'}}>
                {contents.db.map((item, index) => {
                    return (<Category key={index} name={item.name} count={item.data.length} contents = {item.data}/>)
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    contents  : state.contents
})

export default connect(mapStateToProps,null)(CategoryContainer)


