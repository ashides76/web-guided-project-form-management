import React, {useState} from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

function SimpleForm() {
  const [pets, setPets] = useState(petsList);
  const [formValues, setFormValues] = useState({
    petName: '',
    petType: ''
  });

  const change = (event) => {
    console.log(event);
    const {name, value} = event.target;
    setFormValues({ ...formValues, [name]: value })
  }

  const submit = (event) => {
    event.preventDefault();
    //option 1:
    // setPets(pets.concat({petName: formValues.petName, petType: formValues.petType}))
    
    //option 2: 
    const newPet = {
      petName: formValues.petName,
      petType: formValues.petType
    }
    setPets(prevPets => [...prevPets, newPet] )
    setFormValues({petName: '', petType: ''})
  }

  return (
    <div className='container'>
      <h1>Simple Form App</h1>
      {pets.map((pet, index) => {
        return (
          <div key={index}> 
            {pet.petName} is a {pet.petType}
          </div>
        )
      })}
      <br/>
      <br/>
      <form onSubmit={submit}>
        <label>Pet Name</label>
        <input 
          name='petName'
          type='text'
          value={formValues.petName}
          onChange={change}
        />
        <label>Pet Type</label>
        <input 
          name='petType'
          type='text'
          value={formValues.petType}
          onChange={change}
        />
        <br />
        <input type='submit' value={'Create a pet'}/>
      </form>
      
    </div>
  )
}

render(
  <>
    {/* <SimpleForm /> */}
    <App />
  </>
  , document.querySelector('#root')
)