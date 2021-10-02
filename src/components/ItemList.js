import React from 'react'
import Item from './Item'

const ItemList = ({ items }) => {
    return (
        <div className="d-flex flex-wrap">
            {items.map(item =>{
                return <Item key={item.id} item={item} />
            })}
        </div>
    )
}

export default ItemList
