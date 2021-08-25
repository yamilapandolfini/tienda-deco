import React, {useEffect, useState} from 'react'
import {ItemList} from './ItemList'

const datos = [ 
    { id:1,title:'producto1', description:'Descripcion producto1', price:2500,  pictureUrl:'' },
    { id:2,title:'producto2', description:'Descripcion producto2', price:3500,  pictureUrl:'' },
    { id:3,title:'producto3', description:'Descripcion producto3', price:5000, pictureUrl:'' },
    { id:4,title:'producto4', description:'Descripcion producto4', price:2552,  pictureUrl:'' },
    { id:5,title:'producto5', description:'Descripcion producto5', price:3400,  pictureUrl:'' },
    { id:6,title:'producto6', description:'Descripcion producto6', price:5000, pictureUrl:'' },
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