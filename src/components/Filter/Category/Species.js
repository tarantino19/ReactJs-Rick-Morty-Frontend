import React from 'react'
import { FilterButton } from '../FilterButton';

export const Species = () => {
  return (<>
    <div className="accordion-item">
    <h2 className="accordion-header fs-6" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Status
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <FilterButton />
      </div>
    </div>
  </div>
    </>
  )
}
