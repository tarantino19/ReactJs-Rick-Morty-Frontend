import React from 'react'
import { FilterButton } from '../FilterButton';

export const Gender = () => {
  return (<>
    <div className="accordion-item mt-4">
    <h2 className="accordion-header fs-6" id="headingOne">
      <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Gender
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
            <FilterButton />
      </div>
    </div>
  </div>
    </>

  )
}
