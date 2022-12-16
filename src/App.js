import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import axios from "axios";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filter/Filters";
import React, { useState, useEffect } from 'react';
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";

function App () {
  return (<>
      <Router>
          <div className="App">
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/episodes" element={<Episodes />} />
                <Route path="/location" element={<Location />} />
            </Routes>
          </div>
      </Router>
    </>)
}


const Home = () => {

  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, updateFetchedData] = useState ([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState ("");
  const [gender, setGender] = useState ("");
  const [species, setSpecies] = useState ("");
  
  const {info, results} = fetchedData;

  const api = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  useEffect(() => {
    (async function() {
      let response = await axios(api)
      let data = response.data
      updateFetchedData (data)
    })();
  }, [api])
  //whenever api changes, I want to fetch new data


  return (<Wrapper>
    <div className="App">

    <h2 className="text-center ubuntu my-4 fw-bold" style={{color: "rgba(10, 87, 100)"}}>
    Character Search
    </h2>

    <Search setSearch={setSearch} setPageNumber={setPageNumber} />
    <div className="container">
    
      <div className="row">
          <Filters setStatus={setStatus} setPageNumber={setPageNumber} setGender={setGender} setSpecies={setSpecies}/>
        <div className="col-8"> 

          <div className="row">
            <Cards results={results} />
          </div>
        </div>
      </div>
    </div>

      <Pagination 
        info={info} 
        pageNumber={pageNumber} 
        setPageNumber={setPageNumber}
        />
    </div>
    </Wrapper>
  );
}

const Wrapper = styled.div `

  *, *::before, *::after {
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}

h2 {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: darkblue;
}

.container {
  width: 100%;
}

img {
  box-shadow: 1px 1px 6px;
}


`


export default App;

