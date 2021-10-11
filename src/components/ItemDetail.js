import React from 'react'
import { Modal, Button, Card } from 'react-bootstrap'
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>{item.itemName}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-0'>
                <Card>
                    <Card.Img variant='top' src={item.img} style={{with:'100%'}}/>
                    <Card.Body>
                        <Card.Text>
                            <p>{item.description}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex flex-column align-items-center"> 
                        <p>Precio: {item.price} - Stock: {item.stock}</p>
                        
                        <div>
                          <ItemCount stock={item.stock}/>
                        </div>
                    </Card.Footer>
                </Card>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success">Agregar al carrito</Button>
            </Modal.Footer> 
        
            
        </>
    )
}

export default ItemDetail
