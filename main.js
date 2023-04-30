import './style.css'
import getData, { logData } from './get-data'



getData(1).then(data => {
  console.log(data)
})

document.querySelector('#app').innerHTML = `
  <div>
    <input id="id" type="number" placeholder="User ID" />
    <button id="btn">Get Data</button>

    Look in the console!
  </div>
`

logData()

