import React from 'react';
import styles from './Search.module.scss'

const Search = ({setSearch, setPageNumber}) => {
  return (<form className='d-flex justify-content-center gap-4 mb-5'>
          <input 
          onChange={(e) => {
            e.preventDefault ();
            setPageNumber (1);
            setSearch (e.target.value)}}
          type="text" className={styles.input} placeholder='Search for Characters' />
    </form>
   
  );
}

export default Search;
