import { useState } from 'react'

const Title = ({ title }) => {
  return (
    <h1 className='p-4 text-4xl text-blue-400 text-center font-serif'>{title}</h1>
  )
}

const Form = ({ values, handleSubmit, handleChange }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <select onChange={values.county.value}>
          <option defaultChecked></option>
        </select>

        <input onChange={values.acres.value}>
          {/* acres */}
        </input>

        <select onChange={values.farming.value}>
          {/* farming */}
        </select>

        <input type="checkbox" onChange={values.plagueAnimals.value}>
          {/* plagueAnimals */}
        </input>

        <input type="checkbox" onChange={values.problems.value}>
          {/* problems */}
        </input>

        <input type="checkbox" onChange={values.deterrents.value}>
          {/* deterrents */}
        </input>

        <input onChange={values.maintenanceCost.value}>
          {/* maintenanceCost */}
        </input>

        <input type="checkbox" onChange={values.trailCams.value}>
          {/* trailCams */}
        </input>

        <select onChange={values.fencingStrategy.value}>
          {/* fencingStrategy */}
        </select>

        <input onChange={values.fencingRepairs.value}>
          {/* fencingRepairs */}
        </input>

        <select onChange={values.alternativeFencing.value}>
          {/* alternativeFencing */}
        </select>
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
      <Form values={values} handleSubmit={handleSubmit} handleChange={setValues}  />
    </div>
  )
}

export default App
