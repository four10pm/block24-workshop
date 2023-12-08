import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

console.log(puppyList);
function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
  
  console.log(puppies);

  return (
    <section id="maindiv">
      <div id="puppydiv">
        {puppies.map((puppy) => {
          return <p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id} className="puppy"> {puppy.name} </p>;
        })}
        </div>
        {featPupId && (
        <div className="featuredPup">
          <h2> {featuredPup.name} </h2>
          <ul>
            <li> Age: {featuredPup.age} </li>
            <li> Email: {featuredPup.email} </li>
          </ul>
        </div>
      )}
    </section>
  )
}

export default App
