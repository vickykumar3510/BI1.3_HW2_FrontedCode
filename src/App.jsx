import Hotels from './components/Hotels'
import HotelsByName from './components/HotelsByName'
import AddHotelForm from './components/AddHotelForm'
import './App.css'

export default function App(){
  return <main>
    <AddHotelForm />
    <h1>All Hotels</h1>
    <Hotels />
    <HotelsByName name="New Taj Dwarka"/>
  </main>
}