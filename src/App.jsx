import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './component/CoffeeCard'

function App() {

  const loadedCoffes = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffes);



  return (
    <>
      <h1 className='text-6xl'>coffee : {coffees.length}</h1>
     <div className='grid md:grid-cols-3 grid-cols-1 gap-7'>
     {
        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}
        coffees={coffees}
        setCoffees={setCoffees}
        ></CoffeeCard>)
      }
     </div>
    </>
  )
}

export default App
