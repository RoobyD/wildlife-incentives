import axios from 'axios'

const submit_form = (county, acres, farming, plagueAnimals, problems, deterrents, maintenanceCost, trailCams, fencingStrategy, fencingRepairs, alternativeFencing) => {
    const submission = {
        county, acres, farming, plagueAnimals, problems, deterrents, maintenanceCost, trailCams, fencingStrategy, fencingRepairs, alternativeFencing
    }
    const request = axios.post('http://localhost:3001/api/submission', submission)
    return request.then(response => response.data)
}

export default { submit_form }