import React from 'react';
import {useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const CardDetails = () => {
  const [fetchedData, updateFetchedData] = useState ([]);
  const {id} = useParams ();
  const api = `https://rickandmortyapi.com/api/character/${id}`

  const {name, image, origin, location, gender, species, type, status} = fetchedData

  useEffect(() => {
    (async function() {
      let response = await axios(api)
      let data = response.data
      updateFetchedData (data)
    })();
  }, [api])


  return (
    <div className='container d-flex justify-content-center'>
      <div className="d-flex flex-column gap-2">
        <h1 className='text-center'>{name}</h1>
        <img src={image} alt={name} className="img-fluid" />
        {(() => {
          if (status === "Dead") {
            return (
              <div
                className="badge bg-danger fs-6"
              > {status}
              </div>
            );
          } else if (status === "Alive") {
            return (
              <div
                className="badge bg-success fs-6"
              > {status}
              </div>
            );
          } else {
            return (
              <div
                className="badge bg-secondary fs-6"
              > {status}
              </div>
            );
          }
        })()}
        
        <div className="content">
          <div className='content-container'>
              <span className='fw-bold'>Gender: </span>
              {gender}
          </div>
          <div className='content-container'>
              <span className='fw-bold'>Specie: </span>
              {species}
          </div>
          <div className='content-container'>
              <span className='fw-bold'>Type: </span>
              {type === "" ? "Unknown": type}
          </div>
          <div className='content-container'>
              <span className='fw-bold'>Location: </span>
              {location?.name}
          </div>
          <div className='content-container'>
              <span className='fw-bold'>Origin: </span>
              {origin?.name}
          </div>
        </div>

      </div>
    </div>
  );
}

export default CardDetails;
