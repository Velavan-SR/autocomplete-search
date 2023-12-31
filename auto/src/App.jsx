import {useState} from 'react'
import data from './resources/countryData.json'

function App() {

    const [value, setValue] = useState("")
    const [results, setresults] = useState([])

    const search = (e) => {
        const inputValue = e.target.value.toLowerCase()
        setValue(inputValue);
        const filteredData = data
          .filter((item) => item.name.toLowerCase().startsWith(inputValue))
          .slice(0, 10)
        setresults(filteredData.map((item) => item.name))
      };

      function handleEscape(event) {
        if (event.key === "Escape" && value.trim() !== "") {
          console.log("Escape")
          setresults([])
          setValue("")
        }
      }


    return (
        
        <div className='container'>
          
          <h1>Search !</h1>
          <input type="text" value={value} onChange={(e) => {search(e)}} onKeyDown={handleEscape} placeholder="Type here"/>
          <button>Search</button>
          
          {results.map((item, index) => (
            <div id={index}> {item} </div>
          ))}
        
        </div>
  
  )
}

export default App