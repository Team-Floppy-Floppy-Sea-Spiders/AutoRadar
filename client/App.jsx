import React, { useState } from 'react';
import MainContainer from './containers/MainContainer';
import { Routes, Route } from 'react-router-dom';
// import Trends from './containers/Trends';
import CarsInfo from './containers/CarsInfo';
import SearchBar from './Components/SearchBar';
import Wishlist from './containers/Wishlist';

const App = () => {
  const [carsCom, setCarsCom] = useState([]);
  const [autoTrader, setAutoTrader] = useState([]);
  const [trueCar, setTrueCar] = useState([]);
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState(2022);
  const [zip, setZip] = useState(10001);
  const [modelList, setModelList] = useState([]);

  console.log('make:', make, 'modelList:', modelList);

  const updateMake = (e) => {
    setMake(e);
    if (e === 'honda') {
      setModelList([
        { value: 'accord', label: 'Accord' },
        { value: 'civic', label: 'Civic' },
      ]);
      console.log('this is modellist from app.jsx: ', modelList);
    }
    if (e === 'toyota') {
      setModelList([
        { value: 'camry', label: 'Camry' },
        { value: 'supra', label: 'Supra' },
      ]);
    }
    if (e === 'tesla') {
      setModelList([
        { value: 'model 3', label: 'Model 3' },
        { value: 'model y', label: 'model Y' },
      ]);
    }
    if (e === 'ford') {
      setModelList([
        { value: 'focus', label: 'Focus' },
        { value: 'bronco', label: 'Bronco' },
      ]);
    }
    if (e === 'audi') {
      setModelList([
        { value: 'a4', label: 'A4' },
        { value: 'q7', label: 'Q7' },
      ]);
    }
  };
  const updateYear = (e) => {
    setYear(e.target.value);
  };
  const updateModel = (e) => {
    setModel(e);
  };
  const updateZip = (e) => {
    setZip(e.target.value);
  };

  const fetching = () => {
    fetch(`/api/scrape/${make}/${model}/${year}/${zip}`)
      .then((response) => response.json())
      .then((data) => {
        setCarsCom(data.carsComData);
        setAutoTrader(data.autoTraderData);
        setTrueCar(data.trueCarData);
      })
      .catch((err) => console.log('Error in fetch App.jsx:', err));
  };

  return (
    <div id='app'>
      <MainContainer />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <div>
              <SearchBar
                updateMake={updateMake}
                updateYear={updateYear}
                updateModel={updateModel}
                updateZip={updateZip}
                fetching={fetching}
                setModelList={setModelList}
                modelList={modelList}
                // updateModelList={updateModelList}
              />
              <CarsInfo
                carsCom={carsCom}
                autoTrader={autoTrader}
                trueCar={trueCar}
              />
            </div>
          }
        />
        <Route exact path='/wishlist' element={<Wishlist />} />
      </Routes>
    </div>
  );
};

export default App;
