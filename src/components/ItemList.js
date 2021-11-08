import React from 'react'
import Item from './Item'
import { Flex } from '@chakra-ui/react'

const ItemList = ({ items }) => {
    return (
        <Flex wrap="wrap" justify='space-around'>
            {items.map(item =>{
                return <Item key={item.id} item={item} />
            })}
        </Flex>
    )
}

export default ItemList
