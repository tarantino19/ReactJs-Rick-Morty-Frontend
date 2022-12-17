import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../components/Cards/Cards'
import InputGroup from '../components/Filter/Category/InputGroup';


const Location = () => {

  const [id, setId] = useState (1);
  const [info, setInfo] = useState ([]);
  const [results, setResults] = useState ([])
  const { name, type, dimension } = info
  const api = `https://rickandmortyapi.com/api/location/${id}`
  

  useEffect(() => {
    (async function() {
      let response = await axios(api)
      let data = response.data
      setInfo(data)
      const allData = await Promise.all (
        data.residents.map ((character) => {
          return fetch (character)
          .then ((res) => res.json ());
        })
      );
      setResults (allData)
    })();
  }, [api])

  return (
    <div className='container'>
      <div className="row">
        <h1 className='text-center mb-4'>
          Location:    
          <span className="" style={{color: "rgba(10, 87, 100)"}}>
          {name === ""? "Unknown" : ` ${name}`}
          </span>
        </h1>
        <h5 className='text-center'>
          Dimension: {dimension === ""? "Unknown" : dimension} 
        </h5>
        <h6 className='text-center'>
          Type: {type === ""? "Unknown" : type} 
        </h6>
      </div>
      <div className="row mt-5">
        <div className="col-lg-3 col-12">
        <h4 className="text-center mb-4">
          Pick a Location
        </h4>
        <InputGroup setId={setId} total={126} name="Location" />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
              <Cards page="/location/" results={results}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;


