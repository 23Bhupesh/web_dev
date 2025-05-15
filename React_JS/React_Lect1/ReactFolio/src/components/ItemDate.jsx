import './ItemDate.css';

export default function ItemDate(props) {
    const itemDay = props.day;
    const itemMonth = props.month;
    const itemYear = props.year;

    return (
        <div className='mfg-date'>
            <span> {itemDay} </span>
            <span> {itemMonth} </span>
            <span> {itemYear} </span>
        </div>
    )
}