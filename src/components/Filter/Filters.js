import React from 'react';
import { Gender } from './Category/Gender';
import { Species } from './Category/Species';
import { Status } from './Category/Status';

const Filters = () => {
  return (<>
    <div className='col-3'>
      <div className="text-center fs-4 mb-2">Filter</div>
      <div style={{cursor: "pointer"}} className="text-center text-decoration-underline text-primary">Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Gender />
        <Species />
        <Status />
      </div>


    </div>
    </>
  );
}

export default Filters;
