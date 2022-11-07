import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import ResidentInfo from './ResidentInfo';
import Footer from './Footer';

function App() {

  const [getInformation, setgetInformation] = useState([]);
  const [ubicationId, setUbicationId] = useState(" ");
  
  useEffect(() => {

    const randomUbication = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomUbication}`)
      .then(res => setgetInformation(res.data));
  }, []);

  const searchUbication = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${ubicationId}`)
      .then(res => setgetInformation(res.data))
  }


  return (
    <div >
      <header>
      </header>
      <div className="App">
        <div className="search-ubication">
          <input type="text" placeholder='Search Location id' onChange={e => setUbicationId(e.target.value)} />
          <button onClick={searchUbication}><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className="info-content">

          <h1>{getInformation.name}</h1>

          <div className="info-ubication">
            <p> <b>Type:</b>  {getInformation.type}</p> {" "}
            <p> <b>Dimension:</b>  {getInformation.dimension}</p>{" "}
            <p> <b>Population:</b>  {getInformation.residents?.length}</p>
          </div>
        </div>
        <div className='grup-cards'>
          {getInformation.residents?.map((resident) => (
            <ResidentInfo 
            url={resident} 
            key={resident} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
