import React, {useEffect, useState} from 'react'
import {ItemList} from './ItemList'

const datos = [ 
    { id:1,title:'Remeras-desafio', description:'Remeras Rojas',        price:25,  pictureUrl:'' },
    { id:2,title:'Pantalon-after', description:'Pantalon de jean',    price:35,  pictureUrl:'' },
    { id:3,title:'Medias-after', description:'Medias con dibujitos',  price:500, pictureUrl:'' },
    { id:4,title:'Remeras-entrega', description:'Remeras Rojas',        price:25,  pictureUrl:'' },
    { id:5,title:'Pantalon-entrega', description:'Pantalon de jean',    price:35,  pictureUrl:'' },
    { id:6,title:'Medias-entrega', description:'Medias con dibujitos',  price:500, pictureUrl:'' },
]

const ItemListContainer = () =>{
    const [resultadoDeItems, setResultadoDeItems] = useState(null)

    useEffect(()=>{
        const llamadaAlServidor = new Promise((trajoDatosOk,error)=>{
            setTimeout(()=>{
                console.log(datos)
            },2000)
        })
    },[])


    return (
        <div>

            { resultadoDeItems  
            ? <ItemList items={resultadoDeItems}  /> 
            : null}

        </div>
    )

    
}

export default ItemListContainer;