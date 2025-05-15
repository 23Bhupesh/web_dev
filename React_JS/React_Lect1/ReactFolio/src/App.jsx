
import Item from './components/Item'
import './App.css'
import ItemDate from './components/ItemDate'

function App() {
  const itemName = "surfExcel";
  const response = [
    {
      itemName: "Nirma",
      itemDay: "20",
      itemMonth: "June",
      itemYear: "1998"
    },
    {
      itemName: "Nirma2",
      itemDay: "202",
      itemMonth: "June2",
      itemYear: "19982"
    },
    {
      itemName: "Nirma3",
      itemDay: "203",
      itemMonth: "June3",
      itemYear: "19983"
    }
  ]
  return (
    <>
    <Item name = {response[0].itemName}/>
    <ItemDate  day={response[0].itemDay} month={response[0].itemMonth} year={response[0].itemYear}/>
    
    <Item name = {response[1].itemName}/>
    <ItemDate  day={response[1].itemDay} month={response[1].itemMonth} year={response[1].itemYear}/>
    
    <Item name = {response[2].itemName}/>
    <ItemDate  day={response[2].itemDay} month={response[2].itemMonth} year={response[2].itemYear}/>
    </>
  )
}

export default App
