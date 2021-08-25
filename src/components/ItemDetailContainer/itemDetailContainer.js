import React, {useEffect, useState}from 'react'
import {ItemDetail} from './itemDetail'
import {useParams} from 'react-router-dom'

import { Card, Image } from 'semantic-ui-react'

const datos = [ 
    { id:1,title:'producto1', description:'Descripcion producto1', price:2500,  pictureUrl:'' },
    { id:2,title:'producto2', description:'Descripcion producto2', price:3500,  pictureUrl:'' },
    { id:3,title:'producto3', description:'Descripcion producto3', price:5000, pictureUrl:'' },
    { id:4,title:'producto4', description:'Descripcion producto4', price:2552,  pictureUrl:'' },
    { id:5,title:'producto5', description:'Descripcion producto5', price:3400,  pictureUrl:'' },
    { id:6,title:'producto6', description:'Descripcion producto6', price:5000, pictureUrl:'' },
]


const getItems = () => { 
    return new Promise((trajoDatosOk,error)=>{
        setTimeout(()=>{
            trajoDatosOk(datos)
        },2000)
    })

}


export function ItemDetailContainer() {
    const [datosDelItem, setDatosDelItem] = useState({});
    const {itemId}= useParams()

    useEffect(() => {

        getItems()
        .then((datos)=>{
            setDatosDelItem(datos)
        })

    }, [])   

 return <div>
     <h2>{}</h2>
 <ItemDetail item={datosDelItem} />
 </div>
 

}