import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../components/Cards/Cards'
import InputGroup from '../components/Filter/Category/InputGroup';


const Episodes = () => {

  const [id, setId] = useState (1);
  const [info, setInfo] = useState ([]);
  const [results, setResults] = useState ([])
  const {air_date, name} = info
  const api = `https://rickandmortyapi.com/api/episode/${id}`

  

  useEffect(() => {
    (async function() {
      let response = await axios(api)
      let data = response.data
      setInfo(data)
      const allData = await Promise.all (
        data.characters.map ((character) => {
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
          Episode:    
          <span className="" style={{color: "rgba(10, 87, 100)"}}>
          {name === ""? "Unknown" : ` ${name}`}
          </span>
        </h1>
        <h5 className='text-center'>
          Air Date: {air_date === ""? "Unknown" : air_date} 
        </h5>
      </div>
      <div className="row mt-5">
        <div className="col-3">
        <h4 className="text-center mb-4">
          Pick an Episode
        </h4>
        <InputGroup setId={setId} total={51} name="Episode" />
        </div>
        <div className="col-8">
          <div className="row">
              <Cards results={results}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Episodes;
