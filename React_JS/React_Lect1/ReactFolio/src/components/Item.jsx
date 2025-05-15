import './Item.css';

export default function Item(props) {
    const itemName = props.name;
    return(<p className="nirma">{itemName}</p>
    )
}