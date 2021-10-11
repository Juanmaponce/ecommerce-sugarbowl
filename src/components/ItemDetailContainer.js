import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({ item }) => {
    const [visible, setVisile] = useState(false)
    const handleOpenModal = () => {setVisile(true)}
    const handleCloseModal = () => {setVisile(false)}

    return (
        <>
            <Button variant="dark" style={{width:"100%"}} onClick={handleOpenModal} >Ver Detalles</Button>
            <Modal show={visible} onHide={handleCloseModal}>
                <ItemDetail item={item} />
            </Modal>
        </>
    )
}

export default ItemDetailContainer
