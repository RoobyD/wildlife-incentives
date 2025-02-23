import { useState } from 'react'

const Title = ({ title }) => {
  return (
    <h1 className='p-4 text-4xl text-blue-400 text-center font-serif'>{title}</h1>
  )
}

// TO DO: need labels for form, clean up form styling, and options
const Form = ({ values, handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <select className="bg-white m-4 rounded-sm" value={values.county.value} onChange={(event) => values.county.setValue(event.target.value)}>
            <option value="Beaverhead" defaultChecked></option>
          </select>
        </div>
        <div>
          <input className="bg-white m-4 rounded-sm" value={values.acres.value} onChange={(event) => values.acres.setValue(event.target.value)}>
        
          </input>
        </div>
        <div>
          <select className="bg-white m-4 rounded-sm" value={values.farming.value} onChange={(event) => values.farming.setValue(event.target.value)}>
            {/* farming */}
          </select>
        </div>
        <div>
          <input className="bg-white m-4 rounded-sm" type="checkbox" value={values.plagueAnimals.value} onChange={(event) => values.plagueAnimals.setValue(event.target.value)}>
            {/* plagueAnimals */}
          </input>
        </div>
        <div>
          <input className="bg-white m-4 rounded-sm" type="checkbox" value={values.problems.value} onChange={(event) => values.problems.setValue(event.target.value)}>
            {/* problems */}
          </input>
        </div>
        <div>
          <input className="bg-white m-4 rounded-sm" type="checkbox" value={values.deterrents.value} onChange={(event) => values.deterrents.setValue(event.target.value)}>
            {/* deterrents */}
          </input>
        </div>
        <div>
          <input className="bg-white m-4 rounded-sm" value={values.maintenanceCost.value} onChange={(event) => values.maintenanceCost.setValue(event.target.value)} type="number">
            {/* maintenanceCost */}
          </input>
        </div>
        <div>
          <input className="bg-white m-4 rounded-sm" type="checkbox" value={values.trailCams.value} onChange={(event) => values.trailCams.setValue(event.target.value)} >
            {/* trailCams */}
          </input>
        </div>
        <div>
          <select className="bg-white m-4 rounded-sm" value={values.fencingStrategy.value} onChange={(event) => values.fencingStrategy.setValue(event.target.value)}>
            {/* fencingStrategy */}
          </select>
        </div>
        <div>
          <input className="bg-white m-4 rounded-sm" value={values.fencingRepairs.value} onChange={(event) => values.fencingRepairs.setValue(event.target.value)} type="number">
            {/* fencingRepairs */}
          </input>
        </div>
        <div>
          <select className="bg-white m-4 rounded-sm" value={values.alternativeFencing.value} onChange={(event) => values.alternativeFencing.setValue(event.target.value)}>
            {/* alternativeFencing */}
          </select>
        </div>
      </form>
    </>
  )
}

function App() {
  // General Values
  const [county, setCounty] = useState("")
  const [acres, setAcres] = useState("")
  const [farming, setFarming] = useState("")
  // Farm Conditions
  const [plagueAnimals, setPlagueAnimals] = useState([])
  const [problems, setProblems] = useState([])
  const [deterrents, setDeterrents] = useState([])
  const [maintenanceCost, setMaintenanceCost] = useState("")
  // Trail Cams
  const [trailCams, setTrailCams] = useState(false)
  // Fencing
  const [fencingStrategy, setFencingStrategy] = useState("")
  const [fencingRepairs, setFencingRepairs] = useState("")
  const [alternativeFencing, setAlternativeFencing] = useState("")

  const values = {
    county:
    {
      value: county,
      setValue: setCounty
    },
    acres:
    {
      value: acres,
      setValue: setAcres
    },
    farming:
    {
      value: farming,
      setValue: setFarming
    },
    plagueAnimals:
    {
      value: plagueAnimals,
      setValue: setPlagueAnimals
    },
    problems:
    {
      value: problems,
      setValue: setProblems
    },
    deterrents:
    {
      value: deterrents,
      setValue: setDeterrents
    },
    maintenanceCost:
    {
      value: maintenanceCost,
      setValue: setMaintenanceCost
    },
    trailCams:
    {
      value: trailCams,
      setValue: setTrailCams
    },
    fencingStrategy:
    {
      value: fencingStrategy,
      setValue: setFencingStrategy
    },
    fencingRepairs:
    {
      value: fencingRepairs,
      setValue: setFencingRepairs
    },
    alternativeFencing:
    {
      value: alternativeFencing,
      setValue: setAlternativeFencing
    }
  }


  const handleSubmit = (event) => {

  }
  return (
    <div className='bg-blue-800 h-screen'>
      <Title title="Welcome to the Wildlife Incentives Board" />
      <Form values={values} handleSubmit={handleSubmit}  />
    </div>
  )
}

export default App
