import React from 'react'
import {Link} from 'react-router-dom'

export const Item = ({item}) => {



    return <>
        <Link to={`/item/${item.id}`}><h4>{item.title}</h4></Link>
    </>
}