// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const [ countries, setCountries] = useState([]);
  
  useEffect( ()=>{
    fetch('https://restcountries.com/v2/all')
    .then( res => res.json())
    .then( data => setCountries(data))
    .catch(error => console.log(error))
  },[])

  return (
    <div className="App">
      {countries.map(country =><Country country={country} key={country.alpha2Code}></Country>)}
    </div>
  );
}

export default App;
