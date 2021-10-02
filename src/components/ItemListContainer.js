import ItemCount from "./ItemCount"


const ItemListContainer = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <h1>{props.greeting}</h1>
            <ItemCount itemName="Torta oreo" stock={5}/>
        </div>
    )
}

export default ItemListContainer
