import React, {useState} from 'react';
import MainContainer from './containers/MainContainer'
import { Routes, Route } from 'react-router-dom';
// import Trends from './containers/Trends';
import CarsInfo from './containers/CarsInfo';
import SearchBar from './Components/SearchBar';

const App = () => {
    const [carsCom, setCarsCom] = useState([]);
    const [autoTrader, setAutoTrader] = useState([]);
    const [trueCar, setTrueCar] = useState([]);
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState(2022);
    const [zip, setZip] = useState(10001);
  
    const updateMake = (e) => {
      setMake(e.target.value)
    }
    const updateYear = (e) => {
      setYear(e.target.value)
    }
    const updateModel = (e) => {
      setModel(e.target.value)
    }
    const updateZip = (e) => {
      setZip(e.target.value)
    }
  
    const fetching = () => {
      fetch(`/api/scrape/${make}/${model}/${year}/${zip}`)
        .then(response => response.json())
        .then(data => {
          setCarsCom(data.carsComData)
          setAutoTrader(data.autoTraderData)
          setTrueCar(data.trueCarData)
        })
        .catch(err => console.log("Error in fetch App.jsx:", err))
    }
    
    return (
    <div id='app'>
        <MainContainer />
        <Routes>
            <Route
                exact path="/"
                element={
                <div>
                    <SearchBar 
                        updateMake={updateMake}
                        updateYear={updateYear}
                        updateModel={updateModel}
                        updateZip={updateZip}
                        fetching={fetching}
                    />
                    <CarsInfo
                        carsCom={carsCom}
                        autoTrader={autoTrader}
                        trueCar={trueCar}
                    />
                </div>
            }
            />
            {/* <Route
                exact path="/trends"
                element={<Trends />}
            /> */}
        </Routes>
    </div>
)};

export default App;