import { useState } from 'react'

const Navigation = () => (
  <nav className="bg-blue-800 text-white p-4 relative z-10">
    <div className="max-w-7xl mx-auto">
      <div className="text-2xl font-serif">Wildlife Incentives</div>
    </div>
  </nav>
)

const HeroSection = () => (
  <div className="relative h-96 text-white">
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="relative z-10 max-w-7xl mx-auto pt-20 px-4">
      <h1 className="text-6xl font-serif mb-6">Wildlife Incentives Program</h1>
      <p className="text-xl max-w-2xl">
        Supporting ranchers and landowners in creating a wildlife-friendly environment 
        while maintaining sustainable agricultural practices.
      </p>
    </div>
  </div>
)

const Form = ({ values, handleSubmit }) => {
  const counties = ["Beaverhead", "Valley", "McCone", "Blaine"]
  const farmingTypes = ["Cattle Ranching", "Sheep Ranching", "Mixed Livestock", "Crop Farming", "Mixed Use"]
  const fencingTypes = ["Traditional Barbed Wire", "Electric Fencing", "Woven Wire", "Split Rail"]
  const alternativeFencingOptions = ["Wildlife Friendly Fencing", "Virtual Fencing", "Seasonal Fencing", "None"]

  return (
    <div className="max-w-3xl mx-auto bg-white/90 rounded-lg shadow-xl p-8 my-12">
      <h2 className="text-3xl font-serif text-blue-800 mb-8">Calculate Your Potential Benefits</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* General Information Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-blue-800 border-b border-blue-200 pb-2">
            General Information
          </h3>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="county" className="block text-sm font-medium text-gray-700">
                Which county is your property located in?
              </label>
              <select 
                id="county"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 bg-white"
                value={values.county.value}
                onChange={(event) => values.county.setValue(event.target.value)}
              >
                <option value="">Select a county</option>
                {counties.map(county => (
                  <option key={county} value={county}>{county}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="acres" className="block text-sm font-medium text-gray-700">
                How many acres is your property?
              </label>
              <input
                id="acres"
                type="number"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 bg-white"
                value={values.acres.value}
                onChange={(event) => values.acres.setValue(event.target.value)}
                placeholder="Enter acreage"
              />
            </div>

            <div>
              <label htmlFor="farming" className="block text-sm font-medium text-gray-700">
                What type of farming/ranching do you primarily do?
              </label>
              <select
                id="farming"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 bg-white"
                value={values.farming.value}
                onChange={(event) => values.farming.setValue(event.target.value)}
              >
                <option value="">Select farming type</option>
                {farmingTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Wildlife Interaction Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-blue-800 border-b border-blue-200 pb-2">
            Wildlife Interactions
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Which wildlife species frequently interact with your property? (Check all that apply)
              </label>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {["Wolves", "Bears", "Coyotes", "Elk", "Deer", "Prairie Dogs"].map(animal => (
                  <div key={animal} className="flex items-center">
                    <input
                      type="checkbox"
                      id={animal.toLowerCase()}
                      className="rounded border-gray-300"
                      checked={values.plagueAnimals.value.includes(animal)}
                      onChange={(e) => {
                        const newAnimals = e.target.checked 
                          ? [...values.plagueAnimals.value, animal]
                          : values.plagueAnimals.value.filter(a => a !== animal);
                        values.plagueAnimals.setValue(newAnimals);
                      }}
                    />
                    <label htmlFor={animal.toLowerCase()} className="ml-2 text-gray-700">{animal}</label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="maintenanceCost" className="block text-sm font-medium text-gray-700">
                Approximately how much do you spend annually on wildlife-related maintenance and repairs?
              </label>
              <input
                id="maintenanceCost"
                type="number"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 bg-white"
                value={values.maintenanceCost.value}
                onChange={(event) => values.maintenanceCost.setValue(event.target.value)}
                placeholder="Enter annual cost"
              />
            </div>
          </div>
        </div>

        {/* Trail Cameras Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-blue-800 border-b border-blue-200 pb-2">
            Trail Cameras
          </h3>
          
          <div className="flex items-center bg-blue-50 p-4 rounded-md">
            <input
              type="checkbox"
              id="trailCams"
              className="rounded border-gray-300"
              checked={values.trailCams.value}
              onChange={(event) => values.trailCams.setValue(event.target.checked)}
            />
            <label htmlFor="trailCams" className="ml-2 text-gray-700">
              Would you be interested in participating in our trail camera program for additional incentives?
            </label>
          </div>
        </div>

        {/* Fencing Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-blue-800 border-b border-blue-200 pb-2">
            Fencing Information
          </h3>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="fencingStrategy" className="block text-sm font-medium text-gray-700">
                What type of fencing do you currently use?
              </label>
              <select
                id="fencingStrategy"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 bg-white"
                value={values.fencingStrategy.value}
                onChange={(event) => values.fencingStrategy.setValue(event.target.value)}
              >
                <option value="">Select fencing type</option>
                {fencingTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="fencingRepairs" className="block text-sm font-medium text-gray-700">
                How many miles of fencing do you maintain?
              </label>
              <input
                id="fencingRepairs"
                type="number"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 bg-white"
                value={values.fencingRepairs.value}
                onChange={(event) => values.fencingRepairs.setValue(event.target.value)}
                placeholder="Enter miles of fencing"
              />
            </div>

            <div>
              <label htmlFor="alternativeFencing" className="block text-sm font-medium text-gray-700">
                Would you be interested in any of these wildlife-friendly fencing alternatives?
              </label>
              <select
                id="alternativeFencing"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 bg-white"
                value={values.alternativeFencing.value}
                onChange={(event) => values.alternativeFencing.setValue(event.target.value)}
              >
                <option value="">Select alternative fencing option</option>
                {alternativeFencingOptions.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Calculate Potential Incentives
        </button>
      </form>
    </div>
  )
}

function App() {
  const [county, setCounty] = useState("")
  const [acres, setAcres] = useState("")
  const [farming, setFarming] = useState("")
  const [plagueAnimals, setPlagueAnimals] = useState([])
  const [problems, setProblems] = useState([])
  const [deterrents, setDeterrents] = useState([])
  const [maintenanceCost, setMaintenanceCost] = useState("")
  const [trailCams, setTrailCams] = useState(false)
  const [fencingStrategy, setFencingStrategy] = useState("")
  const [fencingRepairs, setFencingRepairs] = useState("")
  const [alternativeFencing, setAlternativeFencing] = useState("")

  const values = {
    county: { value: county, setValue: setCounty },
    acres: { value: acres, setValue: setAcres },
    farming: { value: farming, setValue: setFarming },
    plagueAnimals: { value: plagueAnimals, setValue: setPlagueAnimals },
    problems: { value: problems, setValue: setProblems },
    deterrents: { value: deterrents, setValue: setDeterrents },
    maintenanceCost: { value: maintenanceCost, setValue: setMaintenanceCost },
    trailCams: { value: trailCams, setValue: setTrailCams },
    fencingStrategy: { value: fencingStrategy, setValue: setFencingStrategy },
    fencingRepairs: { value: fencingRepairs, setValue: setFencingRepairs },
    alternativeFencing: { value: alternativeFencing, setValue: setAlternativeFencing }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted:', {
      county,
      acres,
      farming,
      plagueAnimals,
      problems,
      deterrents,
      maintenanceCost,
      trailCams,
      fencingStrategy,
      fencingRepairs,
      alternativeFencing
    })
  }

  return (
    <div className="relative min-h-screen">
      {/* Background image container */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background.jpg')"
        }}
      ></div>
      
      {/* Content container */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <Form values={values} handleSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default App